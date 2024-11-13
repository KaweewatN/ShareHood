"use client";

import React from "react";

const LatestUploadedItem: React.FC = () => {
  return (
    <div className="mt-4 rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Latest Uploaded Item</h3>
      <div className="mt-4 flex items-center">
        <img src="/images/sweet-nike.png" alt="Item" className="h-20 w-20 rounded-lg" />
        <div className="ml-4">
          <h4 className="text-base font-bold">Sweet Nike</h4>
          <p className="text-sm text-gray-500">
            Shoes • <span className="text-red-500">Rented</span>
          </p>
          <p className="text-sm text-gray-500">
            Total Rental: <span className="font-semibold">4</span>
          </p>
          <p className="text-lg font-bold text-blue-500">300 THB / 1 Day</p>
          <div className="mt-2 flex items-center space-x-2 text-gray-500">
            <span>📊 110</span>
            <span>❤️ 20</span>
            <span>⭐️ 7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUploadedItem;
