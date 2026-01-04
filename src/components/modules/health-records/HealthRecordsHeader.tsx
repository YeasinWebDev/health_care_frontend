"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";
import React from "react";
import { MedicalProfileForm } from "./HealthRecordsForm";

function HealthRecordsHeader({ data }: any) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <div className="flex flex-col">
        <MedicalProfileForm isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} initialData={data} />
        <ManagementPageHeader
          title="Health Records Management"
          description="Manage Health Records information and details"
          action={{
            label: `${data ? "Update" : "Add"} Health Record`,
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          }}
          className="flex flex-col items-start gap-2 lg:flex-row"
        />
    </div>
  );
}

export default HealthRecordsHeader;
