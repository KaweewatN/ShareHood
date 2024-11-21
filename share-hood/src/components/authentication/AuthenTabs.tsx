import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/shad.ui/tabs";

import Image from "next/image";

//file
import SignInForm from "./SignInForm";
import SignUpForm from "./SignupForm";

export default function AuthenTabs() {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-5/6 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center space-y-3 rounded-xl bg-white shadow-lg">
      <div className="flex w-full flex-col p-7">
        <div className="mb-5 flex w-full flex-col items-center justify-center space-x-1">
          <Image src={"/images/logo.png"} alt={"sign-in-image"} width={200} height={200} />
          <h2 className="text-center text-xl font-semibold">Get Started now</h2>
          <p className="max-w-60 text-center text-xs text-gray-400">
            Sign up now and enjoy rental ease like never before.
          </p>
        </div>
        <Tabs defaultValue="signin">
          <TabsList className="grid w-full grid-cols-2 bg-slate-200 data-[state=active]:bg-slate-50 data-[state=active]:shadow-sm">
            <TabsTrigger value="signin" className="rounded-l-lg">
              Sign in
            </TabsTrigger>
            <TabsTrigger value="signup" className="rounded-r-lg">
              Sign up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="w-full">
            <SignInForm />
          </TabsContent>

          <TabsContent value="signup" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
