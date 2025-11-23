"use client";

import { IAdmin } from "@/types/admin.interface";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useActionState, useEffect } from "react";
import { createAdmin, updateAdmin } from "@/services/admin/adminManagement";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface IAdminFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  admin?: IAdmin;
}

function AdminFormDialog({ open, onClose, onSuccess, admin }: IAdminFormDialogProps) {
  const isEdit = !!admin;
  const [state, formAction, pending] = useActionState(isEdit ? updateAdmin.bind(null, admin.id!) : createAdmin, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, onSuccess, onClose]);

  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Admin" : "Add New Admin"}</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" name="name" placeholder="Dr. John Doe" defaultValue={isEdit ? admin?.admin.name : undefined} />
              <InputFieldError state={state} field="name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" placeholder="Email Address" defaultValue={isEdit ? admin?.email : undefined} disabled={isEdit} />
              <InputFieldError state={state} field="name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="password" placeholder="Password" type="password" disabled={isEdit} />
              <InputFieldError state={state} field="password" />
            </Field>
            <Field>
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <Input id="address" name="address" placeholder="Address" defaultValue={isEdit ? admin?.admin.address : undefined} />
              <InputFieldError state={state} field="address" />
            </Field>
            <Field>
              <FieldLabel htmlFor="contactNumber">ContactNumber</FieldLabel>
              <Input id="contactNumber" name="contactNumber" placeholder="Contact Number" defaultValue={isEdit ? admin?.admin.contactNumber : undefined} />
              <InputFieldError state={state} field="contactNumber" />
            </Field>
          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button type="button" variant="outline" onClick={onClose} disabled={pending}>
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : isEdit ? "Update Admin" : "Create Admin"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AdminFormDialog;
