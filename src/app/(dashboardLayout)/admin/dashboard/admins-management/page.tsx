import AdminManagementHeader from "@/components/modules/Admin/adminManagement/AdminManagementHeader";
import AdminTable from "@/components/modules/Admin/adminManagement/AdminTable";
import RefreshButton from "@/components/shared/RefressButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getAdmins } from "@/services/admin/adminManagement";
import { Suspense } from "react";

async function AdminsManagementPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParamsObj = await searchParams;
  const querystring = queryStringFormatter(searchParamsObj);
  const admin = await getAdmins(querystring);
  const totalPage = Math.ceil(admin?.data?.meta.total / admin?.data?.meta.limit);

  return (
    <div className="space-y-6 w-full">
      <AdminManagementHeader />
      <div className="flex space-x-2">
        <SearchFilter paramName="search" placeholder="Search admins..." />
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
        <AdminTable admins={admin?.data?.data} />

        <TablePagination currentPage={admin.data?.meta.page} totalPages={totalPage} />
      </Suspense>
    </div>
  );
}

export default AdminsManagementPage;
