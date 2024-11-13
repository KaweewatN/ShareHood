"use client";

import React from "react";
import OwnerItemCard from "@components/hood.ui/OwnerItemCard"; // Adjust path if necessary
import CategoryTag from "@components/hood.ui/CategoryTag"; // Adjust path if necessary
import { FaTag } from "react-icons/fa"; // Import an icon for the category tag
import { ItemType } from "../../types/apiType";

// Example item data to pass to OwnerItemCard
const latestItem: ItemType = {
  itemImage: "/images/sweet-nike.png",
  itemName: "Sweet Nike",
  category: "Shoes",
  itemPrice: 300,
  itemStatus: "Rented",
};

const LatestUploadedItem: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Uploaded Item</h3>
      
      {/* Utilize OwnerItemCard with the latest item data */}
      <OwnerItemCard {...latestItem}>
        {/* Insert CategoryTag with an icon */}
        <CategoryTag label={latestItem.category} icon={FaTag} />
      </OwnerItemCard>
    </div>
  );
};

export default LatestUploadedItem;