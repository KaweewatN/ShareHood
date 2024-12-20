import {authenticateUser} from "src/app/api/auth/[...nextauth]/auth";
import {getUserID} from "src/app/api/auth/[...nextauth]/auth";
import {checkRole} from "src/app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";
import PersonalInfoContainer from "@components/profile/personalInfo/PersonalInfoContainer";

export default async function PersonalInfo() {
  authenticateUser().catch(() => {
    redirect("/home");
  });
  const userId = await getUserID();
  const role = await checkRole();
  return <PersonalInfoContainer userId={userId} role={role} />;
}
