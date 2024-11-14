"use client";

// main
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

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

// types
import {SignInFormZod} from "../../types/form/authenticateZod";
import {SignInFormZodType} from "../../types/form/authenticateZod";

export default function SignInForm() {
  const router = useRouter();
  const form = useForm<SignInFormZodType>({
    resolver: zodResolver(SignInFormZod), // revalidate the form schema
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit: SubmitHandler<SignInFormZodType> = async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        alert("Something went wrong, please try again");
      } else {
        alert("Sign in success");
        router.push("/home");
      }
    } catch (error) {
      alert("Sign in failed, please change your email or password");
      throw new Error(`Sign-in failed: ${error}`);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-5 shadow-none"
      >
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
          <Button variant="link" type="button" className="text-xs text-defaultBlue">
            Forget password?
          </Button>
        </div>
        <DefaultButton label="Sign In" type="submit" />
      </form>
    </Form>
  );
}
