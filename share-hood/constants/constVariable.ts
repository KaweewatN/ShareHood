import z from "zod";

export const USER = z.enum(["Developer", "Admin", "Renter", "Customer"]);

export const ITEM_STATUS = z.enum(["Available", "Rented", "Unavailable"]);
