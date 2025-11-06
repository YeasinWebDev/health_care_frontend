"use client";

import { useEffect, useState } from "react";

function Me() {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = await res.json();

      setUser(data);
    };

    getUser();
  }, []);
  return { user, setUser };
}


type UserData = {
  id: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  needPasswordChange: boolean;
};

type UserResponse = {
  success: true;
  message: string;
  data: UserData;
};

export default Me;
