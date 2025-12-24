"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { IAdmin } from "@/types/admin.interface";
import { adminsColumns } from "./AdminColumns";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { deleteAdmin } from "@/services/admin/adminManagement";
import { useRouter } from "next/navigation";
import AdminFormDialog from "./AdminFormDialog";

interface IAdminTableProps {
  admins: IAdmin[];
}
function AdminTable({ admins }: IAdminTableProps) {
  const router = useRouter();
  const [deletingAdmin, setDeletingAdmin] = useState<IAdmin | null>(null);
  const [editingAdmin, setEditingAdmin] = useState<IAdmin | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  const handleEdit = (admin: IAdmin) => {
    setEditingAdmin(admin);
  };
  const handleDelete = (admin: IAdmin) => {
    setDeletingAdmin(admin);
  };
  const confirmDelete = async () => {
    if (!deletingAdmin) return;

    setIsDeleting(true);
    const result = await deleteAdmin(deletingAdmin.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Admin deleted successfully");
      setDeletingAdmin(null);
      router.refresh();
    } else {
      toast.error(result.message || "Failed to delete admin");
    }
  };
  return (
    <div>
      <ManagementTable data={admins} columns={adminsColumns} onEdit={handleEdit} onDelete={handleDelete} getRowKey={(doctor) => doctor.id!} emptyMessage="No admins found" />

      <AdminFormDialog open={!!editingAdmin} onClose={() => setEditingAdmin(null)} onSuccess={handleRefresh} admin={editingAdmin!} />

      <DeleteConfirmationDialog
        open={!!deletingAdmin}
        onOpenChange={(open) => !open && setDeletingAdmin(null)}
        onConfirm={confirmDelete}
        title="Delete Doctor"
        description={`Are you sure you want to delete ${deletingAdmin?.admin.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export default AdminTable;
