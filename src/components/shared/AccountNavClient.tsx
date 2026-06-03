"use client";

// Nav items defined here (client side) — Lucide icons cannot cross the RSC→CC boundary
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, User, Settings } from "lucide-react";

const accountNav = [
  { label: "Orders", href: "/account/orders", icon: Package },
  { label: "Profile", href: "/account/profile", icon: User },
  { label: "Settings", href: "/account/settings", icon: Settings },
];

interface AccountNavClientProps {
  variant?: "tabs" | "sidebar";
}

export function AccountNavClient({ variant = "tabs" }: AccountNavClientProps) {
  const pathname = usePathname();

  if (variant === "sidebar") {
    return (
      <nav className="flex flex-col gap-0.5">
        {accountNav.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
    );
  }

  // Mobile tab bar
  return (
    <nav
      className="flex items-center overflow-x-auto"
      aria-label="Account navigation"
    >
      {accountNav.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`flex shrink-0 flex-col items-center gap-1 border-b-2 px-6 py-3 text-xs font-medium transition-colors ${
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
