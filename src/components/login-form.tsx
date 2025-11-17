/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginForm = ({redirect}:{redirect?:string}) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

const getFieldError = (fieldName: string) => {
  if (state?.errors) {
    const error = state.errors.find((err: any) => err.field === fieldName);
    return error?.message ?? null;  
  }
  return null;
};


  if(!isPending && state?.success){
    toast.success("Login successful");
    if(redirect){
      window.location.href = redirect;
    }else{
      if(state.data.user.role === "PATIENT"){
        window.location.href = "/dashboard";
      }else if(state.data.user.role === "DOCTOR"){
        window.location.href = "/doctor/dashboard";
      }else if(state.data.user.role === "ADMIN"){
        window.location.href = "/admin/dashboard";
      }
    }
  }else if(!isPending && state?.message){
    toast.error(state?.message);
  }

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              //   required
            />

            {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              //   required
            />
            {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending} className="cursor-pointer">
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline font-semibold">
                Sign up
              </Link>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <Link
                href="/forget-password"
                className="text-blue-600 hover:underline font-semibold"
              >
                Forgot password?
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
