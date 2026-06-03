"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ShoppingCart, 
  CreditCard, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Share2, 
  Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./QuantitySelector";
import { StickyBuyBar } from "./StickyBuyBar";
import type { Product } from "@/types/domain";

interface ProductInteractivePanelProps {
  product: Product;
}

export function ProductInteractivePanel({ product }: ProductInteractivePanelProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const isOutOfStock = product.inventory === 0;
  const isLowStock = product.inventory > 0 && product.inventory <= 5; // using 5 as low stock threshold

  // Calculate dynamic delivery dates
  const [deliveryDates, setDeliveryDates] = useState({ free: "", fast: "" });

  useEffect(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const today = new Date();
    
    // Free shipping (3-4 days)
    const freeDate = new Date(today);
    freeDate.setDate(today.getDate() + 3);
    const freeDayStr = days[freeDate.getDay()];
    const freeMonthStr = months[freeDate.getMonth()];
    
    // Express shipping (1-2 days)
    const fastDate = new Date(today);
    fastDate.setDate(today.getDate() + 1);
    const fastDayStr = days[fastDate.getDay()];
    const fastMonthStr = months[fastDate.getMonth()];

    const dates = {
      free: `${freeDayStr}, ${freeMonthStr} ${freeDate.getDate()}`,
      fast: `${fastDayStr}, ${fastMonthStr} ${fastDate.getDate()}`
    };

    setTimeout(() => {
      setDeliveryDates(dates);
    }, 0);
  }, []);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    setIsAdding(true);
    
    // Simulate API request to add to cart
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setShowToast(true);
      
      // Reset "Added" button state after 3 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 3000);

      // Dismiss toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 800000 / 1000000 ? 600 : 600); // quick spinner
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    // Add to cart first, then redirect to checkout
    router.push("/checkout");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      <div
        className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-xl shadow-2xl border border-gray-800 dark:border-gray-100 transition-all duration-300 transform ${
          showToast ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white">
          <Check className="h-4 w-4 stroke-[3]" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-bold">Added to Cart!</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {quantity} × {product.name}
          </p>
        </div>
        <button 
          onClick={() => setShowToast(false)}
          className="ml-4 text-xs font-bold text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-900 transition-colors"
        >
          Dismiss
        </button>
      </div>

      {/* Main Buy Box Card */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-950 shadow-sm space-y-5">
        {/* Pricing block */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <p className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded w-fit">
              Save ${(product.compareAtPrice - product.price).toFixed(2)} ({Math.round((1 - product.price / product.compareAtPrice) * 100)}%)
            </p>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Or select interest-free installments of ${(product.price / 4).toFixed(2)}/mo at checkout.
          </p>
        </div>

        <hr className="border-gray-100 dark:border-gray-900" />

        {/* Stock / Availability Status */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${
              isOutOfStock 
                ? "bg-red-500 shadow-sm shadow-red-500/20 animate-pulse" 
                : isLowStock 
                  ? "bg-orange-500 shadow-sm shadow-orange-500/20 animate-pulse"
                  : "bg-emerald-500 shadow-sm shadow-emerald-500/20"
            }`} />
            <span className={`text-sm font-semibold ${
              isOutOfStock 
                ? "text-red-600 dark:text-red-400" 
                : isLowStock 
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-emerald-600 dark:text-emerald-400"
            }`}>
              {isOutOfStock 
                ? "Temporarily Out of Stock" 
                : isLowStock 
                  ? `Only ${product.inventory} items left in stock — order soon!`
                  : "In Stock & Ready to Ship"
              }
            </span>
          </div>

          {!isOutOfStock && (
            <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
              <p className="flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-gray-400" />
                <span>FREE shipping: <strong className="text-gray-800 dark:text-gray-200">{deliveryDates.free}</strong></span>
              </p>
              <p className="flex items-center gap-1.5 pl-5">
                <span>Fastest delivery: <strong className="text-gray-800 dark:text-gray-200">{deliveryDates.fast}</strong> (Choose Express)</span>
              </p>
            </div>
          )}
        </div>

        {/* Quantity selector */}
        {!isOutOfStock && (
          <QuantitySelector 
            quantity={quantity} 
            onChange={setQuantity} 
            max={product.inventory} 
          />
        )}

        {/* Checkout CTAs */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            size="lg"
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAdding}
            className={`w-full py-6 font-bold rounded-xl shadow-md border-0 transition-all ${
              isAdded
                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10"
                : "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/15"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdding ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Adding to Cart...</span>
              </span>
            ) : isAdded ? (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 stroke-[3]" />
                <span>Added to Cart!</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </span>
            )}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleBuyNow}
            disabled={isOutOfStock}
            className="w-full py-6 font-bold rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-900 dark:text-white"
            aria-label="Buy now"
          >
            <CreditCard className="h-4 w-4" />
            <span>Buy Now</span>
          </Button>
        </div>

        {/* Small trust assurances */}
        <div className="space-y-3 pt-2 border-t border-gray-100 dark:border-gray-900 text-[11px] text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Secure transaction. Data is fully encrypted.</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="h-3.5 w-3.5 text-gray-400" />
            <span>Return Policy: 30-day money-back guarantee.</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-gray-400" />
            <span>Ships from GadgetDistrict, Sold by Manufacturer.</span>
          </div>
        </div>
      </div>

      {/* Share / Actions below the buy box */}
      <button
        onClick={handleShare}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900 text-xs font-semibold text-gray-600 dark:text-gray-300 shadow-sm transition-colors"
      >
        <Share2 className="h-4 w-4 text-gray-400" />
        <span>{copiedLink ? "Link Copied!" : "Share this product with friends"}</span>
      </button>

      {/* Sticky Bottom Buy Bar */}
      <StickyBuyBar 
        product={product} 
        onAddToCart={handleAddToCart} 
        disabled={isOutOfStock || isAdding}
      />
    </div>
  );
}
