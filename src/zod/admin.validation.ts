import z from "zod";

export const createAdminZodSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    contactNumber: z.string().min(10, "Contact Number must be at least 10 characters long"),
    address: z.string().optional(),
});

export const updateAdminZodSchema = z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
});