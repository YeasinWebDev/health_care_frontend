"use server"

import { serverFetch } from "@/lib/server-fetch";


export const getAllPatients = async (queryString?: string) => {
    try {
        const response = await serverFetch.get(`/user?role=PATIENT${queryString ? `&${queryString}` : ""}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
    }
}

export const updatePatient = async (id: string, _prevState: any, formData: FormData) => {
    try {
        const payload ={
            status: formData.get("status") as string,
        }

        const response = await serverFetch.patch(`/user/status/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const result = await response.json();
        return result;
    } catch (error:any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
    }
}

export const getPatient = async (id: string) => {
    try {
        const response = await serverFetch.get(`/patient/${id}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
    }
}

export const deletePatient = async (id: string) => {
    try {
        const response = await serverFetch.delete(`/patient/${id}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
    }
}