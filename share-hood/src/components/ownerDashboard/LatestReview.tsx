// components/LatestReview.tsx
"use client";

import React from "react";
import Image from "next/image";
import {FaStar} from "react-icons/fa";

const LatestReview: React.FC = () => {
  return (
    <div className="mx-auto max-w-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Review</h3>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center">
          {/* Perfect Circle Image */}
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/images/Default-LINE-moon.JPG" // Ensure this path is correct
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-md font-semibold text-gray-900">Nunthaphak Boripunt</h4>
            <p className="text-sm text-gray-500">25/10/2024</p>
            {/* Star Rating */}
            <div className="mt-1 flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xs text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-sm leading-relaxed text-gray-700">
          Good and comfortable shoes. The shipping was also excellent.
        </p>
      </div>
    </div>
  );
};

export default LatestReview;
