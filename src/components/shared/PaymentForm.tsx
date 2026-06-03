"use client";

import { useState } from "react";
import { CreditCard, Wallet, Banknote, Lock, CheckCircle2, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

type PaymentMethod = "card" | "paypal" | "cod";

const cardNetworks = [
  { name: "Visa", bg: "bg-blue-600", text: "VISA", style: "italic font-bold tracking-widest text-white text-xs" },
  { name: "Mastercard", bg: "bg-red-500", text: "MC", style: "font-bold text-white text-xs" },
  { name: "Amex", bg: "bg-green-700", text: "AMEX", style: "font-bold text-white text-[10px]" },
];

const methodOptions: { id: PaymentMethod; label: string; icon: React.ElementType; desc: string }[] = [
  { id: "card",   label: "Credit / Debit Card", icon: CreditCard, desc: "Visa, Mastercard, Amex" },
  { id: "paypal", label: "PayPal",               icon: Wallet,     desc: "Pay via PayPal account" },
  { id: "cod",    label: "Cash on Delivery",     icon: Banknote,   desc: "Pay when you receive" },
];

export function PaymentForm() {
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  function handleCardNumber(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    setCardNumber(digits.replace(/(.{4})/g, "$1 ").trim());
  }

  function handleExpiry(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    setExpiry(digits.length >= 3 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits);
  }

  return (
    <section className="rounded-xl border bg-card p-6">
      <h2 className="font-semibold text-base mb-5">Payment Method</h2>

      {/* ── Method selector (3 options) ────────────────────────────── */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-6">
        {methodOptions.map(({ id, label, icon: Icon, desc }) => (
          <button
            key={id}
            type="button"
            onClick={() => setMethod(id)}
            className={`flex flex-col gap-1 rounded-xl border-2 px-4 py-3 text-left transition-all ${
              method === id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <div className="flex items-center justify-between">
              <Icon className={`h-5 w-5 ${method === id ? "text-primary" : "text-muted-foreground"}`} />
              {method === id && <CheckCircle2 className="h-4 w-4 text-primary" />}
            </div>
            <p className={`text-sm font-semibold mt-1 ${method === id ? "text-primary" : "text-foreground"}`}>
              {label}
            </p>
            <p className="text-[11px] text-muted-foreground">{desc}</p>
          </button>
        ))}
      </div>

      {/* ── Card form ──────────────────────────────────────────────── */}
      {method === "card" && (
        <>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs text-muted-foreground">Accepted:</span>
            {cardNetworks.map((card) => (
              <span key={card.name} className={`flex h-6 w-10 items-center justify-center rounded ${card.bg} ${card.style}`}>
                {card.text}
              </span>
            ))}
          </div>

          <form className="flex flex-col gap-4" aria-label="Card payment form">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="cardNumber" type="text" inputMode="numeric" autoComplete="cc-number"
                  placeholder="1234 5678 9012 3456" value={cardNumber}
                  onChange={(e) => handleCardNumber(e.target.value)} maxLength={19}
                  className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="cardName" className="text-sm font-medium">Name on Card</label>
              <input
                id="cardName" type="text" autoComplete="cc-name" placeholder="Jane Doe"
                value={cardName} onChange={(e) => setCardName(e.target.value)}
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                <input
                  id="expiry" type="text" inputMode="numeric" autoComplete="cc-exp"
                  placeholder="MM/YY" value={expiry}
                  onChange={(e) => handleExpiry(e.target.value)} maxLength={5}
                  className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cvv" className="text-sm font-medium flex items-center gap-1">
                  CVV
                  <span title="3 digits on back of card (4 for Amex)" className="cursor-help text-[10px] flex h-4 w-4 items-center justify-center rounded-full border text-muted-foreground">?</span>
                </label>
                <div className="relative">
                  <input
                    id="cvv" type="password" inputMode="numeric" autoComplete="cc-csc"
                    placeholder="•••" value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))} maxLength={4}
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Lock className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={saveCard} onChange={(e) => setSaveCard(e.target.checked)}
                className="h-4 w-4 rounded border-border accent-primary" />
              <span className="text-sm text-muted-foreground">Save card for future purchases</span>
            </label>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3 shrink-0 text-emerald-500" />
              Your card details are encrypted and never stored on our servers
            </div>
          </form>
        </>
      )}

      {/* ── PayPal ─────────────────────────────────────────────────── */}
      {method === "paypal" && (
        <div className="flex flex-col items-center gap-5 py-6 text-center">
          <div className="flex h-16 w-44 items-center justify-center rounded-xl border bg-[#003087] text-white font-bold tracking-tight text-2xl">
            <span className="text-[#009cde]">Pay</span>
            <span className="text-white">Pal</span>
          </div>
          <div>
            <p className="text-sm font-medium">Pay securely with PayPal</p>
            <p className="mt-1 text-xs text-muted-foreground max-w-xs">
              You&apos;ll be redirected to PayPal to authorise payment, then returned here to confirm your order.
            </p>
          </div>
          <Button type="button" size="lg"
            className="w-full max-w-xs bg-[#ffc439] text-[#003087] hover:bg-[#f0b429] font-bold text-base"
          >
            Continue with PayPal
          </Button>
          <p className="text-[11px] text-muted-foreground">By continuing, you agree to PayPal&apos;s Terms of Service</p>
        </div>
      )}

      {/* ── Cash on Delivery ───────────────────────────────────────── */}
      {method === "cod" && (
        <div className="flex flex-col gap-5 py-2">
          {/* Visual */}
          <div className="flex items-center gap-4 rounded-xl border bg-amber-50 border-amber-200 p-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Banknote className="h-7 w-7" />
            </div>
            <div>
              <p className="font-semibold text-amber-800">Cash on Delivery</p>
              <p className="text-xs text-amber-700 mt-0.5">
                Pay in cash when your order arrives at your door.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="rounded-xl border bg-card p-5">
            <p className="text-sm font-semibold mb-3">How it works</p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: CheckCircle2, color: "text-emerald-500", text: "Place your order — no payment needed now" },
                { icon: Clock,        color: "text-blue-500",    text: "We pack and dispatch your order within 24 hours" },
                { icon: MapPin,       color: "text-primary",     text: "Your order is delivered to your address" },
                { icon: Banknote,     color: "text-amber-500",   text: "Pay the exact amount in cash to the delivery agent" },
              ].map(({ icon: Icon, color, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${color}`} />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important note */}
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
            <div className="text-xs text-amber-700 space-y-1">
              <p className="font-semibold">Important</p>
              <p>Please have the exact amount ready. Our delivery agents do not carry change.</p>
              <p>Cash on delivery is available on orders up to $500.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
