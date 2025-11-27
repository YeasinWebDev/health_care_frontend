import MyProfile from "@/components/modules/My-Profile/MyProfile";
import { getUser } from "@/services/auth/getUser";

async function page() {
  const userinfo = await getUser();
  if (!userinfo) return null;
  
  return (
    <div>
      <MyProfile userInfo={userinfo} />
    </div>
  );
}

export default page;
