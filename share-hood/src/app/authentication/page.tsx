import AuthenContainer from "@components/authentication/AuthenContainer";
import {getServerAuthSession} from "src/app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

export default async function SignIn() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/home");
  }
  return <AuthenContainer />;
}
