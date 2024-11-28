export const transactionStatusMessage = (status: string) => {
  switch (status) {
    case "Order Confirmed":
      return "Your order has been placed and is awaiting shipment from the owner.";
    case "Sent to delivery":
      return "Your order has been sent to delivery.";
    case "Shipping":
      return "Your order is on the way.";
    case "Rented":
      return "You are currently renting this item.";
    case "Completed":
      return "Your transaction is completed.";
    default:
      return "Unknown transaction status.";
  }
};
