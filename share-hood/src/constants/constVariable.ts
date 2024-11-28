import z from "zod";

export const USER = z.enum(["Developer", "Admin", "Renter", "Customer"]);
export const ITEM_STATUS = z.enum(["Available", "Out of stock", "Unavailable"]);

export const SALTROUNDS = 10;
export const SERVICE_FEE = 10;

export const TRACK_NUMBER = "LQNSU346JK";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
