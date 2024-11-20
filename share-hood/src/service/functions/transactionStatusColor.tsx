export const TransactionStatusColor = (status: string) => {
  switch (status) {
    case "Order Confirmed":
      return "text-cyan-500";
    case "Shipping":
      return "text-cyan-500";
    case "Rented":
      return "text-blue-500";
    case "Completed":
      return "text-green-600";
    default:
      return "text-gray-400";
  }
};
