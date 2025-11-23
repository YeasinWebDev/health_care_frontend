"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { IPatient } from "@/types/patient.interface";
import { useState, useTransition } from "react";
import { patientsColumns } from "./PatientsColumns";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deletePatient } from "@/services/admin/patientMangement";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import PatientFormDialog from "./PatientFormDialog";

interface IPatientTableProps {
  patients: IPatient[];
}

function PatientTable({ patients }: IPatientTableProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [editingPatient, setEditingPatient] = useState<IPatient | null>(null);
  const [deletingPatient, setDeletingPatient] = useState<IPatient | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  const handleEdit = (patient: IPatient) => {
    setEditingPatient(patient);
  };
  const handleDelete = (patient: IPatient) => {
    setDeletingPatient(patient);
  };
  const confirmDelete = async () => {
    if (!deletingPatient) return;

    setIsDeleting(true);
    const result = await deletePatient(deletingPatient.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Admin deleted successfully");
      setDeletingPatient(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete admin");
    }
  };
  return (
    <>
      <DeleteConfirmationDialog
        open={!!deletingPatient}
        onOpenChange={(open) => !open && setDeletingPatient(null)}
        onConfirm={confirmDelete}
        title="Delete Patient"
        isDeleting={isDeleting}
      />
      <PatientFormDialog open={!!editingPatient} onClose={() => setEditingPatient(null)} onSuccess={handleRefresh} patient={editingPatient}/>
        
      <ManagementTable data={patients} onEdit={handleEdit} onDelete={handleDelete} columns={patientsColumns} getRowKey={(patient) => patient.id!} emptyMessage="No Patient found" />
    </>
  );
}

export default PatientTable;
