import { getUser } from "@/services/auth/getUser";
import DashboardNavbarContent from "./DashboardNavbarContent";

async function DashboardNavbar() {
    const userInfo = await getUser()
  return (
    <>
      <DashboardNavbarContent userInfo={userInfo} />
    </>
  );
}

export default DashboardNavbar;
