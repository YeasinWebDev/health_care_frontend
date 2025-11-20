import DoctorsManagementHeader from "@/components/modules/Admin/doctorManagement/DoctorManagementHeader";
import DoctorsTable from "@/components/modules/Admin/doctorManagement/DoctorTable";
import RefreshButton from "@/components/shared/RefressButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getDoctors } from "@/services/admin/doctorManagement";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { ISpecialty } from "@/types/specialities.interface";
import { Suspense } from "react";

async function AdminDoctorsManagementPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  
  const searchParamsObj  = await searchParams;
  const querystring = queryStringFormatter(searchParamsObj);
  
  const specialitiesResult = await getSpecialities();
  const doctorsResult = await getDoctors(querystring);
  const totalPage = Math.ceil(doctorsResult?.data?.meta.total / doctorsResult?.data?.meta.limit);
  
  return (
    <div className="space-y-6 w-full">
      <DoctorsManagementHeader specialities={specialitiesResult.data} />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
        <SelectFilter
          paramName="speciality" 
          options={specialitiesResult.data.map((speciality: ISpecialty) => ({
            label: speciality.title,
            value: speciality.title,
          }))}
          placeholder="Filter by speciality"
        />
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <DoctorsTable doctors={doctorsResult?.data?.data} specialities={specialitiesResult.data} />
        <TablePagination
          currentPage={doctorsResult.data?.meta.page}
          totalPages={totalPage}
        />
      </Suspense>
    </div>
  );
}

export default AdminDoctorsManagementPage;
