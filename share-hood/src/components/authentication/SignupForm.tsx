"use client";

// main
import {useForm} from "react-hook-form";
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

// types
import {SignUpFormZod} from "../../types/form/authenticateZod";
import {SignUpFormZodType} from "../../types/form/authenticateZod";
import {DatePicker} from "@components/hood.ui/DatePicker";

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

  const handleSubmit = () => {
    alert("Form submitted");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="scrollbar-hide flex max-h-96 w-full flex-col items-center justify-start space-y-5 overflow-y-auto pt-2 shadow-none"
      >
        <FormField
          name="firstName"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Firstname</FormLabel>
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
                <FormLabel>Lastname</FormLabel>
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
                <FormLabel {...field}>Birthdate</FormLabel>
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
          name="password"
          control={form.control}
          render={({field}) => {
            return (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
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
                  <Input placeholder="Confirm Password" type="password" {...field} />
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
              Agree with{" "}
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
