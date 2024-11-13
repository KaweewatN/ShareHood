// components/LatestUploadedItem.tsx
"use client";

import React from "react";
import OwnerItemCard from "@components/hood.ui/OwnerItemCard"; // Adjust path if necessary
import { OwnerItemType } from "../../types/apiType";

const latestItem: OwnerItemType = {
  itemID: "001",
  itemName: "Sweet Nike",
  itemImage: "/images/sweet-nike.png",
  itemPrice: 300,
  category: "Shoes",
  itemStatus: "Rented",
  ownerName: "Nipun Kharuehapaisarn",
};

const LatestUploadedItem: React.FC = () => {
  return (
    <div className="mx-auto max-w-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Uploaded Item</h3>
      
      {/* Pass latestItem as props to OwnerItemCard */}
      <OwnerItemCard {...latestItem} />
    </div>
  );
};

export default LatestUploadedItem;