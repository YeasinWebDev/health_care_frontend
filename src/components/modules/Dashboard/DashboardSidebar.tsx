import { getUser } from "@/services/auth/getUser";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { IUser, NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { UserRole } from "@/utility/auth";

async function DashboardSidebar() {
  const userInfo = await getUser();
  const navItems: NavSection[] = getNavItemsByRole((userInfo?.role as UserRole) || []);

  const info: IUser = {
    name: userInfo?.roleData?.name,
    email: userInfo?.email || "",
    role: userInfo?.role || "",
  };

  return (
    <>
      <DashboardSidebarContent userInfo={{ userInfo: info }} navItems={navItems} />
    </>
  );
}

export default DashboardSidebar;
