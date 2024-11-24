import {z} from "zod";

const addressSchema = z.object({
  addressLine: z.string().max(300).nullable(),
  subProvince: z.string().max(50).nullable(),
  province: z.string().max(50).nullable(),
  zip: z.string().length(5).nullable(),
});

const personalInfoSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().regex(/^\d{10}$/),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export const userInfoSchema = z.object({
  // email: z.string().email(),
  // password: z.string(),
  personalInfo: personalInfoSchema,
  address: addressSchema,
});

export type userInfoZodType = z.infer<typeof userInfoSchema>;
