"use client";
// main
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Image from "next/image";

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
import {Button} from "@components/shad.ui/button";

const formScema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});

export default function AuthenContainer() {
  const form = useForm<z.infer<typeof formScema>>({
    resolver: zodResolver(formScema), // revalidate the form schema
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {};
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center space-y-3 p-10"
        >
          <Image src={"/images/logo.png"} alt={"sign-in-image"} width={250} height={250} />
          <FormField
            name="email"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jondoe@email.com" type="email" {...field} />
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
          <div className="flex w-full justify-between space-x-2">
            <div className="flex items-center space-x-2 text-xs">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button variant="link" className="text-xs text-defaultBlue">
              Forget password?
            </Button>
          </div>
          <DefaultButton label="Sign In" type="submit" />
        </form>
      </Form>
    </>
  );
}
