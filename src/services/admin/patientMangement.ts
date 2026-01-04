"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

export const getAllPatients = async (queryString?: string) => {
  try {
    const searchParams = new URLSearchParams(queryString);
    const page = searchParams.get("page") || "1";
    const searchTerm = searchParams.get("searchTerm") || "all";
    const response = await serverFetch.get(`/user?role=PATIENT${queryString ? `&${queryString}` : ""}`, {
      next: {
        tags: ["patients-list", `patients-page-${page}`, `patients-search-${searchTerm}`],
        revalidate: 180, // faster patient list updates
      },
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};

export const updatePatient = async (id: string, _prevState: any, formData: FormData) => {
  try {
    const payload = {
      status: formData.get("status") as string,
    };

    const response = await serverFetch.patch(`/user/status/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (result.success) {
      revalidateTag("patients-list", { expire: 0 });
      revalidateTag(`patient-${id}`, { expire: 0 });
      revalidateTag("patient-dashboard-meta", { expire: 0 });
      revalidateTag("admin-dashboard-meta", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};

export const getPatient = async (id: string) => {
  try {
    const response = await serverFetch.get(`/patient/${id}`, {
      next: {
        tags: [`patient-${id}`, "patients-list"],
        revalidate: 180, // more responsive patient profile updates
      },
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};

export const deletePatient = async (id: string) => {
  try {
    const response = await serverFetch.delete(`/patient/${id}`);
    const result = await response.json();
    
    if (result.success) {
      revalidateTag("patients-list", { expire: 0 });
      revalidateTag(`patient-${id}`, { expire: 0 });
      revalidateTag("patient-dashboard-meta", { expire: 0 });
      revalidateTag("admin-dashboard-meta", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};

export const getMyPatientData = async () => {
  try {
    const response = await serverFetch.get(`/patient/my-data`,{
      cache: "no-cache",
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};

export const updateMyPatientData = async (formData:any) => {
  try {
    const response = await serverFetch.patch(`/patient`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
};