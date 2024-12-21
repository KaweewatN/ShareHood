"use client";

// main
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

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
import {Checkbox} from "@components/shad.ui/checkbox";
import DefaultButton from "@components/hood.ui/DefaultButton";
import {PasswordInput} from "@components/shad.ui/password-input";
import {DatePicker} from "@components/hood.ui/DatePicker";
import {toast} from "sonner";

// hooks
import useMutationCreateUser from "@service/hooks/mutation/useMutationCreateUser";

// types
import {SignUpFormZod} from "src/types/form/authenticateZod";
import {SignUpFormZodType} from "src/types/form/authenticateZod";
import {CreateUserInputType} from "src/types/apiType";

export default function SignUpForm() {
  const form = useForm<SignUpFormZodType>({
    resolver: zodResolver(SignUpFormZod), // revalidate the form schema
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: new Date(),
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const transformFormData = (data: SignUpFormZodType) => {
    return {
      password: data.password,
      email: data.email,
      emailVerified: true,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phoneNumber,
      dateOfBirth: data.birthDate.toISOString(),
    };
  };

  const {
    mutate: createUser,
    isError,
    isSuccess,
  } = useMutationCreateUser({
    role: "rentee",
    onSuccess: () => {
      toast.success("User created successfully, please sign in");
    },
    onError: () => {
      toast.error("Error creating user (please change some value(s) and try again)");
    },
  });

  const handleCreateUser: SubmitHandler<SignUpFormZodType> = async (data) => {
    const transformedData: CreateUserInputType = transformFormData(data);
    createUser(transformedData);
    if (isSuccess) {
      form.reset();
    }
    form.reset();
    if (isError) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateUser)}
        className="scrollbar-hide flex max-h-96 w-full flex-col items-center justify-start space-y-5 overflow-y-auto pt-2 shadow-none"
      >
        <FormField
          name="firstName"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="John" type="label" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="lastName"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" type="label" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="birthDate"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel {...field}>Birth date</FormLabel>
                <br></br>
                <FormControl>
                  <DatePicker />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="email"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="phoneNumber"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>phone</FormLabel>
                <FormControl>
                  <Input placeholder="098-624-1567" type="phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="password"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex w-full justify-between space-x-2">
          <div className="flex items-center space-x-2 text-xs">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="inline-block font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Agree with
              <span className="inline text-xs text-defaultBlue hover:underline">
                Terms and Conditions
              </span>
            </label>
          </div>
        </div>
        <DefaultButton label="Sign Up" type="submit" />
      </form>
    </Form>
  );
}
