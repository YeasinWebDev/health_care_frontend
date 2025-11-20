import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitesManagement/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/components/modules/Admin/SpecialitesManagement/SpecialitiesTable";
import RefreshButton from "@/components/shared/RefressButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { Suspense } from "react";

async function SpecialitiesManagementPage() {
  const result = await getSpecialities();
  return (
    <div className="space-y-6">
      <SpecialitiesManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SpecialitiesTable specialities={result.data} />
      </Suspense>
    </div>
  );
}

export default SpecialitiesManagementPage;
