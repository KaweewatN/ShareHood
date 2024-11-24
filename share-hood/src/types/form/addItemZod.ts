import * as z from "zod";

export const AddItemZod = z.object({
  itemName: z.string().max(30).nonempty("Item name cannot be empty"),
  itemDescription: z.string().max(255).nonempty("Item description cannot be empty"),
  itemPrice: z.number().positive().min(1, "Item price must be greater than 0"),
  itemQuantity: z.number().int().positive().min(1, "Item quantity must be at least 1"),
  itemStatus: z.enum(["Available"]),
  category: z.string().max(30),
  itemReturnDuration: z
    .number()
    .int()
    .positive()
    .min(1, "Item return duration must be at least 1 day")
    .max(30, "Item return duration must be less than 30 days"),
  dateAdded: z.string().datetime(),
  pickupLocation: z.string().nullable().optional(),
  itemImage: z.string().url().nonempty("Item Image cannot be empty"),
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported.",
  // )
  // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`),
  selfPickup: z.boolean(),
  delivery: z.boolean(),
});

export type AddItemZodType = z.infer<typeof AddItemZod>;
