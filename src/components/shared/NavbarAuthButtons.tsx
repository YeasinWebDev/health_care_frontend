"use client";

import { UserInfo } from "@/types/user.interface";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { Button } from "../ui/button";
import { useAuthToken } from "@/hooks/useAuthToken";

interface NavbarAuthButtonsProps {
  initialHasToken: boolean;
  initialUserInfo: UserInfo | null;
  initialDashboardRoute: string;
}

export default function NavbarAuthButtons({
  initialHasToken,
  initialUserInfo,
  initialDashboardRoute,
}: NavbarAuthButtonsProps) {
  // Detect client-side auth state changes on navigation
  const clientHasToken = useAuthToken();

  // Use client token state if available, otherwise fall back to server state
  const hasToken = clientHasToken || initialHasToken;
  const userInfo = hasToken ? initialUserInfo : null;
  const dashboardRoute = initialDashboardRoute;

  if (hasToken && userInfo) {
    return (
      <>
        <Link href={dashboardRoute}>
          <Button variant="outline" className="gap-2 cursor-pointer">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden lg:flex">Dashboard</span>
          </Button>
        </Link>
        <UserDropdown userInfo={userInfo} />
      </>
    );
  }

  return (
    <Link href="/login" className="z-10">
      <Button className="cursor-pointer">Login</Button>
    </Link>
  );
}