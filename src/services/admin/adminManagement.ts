"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createAdminZodSchema, updateAdminZodSchema } from "@/zod/admin.validation";
import { revalidateTag } from "next/cache";

export async function createAdmin(_prevState: any, formData: FormData) {
  try {
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      contactNumber: formData.get("contactNumber") as string,
      address: formData.get("address") as string,
      password: formData.get("password") as string,
    };

    if (zodValidator(payload, createAdminZodSchema).success === false) {
      return zodValidator(payload, createAdminZodSchema);
    }

    const validatedPayload = zodValidator(payload, createAdminZodSchema).data;

    if (!validatedPayload) {
      throw new Error("Invalid payload");
    }

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(validatedPayload));

    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }

    const response = await serverFetch.post("/user/create-admin", {
      body: newFormData,
    });
    const result = await response.json();

    if (result.success) {
      revalidateTag("admins-list", { expire: 0 });
      revalidateTag("admins-page-1", { expire: 0 });
      revalidateTag("admin-dashboard-meta", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
}

export async function getAdmins(queryString?: string) {
  try {
    const searchParams = new URLSearchParams(queryString);
    const page = searchParams.get("page") || "1";
    const searchTerm = searchParams.get("searchTerm") || "all";

    const response = await serverFetch.get(`/user?role=ADMIN${queryString ? `&${queryString}` : ""}`, {
      next: {
        tags: ["admins-list", `admins-page-${page}`, `admins-search-${searchTerm}`],
        revalidate: 180,
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
}

export async function getAdmin(id: string) {
  try {
    const response = await serverFetch.get(`/user/${id}`, {
      next: {
        tags: [`admin-${id}`, "admins-list"],
        revalidate: 180, // more responsive admin profile updates
      },
    });
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
}

export async function updateAdmin(id: string, _prevState: any, formData: FormData) {
  try {
    const payload = {
      name: formData.get("name") as string,
      contactNumber: formData.get("contactNumber") as string,
      address: formData.get("address") as string,
      password: formData.get("password") as string,
    };

    if (zodValidator(payload, updateAdminZodSchema).success === false) {
      return zodValidator(payload, updateAdminZodSchema);
    }

    const validatedPayload = zodValidator(payload, updateAdminZodSchema).data;

    if (!validatedPayload) {
      throw new Error("Invalid payload");
    }

    const response = await serverFetch.patch(`/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedPayload),
    });
    const result = await response.json();

    if (result.success) {
      revalidateTag("admins-list", { expire: 0 });
      revalidateTag("admins-page-1", { expire: 0 });
      revalidateTag("admin-dashboard-meta", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
}

export async function deleteAdmin(id: string) {
  try {
    const response = await serverFetch.delete(`/user/${id}`);
    const result = await response.json();
    
    if (result.success) {
      revalidateTag("admins-list", { expire: 0 });
      revalidateTag("admins-page-1", { expire: 0 });
      revalidateTag("admin-dashboard-meta", { expire: 0 });
    }

    return result;
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}` };
  }
}
