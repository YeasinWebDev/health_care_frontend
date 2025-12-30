import { getUser } from "@/services/auth/getUser";
import { getCookie } from "@/services/auth/tokenHandler";
import { getDefaultDashboardRoute, UserRole } from "@/utility/auth";
import Link from "next/link";
import AISearchDialog from "./AiSearchDialog";
import NavbarAuthButtons from "./NavbarAuthButtons";
import MobileMenu from "./MobileMenu";

const CommonNavbar = async () => {
  const navItems = [
    { href: "/consultation", label: "Consultation" },
    { href: "/health-plans", label: "Health Plans" },
    { href: "/medicine", label: "Medicine" },
    { href: "/diagnostics", label: "Diagnostics" },
    { href: "/ngos", label: "NGOs" },
  ];
  
  const accessToken = await getCookie("accessToken");
  const userInfo = accessToken ? await getUser() : null;
  const dashboardRoute = userInfo ? getDefaultDashboardRoute(userInfo.role as UserRole) : "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">

      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CareBridge</h2>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems?.map((link) => (
            <Link key={link.label} href={link.href} prefetch={true} className="text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <AISearchDialog />
          <NavbarAuthButtons initialHasToken={!!accessToken} initialUserInfo={userInfo!} initialDashboardRoute={dashboardRoute} />
        </div>

        {/* Mobile Menu */}
        <MobileMenu navItems={navItems} hasAccessToken={!!accessToken} userInfo={userInfo} dashboardRoute={dashboardRoute} />
      </div>
    </header>
  );
};

export default CommonNavbar;
