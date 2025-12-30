"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function DashboardNavLinks({ navItems , from}: { navItems: { href: string; label: string }[] ,from?:string}) {
  const route = usePathname();
  
  return (
    <>
      {navItems?.map((link) => (
        <Link key={link.label} href={link.href} prefetch={true} className={`${from ? "text-black " : "text-white"} p-1 rounded ${route === link.href ? `${from ? "text-white" : "text-black"} bg-blue-900` : ""}`}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default DashboardNavLinks;
