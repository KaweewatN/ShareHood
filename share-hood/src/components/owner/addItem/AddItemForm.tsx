"use client";

// main
import {useState, useTransition} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {convertBlobUrlToFile} from "@libs/file/convertBlobUrlToFile";
import {uploadImage} from "@libs/db/storage/client";
//hooks
import useCreateItem from "@service/hooks/mutation/useCreateItem";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "src/components/shad.ui/select";
import {Input} from "@components/shad.ui/input";
import {Label} from "@components/shad.ui/label";
import {Checkbox} from "@components/shad.ui/checkbox";
import {toast} from "sonner";

// types
import {AddItemZod, AddItemZodType} from "src/types/form/addItemZod";

export default function AddItemForm({userId}: {userId: string}) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const {mutate: createItem} = useCreateItem({
    onSuccess: () => {
      toast.success("Item is added successfully");
      router.push("/owner/items");
    },
    onError: () => {
      toast.error("Error adding Item (please change some value(s) and try again)");
    },
  });

  // form
  const form = useForm<AddItemZodType>({
    resolver: zodResolver(AddItemZod),
    defaultValues: {
      itemName: "",
      itemDescription: "",
      itemPrice: 0,
      itemQuantity: 0,
      itemStatus: "Available",
      category: "",
      itemReturnDuration: 0,
      dateAdded: new Date().toISOString(),
      pickupLocation: null,
      itemImage: imageUrl || "",
      selfPickup: true,
      delivery: false,
    },
  });

  // transform form data to match the API
  const transformFormData = (data: AddItemZodType) => {
    return {
      userID: userId,
      itemName: data.itemName,
      itemDescription: data.itemDescription,
      itemPrice: data.itemPrice,
      itemQuantity: data.itemQuantity,
      itemStatus: data.itemStatus,
      category: data.category,
      itemReturnDuration: data.itemReturnDuration,
      dateAdded: data.dateAdded,
      pickupLocation: data.pickupLocation,
      itemImage: form.getValues("itemImage"),
    };
  };

  // handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  // handle upload image
  const handleClickUploadImage = (data: any) => {
    startTransition(async () => {
      let imageFile;
      if (imageUrl) {
        imageFile = await convertBlobUrlToFile(imageUrl);
      }

      if (!imageFile) {
        alert("No image file selected");
        return;
      }
      const {imageUrl: uploadedImageUrl, error} = await uploadImage({
        file: imageFile,
        bucket: "ShareHood_Bucket",
        folder: "Item",
      });
      if (error) {
        alert(`Error uploading image, ${error}`);
      }
      form.setValue("itemImage", uploadedImageUrl);
      const transformedData: any = transformFormData(data);
      createItem(transformedData);
    });
  };

  // handle submit a form
  const handleSubmit: SubmitHandler<AddItemZodType> = async (data) => {
    handleClickUploadImage(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-5 shadow-none md:space-y-6"
      >
        <FormField
          name="itemName"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">Item Name</FormLabel>
                <FormControl>
                  <Input placeholder="Nike Air Force" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="itemDescription"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">Item Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full border-2"
                    placeholder="Nike Air Force is a shoe that is very comfortable to wear and is very stylish. It is a very popular shoe among teenagers"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="category"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">Category</FormLabel>
                <FormControl>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={(value) => {
                      form.setValue("category", value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup className="cursor-pointer">
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="Clothes">Clothes</SelectItem>
                        <SelectItem value="Gadgets">Gadgets</SelectItem>
                        <SelectItem value="Costumes">Costumes</SelectItem>
                        <SelectItem value="Shoes">Shoes</SelectItem>
                        <SelectItem value="Animal">Animal</SelectItem>
                        <SelectItem value="Office Equipment">Office Equipment</SelectItem>
                        <SelectItem value="Event Supplies">Event Supplies</SelectItem>
                        <SelectItem value="High heels">High heels</SelectItem>
                        <SelectItem value="Travel gear">Travel gear</SelectItem>
                        <SelectItem value="Automotive">Automotive</SelectItem>
                        <SelectItem value="Photography">Photography</SelectItem>
                        <SelectItem value="Car">Car</SelectItem>
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
          name="itemPrice"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">
                  Price <span className="text-xs text-slate-500 md:text-sm">*per day</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Price"
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="w-full flex-col space-y-2">
          <Label className="font-semibold md:text-base">Item Status</Label>
          <div className="flex w-full space-x-5">
            <FormField
              name="selfPickup"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className="flex w-fit items-center space-x-1">
                        <Checkbox
                          checked={!!field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                          name={field.name}
                          ref={field.ref}
                          onBlur={field.onBlur}
                          className="text-defaultBlue"
                        />
                        <label
                          htmlFor="selfPickup"
                          className="truncate text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Self pickup
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="delivery"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className="flex w-fit items-center space-x-1">
                        <Checkbox
                          checked={!!field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                          name={field.name}
                          ref={field.ref}
                          onBlur={field.onBlur}
                          className="text-defaultBlue"
                        />
                        <label
                          htmlFor="delivery"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delivery
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>

        <div className="flex w-full justify-start space-x-5">
          <FormField
            name="itemQuantity"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold md:text-base">Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="quantity"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              );
            }}
          />
          <FormField
            name="itemReturnDuration"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="font-semibold md:text-base">
                    Return Duration <span className="text-xs text-slate-500 md:text-sm">*day</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="return duration"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              );
            }}
          />
        </div>
        <FormField
          name="pickupLocation"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">
                  Pickup Location{" "}
                  <span className="text-xs text-slate-500 md:text-sm">*for self-pickup option</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full border-2"
                    placeholder="Pickup location for self pickup options"
                    disabled={!form.getValues().selfPickup}
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="itemImage"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel className="font-semibold md:text-base">Product Image</FormLabel>
                <FormControl>
                  <>
                    <Input
                      id="picture"
                      type="file"
                      className="cursor-pointer text-defaultBlue"
                      onChange={(e) => {
                        field.onChange(e);
                        handleImageChange(e);
                      }}
                      ref={field.ref}
                      disabled={isPending}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div>
          {" "}
          {imageUrl && (
            <div className="mt-2 rounded-md border-2 border-dashed p-2">
              <img
                src={imageUrl}
                alt={`image: ${imageUrl}`}
                className="h-40 w-full rounded-md object-cover md:h-60"
              />
            </div>
          )}
        </div>
        <DefaultButton
          label={isPending ? "Uploading" : "Add item"}
          type="submit"
          disabled={isPending}
        />
      </form>
    </Form>
  );
}
