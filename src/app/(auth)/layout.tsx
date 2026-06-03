import type { ReactNode } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-xl">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Zap className="h-4 w-4" />
        </span>
        {SITE_NAME}
      </Link>
      {children}
    </div>
  );
}
