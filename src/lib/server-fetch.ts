// import { getNewAccessToken } from "@/services/auth/auth.service";
// import { getCookie } from "@/services/auth/tokenHandler";

// const serverFetchHelper = async (endpoint: string, options: RequestInit): Promise<Response> => {
//   const { headers, ...rest } = options;
//   const accessToken = await getCookie("accessToken");

//   if(endpoint !== "/auth/refresh-token"){
//     await getNewAccessToken()
//   }

//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
//     headers: {
//       Cookie: accessToken ? `accessToken=${accessToken?.value}` : "",
//       ...headers,
//     },
//     ...rest,
//   });

//   return response;
// };

// export const serverFetch ={
//     get: (endpoint: string, options: RequestInit={}): Promise<Response> => serverFetchHelper(endpoint, {...options, method: "GET" }),

//     post: (endpoint: string, options: RequestInit={}): Promise<Response> => serverFetchHelper(endpoint, {...options, method: "POST" }),

//     put: (endpoint: string, options: RequestInit={}): Promise<Response> => serverFetchHelper(endpoint, {...options, method: "PUT" }),

//     patch: (endpoint: string, options: RequestInit={}): Promise<Response> => serverFetchHelper(endpoint, {...options, method: "PATCH" }),
    
//     delete: (endpoint: string, options: RequestInit={}): Promise<Response> => serverFetchHelper(endpoint, {...options, method: "DELETE" }),
// }




// /lib/server-fetch.ts
import { cookies } from 'next/headers';
import { getNewAccessToken } from "@/services/auth/auth.service";

const serverFetchHelper = async (endpoint: string, options: RequestInit): Promise<Response> => {
  const { headers, ...rest } = options;
  
  // Get cookies once
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  let currentAccessToken = accessToken;
  // Handle token refresh if needed
  // if (endpoint !== "/auth/refresh-token" && refreshToken && (!accessToken || isTokenExpired(accessToken))) {
  //   // You need to implement isTokenExpired or getNewAccessToken logic
  //   const newToken = await getNewAccessToken();
  //   if (newToken) {
  //     currentAccessToken = newToken;
  //   }
  // }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    headers: {
      ...(currentAccessToken && { 'Authorization': `Bearer ${currentAccessToken}` }),
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  });

  return response;
};

// Helper function to check token expiration (if you have JWT tokens)
const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return false;
  }
};

export const serverFetch = {
    get: (endpoint: string, options: RequestInit={}): Promise<Response> => 
      serverFetchHelper(endpoint, {...options, method: "GET" }),

    post: (endpoint: string, options: RequestInit={}): Promise<Response> => 
      serverFetchHelper(endpoint, {...options, method: "POST" }),

    put: (endpoint: string, options: RequestInit={}): Promise<Response> => 
      serverFetchHelper(endpoint, {...options, method: "PUT" }),

    patch: (endpoint: string, options: RequestInit={}): Promise<Response> => 
      serverFetchHelper(endpoint, {...options, method: "PATCH" }),
    
    delete: (endpoint: string, options: RequestInit={}): Promise<Response> => 
      serverFetchHelper(endpoint, {...options, method: "DELETE" }),
};