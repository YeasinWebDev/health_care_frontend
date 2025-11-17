import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "@/utility/auth";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);
  return [
    {
      items: [
        {
          title: "Dashboard",
          href: `${defaultDashboard}`,
          icon: "LayoutDashboard",
          roles: ["ADMIN", "DOCTOR", "PATIENT"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "Settings",
          roles: ["ADMIN", "DOCTOR", "PATIENT"],
        },
      ],
    },
  ];
};

export const doctorNavItems: NavSection[] = [
  {
    title: "Patient Management",
    items: [
      {
        title: "Appointments",
        href: `/doctor/dashboard/appointments`,
        icon: "Calendar",
        badge: "3",
        roles: ["DOCTOR"],
      },
      {
        title: "My Schedules",
        href: `/doctor/dashboard/schedules`,
        icon: "Clock",
        roles: ["DOCTOR"],
      },
      {
        title: "Prescriptions",
        href: `/doctor/dashboard/prescriptions`,
        icon: "FileText",
        roles: ["DOCTOR"],
      },
    ],
  },
];

export const patientNavItems: NavSection[] = [
  {
    title: "My Appointments",
    items: [
      {
        title: "Appointments",
        href: `/dashboard/my-appointments`,
        icon: "Calendar",
        roles: ["PATIENT"],
      },
      {
        title: "Book Appointments",
        href: "/consultation",
        icon: "ClipboardList",
        roles: ["PATIENT"],
      },
    ],
  },
  {
    title: "Medical Records",
    items: [
      {
        title: "My Prescriptions",
        href: "/dashboard/my-prescriptions",
        icon: "FileText",
        roles: ["PATIENT"],
      },
      {
        title: "Health Records",
        href: "/dashboard/health-records",
        icon: "Activity", 
        roles: ["PATIENT"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admins-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Doctors",
                href: "/admin/dashboard/doctors-management",
                icon: "Stethoscope", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Patients",
                href: "/admin/dashboard/patients-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Hospital Management",
        items: [
            {
                title: "Appointments",
                href: "/admin/dashboard/appointments-management",
                icon: "Calendar", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Schedules",
                href: "/admin/dashboard/schedules-management",
                icon: "Clock", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Specialities",
                href: "/admin/dashboard/specialities-management",
                icon: "Hospital", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    }
]

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "DOCTOR":
            return [...commonNavItems, ...doctorNavItems];
        case "PATIENT":
            return [...commonNavItems, ...patientNavItems];
        default:
            return [];
    }
}
