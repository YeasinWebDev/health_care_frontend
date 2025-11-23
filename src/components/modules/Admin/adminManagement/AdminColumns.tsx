import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { Column } from "@/components/shared/ManagementTable";
import { IAdmin } from "@/types/admin.interface";
import Image from "next/image";

export const adminsColumns: Column<IAdmin>[] = [
  {
    header: "Image",
    accessor: (admin) => (
      <div className="flex flex-col">
        <Image
          src={admin.admin.profilePhoto || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
          alt={admin.admin.name}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    ),
  },
  {
    header: "Name",
    accessor: (admin) => (
      <div className="flex flex-col">
        <span className="text-sm">{admin.admin.name}</span>
      </div>
    ),
  },
  {
    header: "Email",
    accessor: (admin) => (
      <div className="flex flex-col">
        <span className="text-sm">{admin.email}</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (admin) => <StatusBadgeCell isDeleted={admin.status !== "ACTIVE"} activeText={admin.status} deletedText={admin.status} />,
  },
  {
    header: "Joined",
    accessor: (admin) => <DateCell date={admin.createdAt} />,
  },
];
