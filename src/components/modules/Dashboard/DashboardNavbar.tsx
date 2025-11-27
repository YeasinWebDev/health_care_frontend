import { getUser } from "@/services/auth/getUser";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { IUser } from "@/types/dashboard.interface";

async function DashboardNavbar() {
    const userInfo = await getUser()
    const info : IUser = {
      name: userInfo?.roleData?.name,
      email:userInfo?.email || "",
      role:userInfo?.role || ""
    }
    console.log(info)
  return (
    <>
      <DashboardNavbarContent userInfo={info} />
    </>
  );
}

export default DashboardNavbar;
