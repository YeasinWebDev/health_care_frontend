"use server";

import { UserInfo } from "@/types/user.interface";
import { getCookie } from "./tokenHandler";

export const getUser = async (): Promise<UserInfo | undefined> => {
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
      next: {
        tags: ["user"],
        revalidate: 180,
      },
    });

    const data = await user.json();

    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
