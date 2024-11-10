"use client";

import React from 'react';
import NotificationList from './NotificationList';

const NotificationPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <header className="flex items-center space-x-4">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h1 className="text-xl font-bold">Notifications</h1>
      </header>
      <NotificationList />
    </div>
  );
};

export default NotificationPage;