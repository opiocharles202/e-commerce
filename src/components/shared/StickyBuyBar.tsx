"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/domain";

interface StickyBuyBarProps {
  product: Product;
  onAddToCart: () => void;
  disabled: boolean;
}

export function StickyBuyBar({ product, onAddToCart, disabled }: StickyBuyBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Show the sticky bar when the user scrolls past 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md py-3 px-4 shadow-xl transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-screen-xl flex items-center justify-between gap-4">
        {/* Product Details */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 truncate">
              {product.brand}
            </p>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
              {product.name}
            </h4>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex-1 sm:flex-initial flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
          <div className="flex flex-col sm:items-end text-left sm:text-right">
            <span className="text-base sm:text-lg font-extrabold text-gray-950 dark:text-gray-100 whitespace-nowrap">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 line-through whitespace-nowrap">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={onAddToCart}
            disabled={disabled}
            className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-amber-500/10 transition-colors disabled:bg-gray-200 dark:disabled:bg-gray-800 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed whitespace-nowrap"
          >
            <ShoppingCart className="h-4 w-4 shrink-0" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
