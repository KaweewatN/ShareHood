"use client";

import useFetchAllItems from "@service/hooks/query/admin/useFetchAllItems";
import {ItemType} from "src/types/apiType";
import Image from "next/image";

export default function ItemTable() {
  const {data: items, isLoading} = useFetchAllItems();
  if (isLoading)
    return (
      <div className="flex justify-center p-5">
        <div className="loaderDot"></div>
      </div>
    );
  return (
    <>
      <h1 className="text-md mt-5 font-semibold text-defaultBlue">
        Count: {items ? items.length : 0}
      </h1>
      <div className="mt-3 overflow-auto rounded-sm shadow-md">
        <table className="min-w-full border-collapse text-left">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Item ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">User ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Item Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Description</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Quantity</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Return Duration</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Date Added</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Pickup Location</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Owner Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Item Image</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {Array.isArray(items) &&
              items.map((item: ItemType, index: number) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="whitespace-nowrap p-4">{item.itemID}</td>
                  <td className="whitespace-nowrap p-4">{item.userID}</td>
                  <td className="whitespace-nowrap p-4">{item.itemName}</td>
                  <td className="p-4">{item.itemDescription}</td>
                  <td className="whitespace-nowrap p-4">{item.itemPrice}</td>
                  <td className="whitespace-nowrap p-4">{item.itemQuantity}</td>
                  <td className="whitespace-nowrap p-4">{item.itemStatus}</td>
                  <td className="whitespace-nowrap p-4">{item.category}</td>
                  <td className="whitespace-nowrap p-4">{item.itemReturnDuration}</td>
                  <td className="whitespace-nowrap p-4">
                    {new Date(item.dateAdded).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap p-4">{item.pickupLocation}</td>

                  <td className="whitespace-nowrap p-4">{item.ownerName}</td>
                  <td className="whitespace-nowrap p-4">
                    <Image
                      src={item.itemImage}
                      alt={item.itemName}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
