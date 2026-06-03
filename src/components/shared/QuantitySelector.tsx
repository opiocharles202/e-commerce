"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (qty: number) => void;
  max: number;
}

export function QuantitySelector({ quantity, onChange, max }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      if (val < 1) {
        onChange(1);
      } else if (val > max) {
        onChange(max);
      } else {
        onChange(val);
      }
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Quantity</span>
      <div className="flex items-center w-fit border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-950 shadow-sm transition-all focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="flex h-10 w-10 items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>

        <input
          type="number"
          min="1"
          max={max}
          value={quantity}
          onChange={handleInputChange}
          className="w-12 h-10 text-center font-semibold text-sm border-x border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          aria-label="Quantity input"
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={quantity >= max}
          className="flex h-10 w-10 items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
