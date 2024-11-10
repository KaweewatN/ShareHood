"use client";

import React from 'react';
import NotificationList from './NotificationList';

const NotificationPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      {/* Header */}
      <header className="flex items-center space-x-4 mb-4">
        <button className="text-gray-600 text-lg">&larr;</button>
        <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
      </header>

      {/* Notification List */}
      <NotificationList />
    </div>
  );
};

export default NotificationPage;