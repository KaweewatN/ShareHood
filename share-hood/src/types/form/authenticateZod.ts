import * as z from "zod";

export const SignInFormZod = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});
export type SignInFormZodType = z.infer<typeof SignInFormZod>;

export const SignUpFormZod = z
  .object({
    firstName: z.string().max(20).min(1),
    lastName: z.string().max(20).min(1),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    birthDate: z.date(),
    phoneNumber: z.string().max(10).startsWith("0"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
export type SignUpFormZodType = z.infer<typeof SignUpFormZod>;
