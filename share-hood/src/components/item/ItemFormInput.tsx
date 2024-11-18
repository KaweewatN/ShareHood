"use client";

// main
import {useState, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
//hooks
import useFetchItemDetail from "@service/hooks/query/useFetchItemDetail";
import useFetchRenteeByID from "@service/hooks/query/useFetchRenteeByID";
import useMutationCreateTransaction from "@service/hooks/mutation/useMutationCreateTransaction";
import useUpdateItem from "@service/hooks/mutation/useUpdateItem";
// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/shad.ui/form";
import {Textarea} from "@components/shad.ui/textarea";
import DefaultButton from "@components/hood.ui/DefaultButton";
import BackButton from "@components/hood.ui/BackButton";
import ItemCardLong from "@components/hood.ui/ItemCardLong";
import PriceDetails from "./PriceDetails";
import ItemFormSummary from "./ItemFormSummary";
import {Button} from "@components/shad.ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "src/components/shad.ui/select";
// functions
import {incrementDuration, decrementDuration} from "@service/functions/durationCounter";
import {incrementQuantity, decrementQuantity} from "@service/functions/quantityCounter";
import {calculateNewDateISO} from "@service/functions/calculateNewDate";
//types
import {ItemFormZod, ItemFormZodType} from "src/types/form/itemFormZod";
//constants
import {SERVICE_FEE} from "src/constants/constVariable";

export default function ItemFormInput({itemId, userId}: {itemId: string; userId: string}) {
  const router = useRouter();
  const {
    data: itemDetail,
    isLoading: isLoadingItem,
    error: fetchItemError,
  } = useFetchItemDetail({itemId});
  const {
    data: userData,
    isLoading: isLoadingUser,
    error: fetchUserError,
  } = useFetchRenteeByID(userId);
  const user = Array.isArray(userData) ? userData[0] : undefined;
  const userAddress = user?.address ? Object.values(user.address).slice(1).join(", ") : "";
  const {
    mutate: createTransaction,
    isError: isCreateTransactionError,
    isSuccess: isCreateTransactionSuccess,
  } = useMutationCreateTransaction({
    onSuccess: () => {
      alert("Transaction created successfully");
      router.push("/activity");
    },
    onError: () => {
      alert("Error creating Transaction (please change some value(s) and try again)");
    },
  });
  const {
    mutate: updateItemQuantity,
    isError: isUpdateItemError,
    isSuccess: isUpdateItemSuccess,
  } = useUpdateItem({
    itemId,
    onSuccess: () => {
      alert("Quantity update successfully");
    },
    onError: () => {
      alert("Quantity update failed");
    },
  });

  const itemDuration = useSearchParams().get("duration");
  const itemQuantity = useSearchParams().get("quantity");
  const [newDuration, setNewDuration] = useState<number>(Number(itemDuration));
  const [newQuantity, setNewQuantity] = useState<number>(Number(itemQuantity));

  const form = useForm<ItemFormZodType>({
    resolver: zodResolver(ItemFormZod),
    defaultValues: {
      itemShippingMethod: "self-pickup",
      itemQuantity: newQuantity,
      itemRentedDuration: newDuration,
      itemPaymentMethod: "credit_card",
      price: (itemDetail?.itemPrice ?? 0) * newDuration * newQuantity + SERVICE_FEE,
      shippingLocation: itemDetail?.pickupLocation || userAddress,
    },
  });

  const {setValue, watch} = form;
  const shippingMethodWatch = watch("itemShippingMethod");
  useEffect(() => {
    if (shippingMethodWatch === "self-pickup") {
      setValue("shippingLocation", itemDetail?.pickupLocation || "");
    } else {
      setValue("shippingLocation", userAddress || "");
    }
  }, [shippingMethodWatch, itemDetail, userAddress, setValue]);
  useEffect(() => {
    const updatedPrice = newQuantity * newDuration * Number(itemDetail?.itemPrice) + SERVICE_FEE;
    form.setValue("price", updatedPrice);
  }, [newQuantity, newDuration, itemDetail, form]);

  const transformFormData = (data: ItemFormZodType) => {
    return {
      userID: userId,
      itemID: itemDetail?.itemID,
      transactionStatus: "Order Placed",
      transactionDate: new Date().toISOString(),
      transactionReturnDate: calculateNewDateISO(newDuration, 2),
      paymentType: data.itemPaymentMethod,
      price: data.price,
      shippingLocation: data.shippingLocation,
      itemRentedDuration: data.itemRentedDuration,
      quantity: data.itemQuantity,
      shippingMethod: data.itemShippingMethod,
    };
  };

  const handleFormSubmit: SubmitHandler<ItemFormZodType> = async (data) => {
    const transformedData: any = transformFormData(data);
    createTransaction(transformedData);
    updateItemQuantity({
      itemID: itemDetail?.itemID,
      decrementValue: newQuantity,
    });
    if (isCreateTransactionError || isUpdateItemError) {
      form.reset();
    }
    form.reset();
    if (isCreateTransactionSuccess || isUpdateItemSuccess) {
      form.reset();
    }
  };

  if (isLoadingItem || isLoadingUser) {
    return <div className="loaderDot"></div>;
  }

  if (fetchItemError || fetchUserError) {
    return <div>Error happen!</div>;
  }

  if (!itemDetail) {
    return <div>No item details found</div>;
  }

  return (
    <div className="flex w-full flex-col items-center space-y-6">
      <div className="flex w-full items-center space-x-5">
        <BackButton path={`/item/${itemId}`} />
        <h3 className="font-semibold">Item Details</h3>
      </div>

      <ItemCardLong {...itemDetail} />
      <div className="flex w-full flex-col items-start space-y-3 px-5">
        <div className="flex w-full items-center justify-between space-x-5">
          <h3 className="w-2/3 text-sm font-semibold">Duration (Days)</h3>
          <div className="flex w-1/3 items-center justify-start space-x-4">
            <Button
              onClick={() =>
                decrementDuration(
                  Number(itemDetail?.itemReturnDuration),
                  newDuration,
                  setNewDuration,
                )
              }
              className="text-md rounded-lg border-2 px-2 py-1 text-defaultBlue shadow-none"
            >
              -
            </Button>
            <span className="text-sm">{newDuration}</span>
            <Button
              onClick={() =>
                incrementDuration(
                  Number(itemDetail?.itemReturnDuration),
                  newDuration,
                  setNewDuration,
                )
              }
              className="text-md rounded-lg border-2 px-2 py-1 text-defaultBlue shadow-none"
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between space-x-5">
          <h3 className="w-2/3 text-sm font-semibold">Quantity </h3>
          <div className="flex w-1/3 items-center justify-start space-x-4">
            <Button
              onClick={() =>
                decrementQuantity(Number(itemDetail?.itemQuantity), newQuantity, setNewQuantity)
              }
              className="text-md rounded-lg border-2 px-2 py-1 text-defaultBlue shadow-none"
            >
              -
            </Button>
            <span className="text-sm">{newQuantity}</span>
            <Button
              onClick={() =>
                incrementQuantity(Number(itemDetail?.itemQuantity), newQuantity, setNewQuantity)
              }
              className="text-md rounded-lg border-2 px-2 py-1 text-defaultBlue shadow-none"
            >
              +
            </Button>
          </div>
        </div>
      </div>

      <ItemFormSummary
        quantity={newQuantity}
        shippingType={form.getValues("itemShippingMethod")}
        duration={newDuration}
      />

      <PriceDetails
        itemName={itemDetail?.itemName}
        quantity={Number(newQuantity) || 0}
        price={itemDetail?.itemPrice}
        duration={Number(newDuration) || 0}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="flex w-full flex-col items-center justify-center space-y-5 shadow-none"
        >
          <FormField
            name="itemShippingMethod"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>Shipping method</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={(value) => {
                        form.setValue("itemShippingMethod", value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select shipping method" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup className="cursor-pointer">
                          <SelectLabel>Shipping method</SelectLabel>
                          <SelectItem value="self-pickup">Self pickup</SelectItem>
                          <SelectItem value="delivery">Delivery</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="shippingLocation"
            control={form.control}
            render={() => {
              return (
                <FormItem className="w-full">
                  <FormLabel>
                    {form.getValues("itemShippingMethod") === "self-pickup"
                      ? "Pickup Location"
                      : "Delivered address"}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full border-2"
                      placeholder="Enter your address"
                      disabled={form.getValues("itemShippingMethod") === "self-pickup"}
                      {...form.register("shippingLocation")}
                      value={
                        form.watch("shippingLocation") === "self-pickup"
                          ? itemDetail?.pickupLocation || ""
                          : form.watch("shippingLocation") || userAddress
                      }
                      onChange={(e) => setValue("shippingLocation", e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="itemPaymentMethod"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>Payment method</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={(value) => {
                        form.setValue("itemPaymentMethod", value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup className="cursor-pointer">
                          <SelectLabel>Payment method</SelectLabel>
                          <SelectItem value="credit_card">Credit card</SelectItem>
                          <SelectItem value="qr_code">QR code</SelectItem>
                          <SelectItem value="google_pay">Google pay</SelectItem>
                          <SelectItem value="apple_pay">Apple pay</SelectItem>
                          <SelectItem value="debit_card">Debit card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <DefaultButton label="Submit" type="submit" />
        </form>
      </Form>
    </div>
  );
}
