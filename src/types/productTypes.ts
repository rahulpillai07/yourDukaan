import{z} from'zod'
import { categoryZodSchema } from './categoryTypes'
export const productZodSchma=z.object({
    name:z.string(),
    mrp:z.number(),
    sellingPrice:z.number(),
    image:z.string(),
    quantity:z.number(),
    description:z.string().min(10),
    category:categoryZodSchema.omit({icon:true})

})

export type productType=z.infer<typeof productZodSchma>