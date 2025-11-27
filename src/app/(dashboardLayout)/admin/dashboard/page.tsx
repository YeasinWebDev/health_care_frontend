"use client";

import { serverFetch } from "@/lib/server-fetch";
import { getCookie } from "@/services/auth/tokenHandler";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    const call = async () => {
      const refreshToken = await getCookie("refreshToken");
      const response = await serverFetch.post("/auth/refresh-token", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken?.value,
        }),
      });

      const result = await response.json();
      console.log(result.data.result.accessToken);
    };
    call()
  }, []);

  return <div>page2</div>;
}

export default page;
