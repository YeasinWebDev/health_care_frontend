import PatientsManagementHeader from "@/components/modules/Admin/patientManagement/PatientsManagementHeader";
import PatientTable from "@/components/modules/Admin/patientManagement/PatientTable";
import RefreshButton from "@/components/shared/RefressButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getAllPatients } from "@/services/admin/patientMangement";
import { Suspense } from "react";

async function AdminPatientsManagementPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParamsObj = await searchParams;
  const querystring = queryStringFormatter(searchParamsObj);
  const patient = await getAllPatients(querystring);
  const totalPage = Math.ceil(patient?.data?.meta.total / patient?.data?.meta.limit);

  return (
    <div className="space-y-6 w-full">
      <PatientsManagementHeader />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search patients..." />
        <SelectFilter
          paramName="status"
          options={["ACTIVE", "INACTIVE", "DELETED"].map((g) => ({
            label: g,
            value: g,
          }))}
          placeholder="Filter by speciality"
        />
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <PatientTable patients={patient?.data?.data} />
        <TablePagination currentPage={patient.data?.meta.page} totalPages={totalPage} />
      </Suspense>
    </div>
  );
}

export default AdminPatientsManagementPage;
