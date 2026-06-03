import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headset,
  PackageCheck,
  ShieldCheck,
  CreditCard,
  Truck,
  RotateCcw,
  HelpCircle,
  ChevronRight,
  Send,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Help & Contact | ${SITE_NAME}`,
  description: `Get help and contact ${SITE_NAME}. FAQs, live support, returns, and more.`,
};

const quickHelpTopics = [
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description: "Track your order, delivery times, and shipping policies.",
    href: "/shipping",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "How to return an item, refund timelines, and exchange policy.",
    href: "/returns",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    icon: CreditCard,
    title: "Payment & Billing",
    description: "Accepted payment methods, invoices, and billing questions.",
    href: "/faq",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: PackageCheck,
    title: "Order Issues",
    description: "Missing items, damaged products, or wrong order received.",
    href: "/faq",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Repairs",
    description: "Manufacturer warranty claims, repair options, and support.",
    href: "/faq",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/20",
  },
  {
    icon: HelpCircle,
    title: "General FAQ",
    description: "Browse frequently asked questions and find instant answers.",
    href: "/faq",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
  },
];

const faqItems = [
  {
    question: "How long does shipping take?",
    answer:
      "We offer same-day dispatch on orders placed before 3pm. Standard delivery takes 2-5 business days. Express delivery is available for next-day arrival.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase for a full refund. Items must be in original condition with all packaging. Return shipping is free for defective products.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on your location. Customs duties may apply.",
  },
  {
    question: "Are all products genuine/authentic?",
    answer:
      "Absolutely. Every product we sell is 100% genuine and sourced directly from authorised distributors and manufacturers. We never sell refurbished items as new.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account and visiting the Orders page.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and mobile money payments including MTN Mobile Money and Airtel Money.",
  },
];

export default function HelpContactPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Help & Contact" }]}
      />

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-16 text-center sm:px-12 sm:py-20">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 shadow-lg shadow-amber-500/10">
          <Headset className="h-8 w-8" />
        </span>
        <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl tracking-tight">
          How Can We Help?
        </h1>
        <p className="mt-3 mx-auto max-w-lg text-sm sm:text-base text-gray-400 leading-relaxed">
          We&apos;re here to make your shopping experience seamless. Find
          answers, get in touch, or browse our support topics below.
        </p>
      </div>

      {/* ── Quick Help Topics Grid ─────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-black text-gray-900 dark:text-white sm:text-2xl tracking-tight">
          Browse Help Topics
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Select a topic to find the answers you need quickly.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickHelpTopics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group relative flex items-start gap-4 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/[0.03] hover:-translate-y-0.5 hover:border-amber-500/40 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className={`absolute -top-8 -right-8 h-24 w-24 rounded-full ${topic.bg} opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.bg} ${topic.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <topic.icon className="h-5 w-5" />
              </span>

              <div className="relative z-10 min-w-0 flex-1">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center gap-1">
                  {topic.title}
                  <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Contact Methods ────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-xl font-black text-gray-900 dark:text-white sm:text-2xl tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Reach our support team through any of these channels.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mail,
              title: "Email Us",
              value: "hello@gadgetdistrict.com",
              description: "We typically respond within 2 hours during business hours.",
              color: "text-blue-500",
              bg: "bg-blue-50 dark:bg-blue-950/20",
            },
            {
              icon: Phone,
              title: "Call Us",
              value: "+256 (0) 700 123 456",
              description: "Available Mon–Fri, 9am to 6pm EAT.",
              color: "text-emerald-500",
              bg: "bg-emerald-50 dark:bg-emerald-950/20",
            },
            {
              icon: MessageCircle,
              title: "Live Chat",
              value: "Start a Conversation",
              description: "Chat with our team in real-time for instant help.",
              color: "text-purple-500",
              bg: "bg-purple-50 dark:bg-purple-950/20",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value: "123 Tech Street, Kampala",
              description: "Walk-in support available during business hours.",
              color: "text-amber-500",
              bg: "bg-amber-50 dark:bg-amber-950/20",
            },
          ].map((contact) => (
            <div
              key={contact.title}
              className="group rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/[0.03] hover:-translate-y-0.5"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${contact.bg} ${contact.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <contact.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-gray-900 dark:text-white">
                {contact.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                {contact.value}
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {contact.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-xl font-black text-gray-900 dark:text-white sm:text-2xl tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Quick answers to the most common questions.
        </p>

        <div className="mt-6 space-y-3">
          {faqItems.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 overflow-hidden transition-all duration-200 hover:border-amber-500/30 [&[open]]:border-amber-500/30 [&[open]]:shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-bold text-gray-900 dark:text-white select-none list-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 text-xs font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <div className="px-6 pb-5 pt-0 pl-16 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Contact Form ───────────────────────────────────────────── */}
      <section className="mt-16 mb-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-8">
            <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
              Send Us a Message
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <form className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="help-name"
                    className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="help-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="help-email"
                    className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="help-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="help-subject"
                  className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="help-subject"
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option>Order Issue</option>
                  <option>Product Question</option>
                  <option>Shipping & Delivery</option>
                  <option>Returns & Refunds</option>
                  <option>Warranty Claim</option>
                  <option>Payment Issue</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="help-message"
                  className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="help-message"
                  rows={5}
                  placeholder="Describe your issue or question in detail..."
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Operating Hours + Extra Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Hours Card */}
            <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  Support Hours
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {[
                  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM", active: true },
                  { days: "Saturday", hours: "10:00 AM – 4:00 PM", active: true },
                  { days: "Sunday", hours: "Closed", active: false },
                ].map(({ days, hours, active }) => (
                  <li
                    key={days}
                    className="flex justify-between border-b border-gray-100 dark:border-gray-800/50 pb-2.5 last:border-0"
                  >
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{days}</span>
                    <span
                      className={`font-bold ${
                        active
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-400 dark:text-gray-600"
                      }`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response Time Card */}
            <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                Average Response Times
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { method: "Live Chat", time: "Under 2 min", color: "bg-emerald-500" },
                  { method: "Phone", time: "Under 5 min", color: "bg-blue-500" },
                  { method: "Email", time: "Within 2 hours", color: "bg-purple-500" },
                  { method: "Contact Form", time: "Within 24 hours", color: "bg-amber-500" },
                ].map((item) => (
                  <li key={item.method} className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${item.color} shrink-0`}
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex-1">
                      {item.method}
                    </span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-6 text-center">
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Need urgent help?
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Call us directly for immediate assistance.
              </p>
              <a
                href="tel:+2560700123456"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-2 text-xs font-bold text-gray-950 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-3.5 w-3.5" />
                +256 (0) 700 123 456
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
