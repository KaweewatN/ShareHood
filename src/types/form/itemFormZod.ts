import * as z from "zod";

export const ItemFormZod = z.object({
  itemShippingMethod: z.string().min(1, "Please select a shipping method").max(15),
  itemQuantity: z.number(),
  itemRentedDuration: z.number(),
  itemPaymentMethod: z.string().min(1, "Please select a payment method").max(15),
  price: z.number(),
  shippingLocation: z.string().min(1, "Please provide a shipping location").max(255),
});

export type ItemFormZodType = z.infer<typeof ItemFormZod>;
