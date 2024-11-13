// components/hood.ui/OwnerItemCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaChartBar, FaHeart, FaStar, FaTag } from "react-icons/fa";
import { OwnerItemType } from "../../types/apiType";
import CategoryTag from "@components/hood.ui/CategoryTag"; // Adjust path if necessary

const OwnerItemCard: React.FC<OwnerItemType> = ({
  itemImage,
  itemName,
  category,
  itemPrice,
  itemStatus,
}) => {
  return (
    <div className="mx-auto max-w-sm">
      <div className="flex flex-col space-y-6 rounded-lg border bg-white p-6 shadow-lg">
        {/* Top Section: Image and Details */}
        <div className="flex items-start space-x-5">
          {/* Product Image */}
          <Image src={itemImage} alt={itemName} width={130} height={130} className="rounded-lg" />

          {/* Product Details */}
          <div className="flex flex-col justify-between space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">{itemName}</h4>

            {/* Use CategoryTag with icon */}
            <CategoryTag label={category} icon={FaTag} />

            {/* Status */}
            <p className="text-sm text-gray-500">
              Status: <span className="font-medium text-yellow-500">{itemStatus}</span>
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
            <p className="text-lg font-bold text-blue-500">{itemPrice} THB</p>
            <p className="text-sm text-gray-400">/ 1 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerItemCard;