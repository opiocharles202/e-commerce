"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface CartQuantityStepperProps {
  itemId: string;
  quantity: number;
  maxQty: number;
}

export function CartQuantityStepper({ quantity, maxQty }: CartQuantityStepperProps) {
  const [qty, setQty] = useState(quantity);

  function decrement() {
    if (qty > 1) setQty((q) => q - 1);
    // will call updateCartItemAction in backend phase
  }

  function increment() {
    if (qty < maxQty) setQty((q) => q + 1);
    // will call updateCartItemAction in backend phase
  }

  return (
    <div className="flex items-center gap-0 rounded-lg border overflow-hidden">
      <button
        onClick={decrement}
        disabled={qty <= 1}
        aria-label="Decrease quantity"
        className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>

      <span
        className="flex h-8 w-9 items-center justify-center border-x text-sm font-semibold tabular-nums"
        aria-live="polite"
        aria-label={`Quantity: ${qty}`}
      >
        {qty}
      </span>

      <button
        onClick={increment}
        disabled={qty >= maxQty}
        aria-label="Increase quantity"
        className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
