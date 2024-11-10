"use client";

import React from "react";
import NotificationList from "./NotificationList";
import BackButton from "@components/hood.ui/BackButton"; // Importing BackButton from Shad/UI

const NotificationPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-md p-4">
      {/* Header with BackButton */}
      <header className="relative mb-4 flex items-center justify-center">
        <BackButton path="/previous-page" className="absolute left-0" />{" "}
        {/* Utilizing BackButton from Shad/UI */}
        <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
      </header>

      {/* Notification List */}
      <NotificationList />
    </div>
  );
};

export default NotificationPage;
