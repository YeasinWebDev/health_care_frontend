import { UserRole } from "@/utility/auth";

export interface IUser {
  name: string;
  email: string;
  role: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon: string;
    badge?: string | number;
    description?: string;
    roles: UserRole[];
}

export interface NavSection {
    title?: string;
    items: NavItem[];
}