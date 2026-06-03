import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME} — your trusted source for mobile phones and accessories.`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Your one-stop shop for mobile phones and accessories. Latest smartphones, cases, chargers, and more.",
  email: "hello@gadgetdistrict.com",
  telephone: "+1-555-000-1234",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Street",
    addressLocality: "Digital City",
    postalCode: "10001",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        {/* Hero */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary/60 px-8 py-14 text-center text-primary-foreground sm:px-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
            <Zap className="h-7 w-7" />
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{SITE_NAME}</h1>
          <p className="mt-3 max-w-xl mx-auto text-base opacity-90 leading-relaxed">
            We&apos;re passionate about connecting people with the latest mobile technology.
            From flagship smartphones to essential accessories — we carry it all.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { emoji: "🎯", title: "Our Mission", body: "To make the latest mobile technology accessible to everyone, with transparent pricing and expert advice." },
            { emoji: "🤝", title: "Our Promise", body: "Genuine products only. Every item we sell is sourced directly from authorised distributors and manufacturers." },
            { emoji: "⚡", title: "Fast Delivery", body: "Same-day dispatch on orders placed before 3pm. Next-day delivery available across the country." },
          ].map(({ emoji, title, body }) => (
            <div key={title} className="rounded-xl border bg-card p-6">
              <p className="text-3xl">{emoji}</p>
              <h2 className="mt-3 font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Contact info */}
        <div id="contact" className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Have a question? Our team is ready to help.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: "hello@gadgetdistrict.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
                { icon: MapPin, label: "Address", value: "123 Tech Street, Digital City, 10001" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4 text-primary" />
              Operating Hours
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {[
                { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                { days: "Saturday", hours: "10:00 AM – 4:00 PM" },
                { days: "Sunday", hours: "Closed" },
              ].map(({ days, hours }) => (
                <li key={days} className="flex justify-between border-b pb-2 last:border-0">
                  <span className="text-muted-foreground">{days}</span>
                  <span className="font-medium">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
