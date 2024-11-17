export const itemStatusColor = (status: string) => {
  switch (status) {
    case "Available":
      return "text-green-600";
    case "Unavailable":
      return "text-yellow-600";
    default:
      return "text-blue-600";
  }
};
