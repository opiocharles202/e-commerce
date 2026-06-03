import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Back to Home
        </Link>
        <Link href="/products" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Browse Products
        </Link>
      </div>
    </div>
  );
}
