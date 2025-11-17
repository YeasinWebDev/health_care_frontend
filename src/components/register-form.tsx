/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerPatient } from "@/services/auth/registerPatient";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import Link from "next/link";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerPatient, null);

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      if (error) {
        return error.message;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  if (!isPending && state?.success) {
    toast.success("Login successful");

    if (state.data.user.role === "PATIENT") {
      window.location.href = "/dashboard";
    } else if (state.data.user.role === "DOCTOR") {
      window.location.href = "/doctor/dashboard";
    } else if (state.data.user.role === "ADMIN") {
      window.location.href = "/admin/dashboard";
    }
  } else if (!isPending && state?.message) {
    toast.error(state?.message);
  }

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" type="text" placeholder="John Doe" />
            {getFieldError("name") && <FieldDescription className="text-red-600">{getFieldError("name")}</FieldDescription>}
          </Field>
          {/* Address */}
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input id="address" name="address" type="text" placeholder="123 Main St" />

            {getFieldError("address") && <FieldDescription className="text-red-600">{getFieldError("address")}</FieldDescription>}
          </Field>
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="m@example.com" />

            {getFieldError("email") && <FieldDescription className="text-red-600">{getFieldError("email")}</FieldDescription>}
          </Field>
          <Field>
            <FieldLabel>Gender</FieldLabel>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="MALE" className="w-4 h-4 accent-blue-600" />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="FEMALE" className="w-4 h-4 accent-pink-500" />
                <span>Female</span>
              </label>
            </div>
            {getFieldError("gender") && <FieldDescription className="text-red-600">{getFieldError("gender")}</FieldDescription>}
          </Field>
          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" />

            {getFieldError("password") && <FieldDescription className="text-red-600">{getFieldError("password")}</FieldDescription>}
          </Field>
          {/* Confirm Password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <Input id="confirmPassword" name="confirmPassword" type="password" />

            {getFieldError("confirmPassword") && <FieldDescription className="text-red-600">{getFieldError("confirmPassword")}</FieldDescription>}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending} className="cursor-pointer">
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline font-semibold">
                Sign in
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;
