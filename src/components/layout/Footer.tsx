import Link from "next/link";
import { Globe, Music2, MessageCircle, PlayCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { CopyrightYear } from "@/components/shared/CopyrightYear";
import { Logo } from "@/components/shared/Logo";

const footerLinks = {
  Shop: [
    { label: "Smartphones", href: "/categories/smartphones" },
    { label: "Cases & Covers", href: "/categories/cases-covers" },
    { label: "Chargers", href: "/categories/chargers" },
    { label: "Audio", href: "/categories/audio" },
    { label: "All Products", href: "/products" },
  ],
  Support: [
    { label: "Contact Us", href: "/help" },
    { label: "FAQ", href: "/faq" },
    { label: "Returns & Refunds", href: "/returns" },
    { label: "Track Order", href: "/account/orders" },
    { label: "Shipping Info", href: "/shipping" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Globe, label: "Facebook", href: "https://facebook.com" },
  { icon: Music2, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "Twitter / X", href: "https://twitter.com" },
  { icon: PlayCircle, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your one-stop shop for the latest mobile phones and accessories. Quality products, fast delivery.
            </p>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            ©{" "}
            <Suspense fallback="2025">
              <CopyrightYear />
            </Suspense>{" "}
            {/* {SITE_NAME}. All rights reserved. */}
          </p>
          <div className="flex items-center gap-4">
            {/* Payment logos (text placeholders — swap with SVGs in polish phase) */}
            {["Visa", "Mastercard", "PayPal", "Stripe"].map((p) => (
              <span
                key={p}
                className="rounded border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
