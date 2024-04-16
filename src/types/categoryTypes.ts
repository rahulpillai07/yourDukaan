import { z } from "zod";

export const categoryZodSchema=z.object({
    name:z.string(),
    icon:z.string(),
})
export type CategoryType = z.infer<typeof categoryZodSchema>;