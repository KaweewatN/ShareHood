"use client";

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

export default function LatestUploadedItem() {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Uploaded Item</h3>
      <OwnerItemCard {...latestItem} />
    </div>
  );
}