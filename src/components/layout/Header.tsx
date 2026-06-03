import Link from "next/link";
import { ShoppingCart, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./SearchBar";

// RSC — static header shell; cart count comes via a CC island later (backend phase)
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Trust strip */}
      <div className="bg-primary py-1.5 text-center text-xs font-medium text-primary-foreground">
        🚚 Free shipping on orders over $50 &nbsp;|&nbsp; 📦 Same-day dispatch before 3pm
      </div>

      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </span>
          <span>{SITE_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {[
            { label: "Smartphones", href: "/categories/smartphones" },
            { label: "Cases", href: "/categories/cases-covers" },
            { label: "Chargers", href: "/categories/chargers" },
            { label: "Audio", href: "/categories/audio" },
            { label: "All Products", href: "/products" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Search — visible on ALL screen sizes */}
          <SearchBar />

          {/* Cart — visible on all screen sizes */}
          <Link href="/cart" aria-label="Shopping cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>
          </Link>

          {/* Account icon — desktop only (mobile uses the hamburger menu) */}
          <Link href="/account" aria-label="Account" className="hidden lg:inline-flex">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile menu trigger — hidden on desktop */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
