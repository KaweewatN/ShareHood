"use client";

import React from "react";
import Image from "next/image";

const LatestReview: React.FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">Latest Review</h3>
      <div className="rounded-lg border p-4 shadow-sm">
        <div className="mb-3 flex items-center">
          <Image
            src="/images/Default-LINE-moon.JPG"
            alt="Reviewer"
            width={40}
            height={40}
            className="rounded-full" // Ensures the image is circular
          />
          <div className="ml-4">
            <h4 className="text-base font-semibold">Nunthaphak Boripunt</h4>
            <p className="text-sm text-gray-500">25/10/2024</p>
          </div>
        </div>
        <p className="text-sm text-gray-700">Good and Comfort Shoes, Shipping is also excellent.</p>
      </div>
    </div>
  );
};

export default LatestReview;
