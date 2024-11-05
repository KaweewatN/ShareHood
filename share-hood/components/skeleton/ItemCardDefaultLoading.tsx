"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ItemCardDefaultLoading() {
  return (
    <div className="flex max-h-52 max-w-48 flex-col justify-evenly rounded-lg border-[1px] p-3 shadow-sm">
      <div className="h-40 w-40">
        <Skeleton height={80} width={145} />
      </div>
      <div className="flex space-x-2 text-xs">
        <p className="flex items-center space-x-1 text-defaultBlue">
          <Skeleton height={20} width={50} />
        </p>
        <p className="flex items-center space-x-1 text-defaultBlue">
          <Skeleton height={20} width={50} />
        </p>
      </div>
      <div className="mt-2 flex flex-col text-xs text-gray-400">
        <Skeleton height={20} width={50} />
        <Skeleton height={20} width={80} />
      </div>
    </div>
  );
}
