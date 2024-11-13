"use client";

import React from "react";
import Image from "next/image";
import {FaChartBar, FaHeart, FaStar} from "react-icons/fa";

const LatestUploadedItem: React.FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Uploaded Item</h3>
      <div className="flex max-w-sm flex-col space-y-4 rounded-lg border bg-white p-5 shadow-md">
        {/* Top Section: Image and Details */}
        <div className="flex items-start space-x-4">
          {/* Product Image */}
          <Image
            src="/images/sweet-nike.png"
            alt="Item"
            width={100}
            height={100}
            className="rounded-lg"
          />

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <h4 className="text-lg font-semibold text-gray-800">Sweet Nike</h4>

            {/* Redesigned Category Tag */}
            <span className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 shadow-sm">
              Shoes
            </span>

            <p className="mt-2 text-sm text-gray-500">
              Status: <span className="font-medium text-yellow-500">Rented</span>
            </p>
            <p className="text-sm text-gray-500">
              Total Rental: <span className="font-semibold text-blue-500">4</span>
            </p>
          </div>
        </div>

        {/* Bottom Section: Stats and Price */}
        <div className="flex items-center justify-between">
          {/* Stats Section */}
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <FaChartBar className="text-lg" />
              <span>110</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaHeart className="text-lg text-red-500" />
              <span>20</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-lg text-yellow-500" />
              <span>7</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="text-right">
            <p className="text-lg font-bold text-blue-500">300 THB</p>
            <p className="text-sm text-gray-400">/ 1 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUploadedItem;
