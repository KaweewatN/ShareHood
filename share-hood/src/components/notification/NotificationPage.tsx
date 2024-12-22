"use client";

import React from "react";
import NotificationList from "./NotificationList";
import BackButton from "@components/hood.ui/BackButton";

function NotificationPage() {
  return (
    <div className="px-5 py-5">
      {/* Header */}
      <header className="relative w-full">
        <BackButton path="/home" className="absolute -top-1" />
        <h1 className="text-center text-xl font-bold text-gray-800">Notifications</h1>
      </header>

      {/* Notification List */}
      <NotificationList />
    </div>
  );
}

export default NotificationPage;
