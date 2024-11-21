import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProfilePageSkeleton() {
  return (
    <>
      <div className="mt-6 flex w-full flex-col space-y-3 p-2">
        <div className="flex w-full flex-col items-center space-y-2">
          <Skeleton height={70} circle width={70} />
          <Skeleton height={25} width={150} />
          <Skeleton height={25} width={150} />
        </div>
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
        <Skeleton height={40} width="100%" />
      </div>
    </>
  );
}

export default ProfilePageSkeleton;
