"use client";

import React from 'react';
import NotificationList from './NotificationList';

const NotificationPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      {/* Header */}
      <header className="relative flex items-center justify-center mb-4">
        <button className="absolute left-0 text-gray-600 text-lg">&larr;</button>
        <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
      </header>

      {/* Notification List */}
      <NotificationList />
    </div>
  );
};

export default NotificationPage;