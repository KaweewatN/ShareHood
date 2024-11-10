"use client";

import React from "react";
import NotificationList from "./NotificationList";

const NotificationPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-md p-4">
      <header className="flex items-center space-x-4">
        <button className="text-xl text-gray-600">&larr;</button>
        <h1 className="text-xl font-bold">Notifications</h1>
      </header>
      <NotificationList />
    </div>
  );
};

export default NotificationPage;
