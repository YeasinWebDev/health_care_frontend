import { getUser } from "@/services/auth/getUser";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { UserRole } from "@/utility/auth";

async function DashboardSidebar() {
  const userInfo = await getUser();
  const navItems: NavSection[] = getNavItemsByRole(userInfo?.role as UserRole || []);

  return (
    <>
      <DashboardSidebarContent userInfo={{ userInfo }} navItems={navItems}/>
    </>
  );
}

export default DashboardSidebar;
