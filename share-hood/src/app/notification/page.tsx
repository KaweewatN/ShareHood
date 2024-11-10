import React from "react";
import NotificationItem from "../../components/notification/NotificationItem";

import {FaBell} from "react-icons/fa";

const NotificationPage: React.FC = () => {
  return (
    <div>
      <NotificationItem
        icon={FaBell}
        title="Sample Title"
        message="Sample Message"
        timestamp="Just now"
      />
    </div>
  );
};

export default NotificationPage;
