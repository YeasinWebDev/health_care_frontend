/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";
import { setCookie } from "./tokenHandler";

const loginValidationZodSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const validatedFields = loginValidationZodSchema.safeParse(loginData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues.map(issue => {
                    return {
                        field: issue.path[0],
                        message: issue.message,
                    }
                })
            }
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        })

        const result = await res.json();

       if(result.success){

       await setCookie("accessToken", result.data.token.accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite:"none"
        });
       await setCookie("refreshToken", result.data.token.refreshToken,{
            httpOnly: true,
            secure: true,
            maxAge:  30 * 24 * 60 * 60 * 1000 ,
            sameSite:"none"
        });
       }

        return result;

    } catch (error) {
        console.log(error);
        return { error };
    }
}