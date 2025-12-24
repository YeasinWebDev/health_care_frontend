/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface ResetPasswordFormProps {
  redirect?: string;
  email?: string;
  token?: string;
}

const ResetPasswordForm = ({ redirect, email, token }: ResetPasswordFormProps) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(resetPassword, null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state) {

      if (!state.success && state.message) {
        toast.error(state.message);
      }

      if (state.success) {
        setIsSuccess(true);
        toast.success(state.message || "Password reset successfully!");

        // If there's a redirectToLogin flag or we should always redirect
        if (state.redirectToLogin || !redirect) {
          setTimeout(() => {
            router.push(redirect || "/login");
          }, 2000); // Slightly longer delay for user to read success message
        } else if (redirect) {
          // If a specific redirect is provided
          setTimeout(() => {
            router.push(redirect);
          }, 2000);
        }
      }
    }
  }, [state, router, redirect]);

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Password Reset Successful!</h3>
          <p className="text-gray-600">Your password has been reset successfully. Redirecting to login...</p>
        </div>
        <Button onClick={() => router.push(redirect || "/login")} className="mt-4">
          Go to Login Now
        </Button>
      </div>
    );
  }


  return (
    <form action={formAction}>
      {redirect && <Input type="hidden" name="redirect" value={redirect} />}
      {email && <Input type="hidden" name="email" value={email} />}
      {token && <Input type="hidden" name="token" value={token} />}
      {email && token && <Input type="hidden" name="isEmailReset" value="true" />}
      <Input type="hidden" name="isEmailReset" value={email && token ? "true" : "false"} />
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* New Password */}
          <Field>
            <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
            <Input id="newPassword" name="newPassword" type="password" placeholder="Enter new password" autoComplete="new-password" />
            <InputFieldError field="newPassword" state={state as any} />
          </Field>

          {/* Confirm Password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm new password" autoComplete="new-password" />
            <InputFieldError field="confirmPassword" state={state as any} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Resetting..." : "Reset Password"}
            </Button>

            <FieldDescription className="px-6 text-center mt-4">
              Remember your password?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Back to Login
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default ResetPasswordForm;
