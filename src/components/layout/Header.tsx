import Link from "next/link";
import { ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./SearchBar";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      
      {/* ── Tier 1: Utility Top Bar (Desktop Only) ────────────────────── */}
      <div className="hidden md:block w-full bg-gray-50/50 dark:bg-gray-900/30 border-b border-gray-200/40 dark:border-gray-800/40 text-[11px] font-bold text-gray-500 select-none">
        <div className="mx-auto max-w-screen-xl flex h-9 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Welcoming message */}
          <div className="flex items-center gap-1">
            <span>Hi, Guest!</span>
            <Link href="/login" className="text-amber-600 dark:text-amber-400 hover:underline">
              Sign In
            </Link>
            <span>or</span>
            <Link href="/register" className="text-amber-600 dark:text-amber-400 hover:underline">
              Register
            </Link>
          </div>

          {/* Right Utility Links */}
          <div className="flex items-center gap-5">
            <Link href="/products" className="hover:text-amber-500 transition-colors">
              Deals
            </Link>
            <Link href="/products" className="hover:text-amber-500 transition-colors">
              Brand Outlet
            </Link>
            <Link href="/help" className="hover:text-amber-500 transition-colors">
              Help & Contact
            </Link>
            <div className="flex items-center gap-1 border-l border-gray-200 dark:border-gray-800 pl-4 text-gray-400">
              <MapPin className="h-3 w-3 text-amber-500" />
              <span className="text-gray-500">Deliver to</span>
              <span className="text-gray-900 dark:text-white font-black hover:underline cursor-pointer">
                Uganda
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tier 2: Main Bar (Branding, Search & Shopping Actions) ─────── */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Desktop grid layout; Mobile standard flex layout */}
        <div className="flex lg:grid lg:grid-cols-12 lg:gap-8 items-center justify-between h-16 w-full">
          
          {/* Logo */}
          <div className="lg:col-span-3 flex items-center shrink-0">
            <Link href="/" className="flex items-center transition-transform hover:scale-[1.02]">
              <Logo className="h-9 w-auto" />
            </Link>
          </div>

          {/* Desktop Search Bar (Always Persistent, Center 6 Columns) */}
          <div className="hidden lg:block lg:col-span-6 w-full">
            <SearchBar />
          </div>

          {/* Desktop Actions / Mobile Icons (Right 3 Columns) */}
          <div className="lg:col-span-3 flex items-center justify-end gap-1.5 sm:gap-3">
            
            {/* Account hover block (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2 group cursor-pointer border-r border-gray-200 dark:border-gray-800 pr-4 h-8 select-none">
              <div className="h-8 w-8 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 group-hover:border-amber-500/50 transition-colors">
                <User className="h-4 w-4" />
              </div>
              <div className="text-left leading-none">
                <p className="text-[10px] text-gray-400 font-bold">Hello, Guest</p>
                <Link href="/account" className="text-xs font-black text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  Account & Lists
                </Link>
              </div>
            </div>

            {/* Cart Button */}
            <Link href="/cart" aria-label="Shopping cart" className="relative group">
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full h-10 w-10">
                <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-gray-950 shadow-sm transition-transform group-hover:scale-110">
                  0
                </span>
              </Button>
            </Link>

            {/* Mobile menu trigger */}
            <MobileMenu />
          </div>

        </div>

        {/* ── Mobile Search Row (Always visible underneath logo on mobile) ── */}
        <div className="lg:hidden w-full pb-3">
          <SearchBar />
        </div>
      </div>

      {/* ── Tier 3: Sub-Navigation Category Links (Desktop Only) ──────── */}
      <div className="hidden lg:block w-full border-t border-gray-150/40 dark:border-gray-800/40">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 h-10 text-xs font-bold text-gray-500 select-none">
            
            {/* Slide links */}
            {[
              { label: "Smartphones", href: "/categories/smartphones" },
              { label: "Cases & Covers", href: "/categories/cases-covers" },
              { label: "Chargers", href: "/categories/chargers" },
              { label: "Audio", href: "/categories/audio" },
              { label: "Tablets", href: "/categories/tablets" },
              { label: "Cables", href: "/categories/cables" },
              { label: "All Products", href: "/products" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 rounded-full hover:text-amber-500 hover:bg-amber-500/[0.04] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Accent Highlight */}
            <span className="ml-auto text-[11px] uppercase tracking-wider text-amber-500 font-extrabold flex items-center gap-1">
              ⚡ Today's Deals
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
