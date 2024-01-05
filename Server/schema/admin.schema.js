import { z } from 'zod'

export const reterSchemas = z.object({
    name: z
    .string({
        required_error: "Name required",
    }),

    lastname: z
    .string({
        required_error: "Lastname required",
    }),

    email: z
    .string({
        required_error: "Email required",
    })
    .email({
        required_error: "Invalid email",
    }),

    password: z
    .string({
        required_error: "Password required",
        
    })
    .min(6, {
        message: "Password must be at least 6 characters"
    }),
    
})


export const loginSchemas = z.object({
    

    email: z
    .string({
        required_error: "Email required",
    })
    .email({
        required_error: "Invalid Email",
    }),

    password: z
    .string({
        required_error: "Password required",
    })
    .min(6, {
        message: "Password must be at least 6 characters"
    })

    
})