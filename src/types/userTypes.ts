import{z} from 'zod';

export const userZodSchema=z.object({
    username:z.string(),
    email:z.string().email(),
     password : z.string().min(6).refine((value) => {
        // Check if the password contains at least one number
        const hasNumber = /[0-9]/.test(value);
        // Check if the password contains at least one uppercase letter
        const hasUpperCase = /[A-Z]/.test(value);
        // Return true if both conditions are met
        return hasNumber && hasUpperCase;
      }, {
        message: 'Password must be at least 6 characters long and contain at least one number and one uppercase letter'
      })
})

export type userType=z.infer<typeof userZodSchema>