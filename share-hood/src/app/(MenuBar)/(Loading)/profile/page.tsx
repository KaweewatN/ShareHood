import React from "react";
import ProfilePage from "@components/profile/ProfilePage";
import {getUserID} from "@service/functions/NextAuthFunction";
import {checkRole} from "src/app/api/auth/[...nextauth]/auth";
async function Profile() {
  const userId = await getUserID();
  const role = await checkRole();
  return <ProfilePage userId={userId} role={role} />;
}

export default Profile;
