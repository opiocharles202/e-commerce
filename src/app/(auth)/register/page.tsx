import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { RegisterForm } from "@/components/shared/RegisterForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Create Account | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Join {SITE_NAME} and start shopping
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}


