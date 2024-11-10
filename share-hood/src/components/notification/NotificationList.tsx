"use client";

import React from 'react';
import NotificationItem from './NotificationItem';
import { FaBell, FaBox, FaComment } from 'react-icons/fa';

const NotificationList: React.FC = () => {
  return (
    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Today</h3>
        <NotificationItem
          icon={FaBell}
          title="Your item ‘GoPro Camera’ was successfully borrowed!"
          message="John Doe has picked up the item. Your payment is held in escrow until return."
          timestamp="10m ago"
        />
        <NotificationItem
          icon={FaBox}
          title="Item Pickup Scheduled"
          message="Your pickup for ‘Camping Tent’ is scheduled for tomorrow at 10 AM."
          timestamp="20m ago"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold">Yesterday</h3>
        <NotificationItem
          icon={FaComment}
          title="New Message from Lisa"
          message="Lisa: Can I extend the rental period for the ‘GoPro Camera’?"
          timestamp="1d ago"
        />
      </div>
    </div>
  );
};

export default NotificationList;