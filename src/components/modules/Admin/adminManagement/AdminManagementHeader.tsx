"use client"

import ManagementPageHeader from '@/components/shared/ManagementPageHeader'
import { Plus } from 'lucide-react'
import { useState, useTransition } from 'react';
import AdminFormDialog from './AdminFormDialog';
import { IAdmin } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';

interface IAdminManagementHeaderProps {
  admin?: IAdmin
}

function AdminManagementHeader({ admin }: IAdminManagementHeaderProps) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [, startTransition] = useTransition();
  const handleSuccess = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <div>
      <AdminFormDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={handleSuccess}
        admin={admin}
      />

      <ManagementPageHeader
        title="Admin Management"
        description="Manage Admins information and details"
        action={{
          label: "Add Admin",
          icon: Plus,
          onClick: () => setIsDialogOpen(true),
        }}
      />
    </div>
  )
}

export default AdminManagementHeader