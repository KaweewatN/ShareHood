" use client";

// main
import {useTransition, useMemo, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
// hooks
import useFetchUserByID from "@service/hooks/query/useFetchUserByID";
import useUpdateProfile from "@service/hooks/mutation/useUpdateProfile";
// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/shad.ui/form";
import {Input} from "@components/shad.ui/input";
import DefaultButton from "@components/hood.ui/DefaultButton";
import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";
import {toast} from "sonner";
// types
import {userInfoSchema, userInfoZodType} from "src/types/form/personalInfoZod";
import {convertToDate} from "@service/functions/convertToDate";
import {Label} from "@radix-ui/react-label";

export default function PersonalInfoForm({userId, role}: {userId: string; role: string}) {
  const {data, isLoading} = useFetchUserByID(userId, role.toLowerCase());
  const [isPending, startTransition] = useTransition();
  const dataFormatted = useMemo(
    () => (Array.isArray(data) && data.length > 0 ? data[0] : {}),
    [data],
  );
  const {mutate: updateProfile} = useUpdateProfile({
    userId,
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: () => {
      toast.error("Profile update failed");
    },
  });

  const defaultValues = useMemo(
    () => ({
      personalInfo: {
        firstName: dataFormatted?.personalInfo?.firstName ?? "",
        lastName: dataFormatted?.personalInfo?.lastName ?? "",
        phone: dataFormatted?.personalInfo?.phone ?? "",
        dateOfBirth: dataFormatted?.personalInfo?.dateOfBirth ?? "",
      },
      address: {
        addressLine: dataFormatted?.address?.addressLine ?? "",
        subProvince: dataFormatted?.address?.subProvince ?? "",
        province: dataFormatted?.address?.province ?? "",
        zip: dataFormatted?.address?.zip ?? "",
      },
    }),
    [dataFormatted, data],
  );

  const form = useForm<userInfoZodType>({
    resolver: zodResolver(userInfoSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  const handleSubmit: SubmitHandler<userInfoZodType> = async (data) => {
    startTransition(async () => {
      updateProfile(data);
      window.location.reload();
    });
  };

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <div className="loaderDot"></div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
        <div className="relative mt-3 h-24 w-24 md:mt-5 md:h-32 md:w-32">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="/images/Nipun.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 shadow-md md:h-8 md:w-8">
            <span>✏️</span>
          </button>
        </div>

        <span className="rounded-lg border-2 border-defaultBlue bg-blue-100 px-2 text-sm text-defaultBlue">
          {dataFormatted.role}
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full flex-col items-start justify-center space-y-3 shadow-none"
        >
          <Label className="text-md text-start font-semibold text-defaultBlue md:text-lg">
            Personal Info
          </Label>
          <div className="flex w-full flex-col items-center justify-center space-y-5 md:space-y-7">
            <FormItem className="w-full">
              <Label className="text-sm md:text-base">Email</Label>
              <Input type="email" value={dataFormatted?.email} disabled />
            </FormItem>
            <FormField
              name="personalInfo.firstName"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">FirstName</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="personalInfo.lastName"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">LastName</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="personalInfo.phone"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">Phone</FormLabel>
                    <FormControl>
                      <Input type="phone" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              name="personalInfo.dateOfBirth"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">Date Of Birth</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={convertToDate(field.value) ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <br></br>
          <Label className="text-md text-start font-semibold text-defaultBlue md:text-lg">
            Address
          </Label>
          <div className="flex w-full flex-col items-center justify-center space-y-5 md:space-y-7">
            <FormField
              name="address.addressLine"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">Address line</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="address.subProvince"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">Sub-Province</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="address.province"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">Province</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="address.zip"
              control={form.control}
              render={({field}) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm md:text-base">ZIP code</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <br></br>
          <DefaultButton
            label={isPending ? "Saving" : "Save"}
            type="submit"
            className="text-md"
            disabled={isPending}
          />
        </form>
      </Form>
    </div>
  );
}
