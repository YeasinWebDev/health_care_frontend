"use server";

import { getCookie } from "./tokenHandler";
import { IUser } from "@/types/dashboard.interface";

export const getUser = async (): Promise<IUser | undefined> => {
  try {
    const accessToken = await getCookie("accessToken");
    if (!accessToken) {
      throw new Error("No access token found");
    }

    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
      credentials: "include",
      headers: {
        authorization: `${accessToken?.value}`,
      },
      next:{
        tags:["user"]
      }
    });

    const data = await user.json();

    const userData = {
      email: data.data.email,
      role: data.data.role,
      name: data.data.roleData.name,
    };
    return userData;
  } catch (error) {
    console.log(error);
  }
};
