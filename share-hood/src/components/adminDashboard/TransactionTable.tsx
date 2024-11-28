"use client";

import useFetchAllTransactions from "@service/hooks/query/admin/useFetchAllTransactions";
import {TransactionType} from "src/types/apiType";

export default function TransactionTable() {
  const {data: transactions, isLoading} = useFetchAllTransactions();
  if (isLoading)
    return (
      <div className="flex justify-center p-5">
        <div className="loaderDot"></div>
      </div>
    );
  return (
    <>
      <h1 className="text-md mt-5 font-semibold text-defaultBlue">
        Count: {transactions ? transactions.length : 0}
      </h1>
      <div className="mt-3 overflow-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-left">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Transaction ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">User ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Item ID</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Transaction Date</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Item Return Date</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Payment Type</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Shipping Location</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Rented Duration</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Quantity</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Shipping Method</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Item Arrival Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {Array.isArray(transactions) &&
              transactions.map((transaction: TransactionType, index: number) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="whitespace-nowrap p-4">{transaction.transactionID}</td>
                  <td className="whitespace-nowrap p-4">{transaction.userID}</td>
                  <td className="whitespace-nowrap p-4">{transaction.itemID}</td>
                  <td className="whitespace-nowrap p-4">{transaction.transactionStatus}</td>
                  <td className="whitespace-nowrap p-4">
                    {new Date(transaction.transactionDate).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap p-4">
                    {new Date(transaction.itemReturnDate).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap p-4">{transaction.paymentType}</td>
                  <td className="whitespace-nowrap p-4">{transaction.price}</td>
                  <td className="whitespace-nowrap p-4">{transaction.shippingLocation}</td>
                  <td className="whitespace-nowrap p-4">{transaction.itemRentedDuration}</td>
                  <td className="whitespace-nowrap p-4">{transaction.quantity}</td>
                  <td className="whitespace-nowrap p-4">{transaction.shippingMethod}</td>
                  <td className="whitespace-nowrap p-4">
                    {new Date(transaction.itemArrivalDate).toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
