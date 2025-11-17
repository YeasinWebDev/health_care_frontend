export type UserRole = "ADMIN" | "DOCTOR" | "PATIENT";

export type RouteConfig = {
  exact: string[];
  pattern: RegExp[];
};

export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password"],
  pattern: [],
};

export const doctorProtectedRoutes: RouteConfig = {
  pattern: [/^\/doctor/],
  exact: [],
};

export const adminProtectedRoutes: RouteConfig = {
  pattern: [/^\/admin/],
  exact: [],
};

export const patientProtectedRoutes: RouteConfig = {
  pattern: [/^\/dashboard/],
  exact: [],
};

export const isAuthRoute = (path: string) => authRoutes.includes(path);

export const isRouteMatches = (path: string, config: RouteConfig) => config.exact.includes(path) || config.pattern.some((pattern) => pattern.test(path));

export const getRouteOwner =  (path: string):"ADMIN" | "DOCTOR" | "PATIENT" | "COMMON"|null => {
    if(isRouteMatches(path, commonProtectedRoutes)){
        return "COMMON"
    }
    if(isRouteMatches(path, doctorProtectedRoutes)){
        return "DOCTOR"
    }
    if(isRouteMatches(path, adminProtectedRoutes)){
        return "ADMIN"
    }
    if(isRouteMatches(path, patientProtectedRoutes)){
        return "PATIENT"
    }
    return null
}

export const getDefaultDashboardRoute = (role: UserRole) => {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "DOCTOR":
      return "/doctor/dashboard";
    case "PATIENT":
      return "/dashboard";
    default:
      return "/";
  }
}