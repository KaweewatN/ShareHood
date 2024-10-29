"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ItemCardLongLoading() {
  return (
    <div className="flex w-full space-x-3 rounded-lg border-[1px] p-3 shadow-sm">
      <Skeleton height={80} width={140} />
      <div className="flex flex-col space-y-2">
        <Skeleton height={20} width={70} />
        <div className="flex space-x-2">
          <p className="flex items-center space-x-1">
            <Skeleton height={20} width={70} />
          </p>
          <p className="flex items-center space-x-1">
            <Skeleton height={20} width={70} />
          </p>
        </div>
        <div className="flex flex-col text-xs">
          <Skeleton height={20} width={70} />
        </div>
      </div>
    </div>
  );
}
