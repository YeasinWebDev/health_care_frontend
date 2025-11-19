/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";
import { loginUser } from "./loginUser";
import { zodValidator } from "@/lib/zodValidator";

const registerValidationZodSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    address: z.string().optional(),
    email: z.email({ message: "Valid email is required" }),
    gender: z.string({ message: "Gender is required" }),
    password: z.string().min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
    confirmPassword: z.string().min(6, {
        error: "Confirm Password is required and must be at least 6 characters long",
    }),
}).refine((data: any) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
});


export const registerPatient = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const validationData = {
            name: formData.get('name'),
            address: formData.get('address'),
            email: formData.get('email'),
            gender: formData.get('gender'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        }

        if(zodValidator(validationData, registerValidationZodSchema).success === false){
            return zodValidator(validationData, registerValidationZodSchema);
        }

        const validatedFields = zodValidator(validationData, registerValidationZodSchema).data;

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(validatedFields));

        if(formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/create-patient`, {
            method: "POST",
            body: newFormData,
            cache: "no-store",
        }).then(res => res.json());


        if(res.success){
           await loginUser(_currentState, formData);
        }

        return res;

    } catch (error) {
        console.log(error);
        return { error: "Registration failed" };
    }
}