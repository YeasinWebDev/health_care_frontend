import { getUser } from "@/services/auth/getUser";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { IUser, NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { UserRole } from "@/utility/auth";

async function DashboardNavbar() {
  const userInfo = await getUser();
  const info: IUser = {
    name: userInfo?.roleData?.name,
    email: userInfo?.email || "",
    role: userInfo?.role || "",
  };

  const navItems: NavSection[] = await getNavItemsByRole((userInfo?.role as UserRole) || []);

  return (
    <>
      <DashboardNavbarContent userInfo={info} navItems={navItems} />
    </>
  );
}

export default DashboardNavbar;
