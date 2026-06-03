import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/components/shared/LoginForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sign In | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to your {SITE_NAME} account
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Create one
          </Link>
        </p>

        <p className="mt-2 text-center text-sm">
          <Link href="/reset-password" className="text-sm text-muted-foreground hover:text-foreground">
            Forgot your password?
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}


