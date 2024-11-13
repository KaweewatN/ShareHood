"use client";

import React from "react";
import Image from "next/image";

const LatestReview: React.FC = () => {
  return (
    <div className="mt-4 rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Latest Review</h3>
      <div className="mt-4 flex items-center">
        <Image
          src="/images/Default-LINE-moon.JPG" // Correct path and extension
          alt="Reviewer"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-base font-semibold">Nunthaphak Boripunt</h4>
          <p className="text-sm text-gray-500">25/10/2024</p>
          <p className="mt-1 text-sm text-gray-700">
            Good and Comfort Shoes, Shipping is also excellent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
