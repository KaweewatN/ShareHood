import React from "react";
import NotificationPage from "@components/notification/NotificationPage";

import {authenticateUser} from "src/service/functions/NextAuthFunction";
import {redirect} from "next/navigation";

export default async function Notification() {
  await authenticateUser().catch(() => {
    redirect("/authentication");
  });
  return <NotificationPage />;
}
