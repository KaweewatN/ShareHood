"use client";

import OwnerItemCard from "@components/owner/OwnerItemCard"; // Adjust path if necessary
import {OwnerItemType} from "src/types/apiType";

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
    <div className="w-full p-4 md:px-16">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Latest Uploaded Item</h3>
      <OwnerItemCard {...latestItem} />
    </div>
  );
}
