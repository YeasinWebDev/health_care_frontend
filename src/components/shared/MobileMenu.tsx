"use client";

import { UserInfo } from "@/types/user.interface";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import AISearchDialog from "./AiSearchDialog";
import DashboardNavLinks from "./DashboardNavLinks";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
  hasAccessToken: boolean;
  userInfo?: UserInfo | null;
  dashboardRoute?: string;
}

const MobileMenu = ({ navItems, hasAccessToken, userInfo, dashboardRoute }: MobileMenuProps) => {
  return (
    <div className="md:hidden z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden w-[300px] sm:w-[400px] p-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-2 mt-8">
            <DashboardNavLinks navItems={navItems} from='mobile'/>
            <div className="border-t pt-4 flex gap-2 items-start">
              {/* <div className="flex justify-center w-full"> */}
                <AISearchDialog />
              {/* </div> */}
              <div>
                {hasAccessToken && userInfo ? (
                  <div className="flex items-center gap-2">
                    <Link href={dashboardRoute || "/"} className="text-lg font-medium">
                      <Button className="w-full gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <div className="flex justify-center">
                      <UserDropdown userInfo={userInfo} />
                    </div>
                  </div>
                ) : (
                  <Link href="/login" className="text-lg font-medium">
                    <Button className="w-full">Login</Button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
