"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Zap, Smartphone, Shield, Zap as ZapIcon, Headphones, Tablet, Cable, User, LogIn } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const navLinks = [
  { label: "Smartphones", href: "/categories/smartphones", icon: Smartphone },
  { label: "Cases & Covers", href: "/categories/cases-covers", icon: Shield },
  { label: "Chargers", href: "/categories/chargers", icon: ZapIcon },
  { label: "Audio", href: "/categories/audio", icon: Headphones },
  { label: "Tablets", href: "/categories/tablets", icon: Tablet },
  { label: "Cables", href: "/categories/cables", icon: Cable },
  { label: "All Products", href: "/products", icon: null },
];

function DrawerPortal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <>
      {/* Full-screen backdrop — z-[200] sits above header z-50 */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 200 }}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 left-0 flex w-[280px] flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out`}
        style={{
          zIndex: 201,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg"
            onClick={onClose}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </span>
            {SITE_NAME}
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links — scrollable */}
        <nav className="flex flex-col overflow-y-auto p-3 flex-1">
          <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Shop
          </p>
          {navLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {Icon && <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />}
              {label}
            </Link>
          ))}

          <div className="my-3 border-t" />

          <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Account
          </p>
          <Link
            href="/account"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <User className="h-4 w-4 shrink-0 text-muted-foreground" />
            My Account
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <LogIn className="h-4 w-4 shrink-0 text-muted-foreground" />
            Sign In / Register
          </Link>
        </nav>

        {/* Footer strip */}
        <div className="shrink-0 border-t bg-muted/30 p-4">
          <p className="text-[11px] text-muted-foreground text-center">
            🚚 Free shipping on orders over $50
          </p>
        </div>
      </div>
    </>,
    document.body
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <>
      {/* Hamburger trigger */}
      <button
        className="lg:hidden flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Drawer rendered into document.body via portal — avoids stacking context issues */}
      {isClient && (
        <DrawerPortal open={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
