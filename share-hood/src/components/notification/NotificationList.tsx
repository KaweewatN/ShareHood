"use client";

import React from "react";
import NotificationItem from "./NotificationItem";
import useFetchData from "@service/hooks/useFetchData";
import {NotificationType} from "src/types/apiType";

function NotificationList() {
  const {data: NotiData, isLoading} = useFetchData<NotificationType[]>({
    queryKey: "fetch-notifications",
    apiPath: "api/notifications",
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full pt-10">
          <p>Loading..</p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-start space-y-5">
          <div>
            {NotiData?.map((noti: any) => (
              <>
                <NotificationItem
                  key={noti.notificationID}
                  title={noti.notificationHeader}
                  message={noti.notificationDetails}
                  timestamp={noti.notificationTimestamp}
                  type={noti.notificationType}
                />
                {NotiData.indexOf(noti) !== NotiData.length - 1 && (
                  <hr className="mb-2 border-gray-200" />
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationList;
