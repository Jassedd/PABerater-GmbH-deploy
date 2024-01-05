
import { z } from "zod";

export const productCreateSchemas = z.object({
    img: z
    .string({
        required_error: "Image required",
    }),

    title: z
    .string({
        required_error: "Title required",
    }),

    description: z
    .string({
        required_error: "Description required",
    }),

    Date: z
    .number({
        required_error: "Date required",
    })
})