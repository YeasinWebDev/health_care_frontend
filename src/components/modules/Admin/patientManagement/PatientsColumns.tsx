"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";

export const patientsColumns: Column<any>[] = [
  {
    header: "Patient",
    accessor: (patient) => <UserInfoCell name={patient.patient.name} email={patient.patient.email} photo={patient.patient.profilePhoto} />,
  },
  {
    header: "Address",
    accessor: (patient) => (
      <div className="flex flex-col">
        <span className="text-sm">{patient.patient.address}</span>
      </div>
    ),
  },
  {
    header: "Contact Number",
    accessor: (patient) => (
      <div className="flex flex-col">
        <span className="text-sm">{patient.patient.contactNumber || "N/A"}</span>
      </div>
    ),
  },
    {
    header: "Gender",
    accessor: (patient) => (
      <span className="text-sm capitalize">{patient.patient.gender.toLowerCase() || "N/A"}</span>
    ),
  },
    {
      header: "Status",
      accessor: (patient) => <StatusBadgeCell isDeleted={patient.status !== "ACTIVE"} activeText={patient.status} deletedText={patient.status} />,
    },
      {
        header: "Joined",
        accessor: (patient) => <DateCell date={patient.createdAt} />,
      },
];
