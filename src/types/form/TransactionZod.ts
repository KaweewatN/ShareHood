import {z} from "zod";

export const transactionZod = z.object({
  transactionStatus: z.enum(["Sent to delivery"], {
    errorMap: () => ({message: "Invalid transaction status"}),
  }),
});

export type TransactionZodType = z.infer<typeof transactionZod>;
