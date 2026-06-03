"use client";

import { useState } from "react";
import { ReviewSection } from "./ReviewSection";
import { Info, BarChart2, MessageSquare, Truck, Package, ShieldCheck } from "lucide-react";
import type { Product } from "@/types/domain";

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews" | "shipping">("description");

  interface TabItem {
    id: "description" | "specs" | "reviews" | "shipping";
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
  }

  const tabs: TabItem[] = [
    { id: "description", label: "Description", icon: Info },
    { id: "specs", label: "Specifications", icon: BarChart2 },
    { id: "reviews", label: "Reviews", icon: MessageSquare, badge: product.reviewCount },
    { id: "shipping", label: "Shipping & Returns", icon: Truck },
  ];

  return (
    <div className="w-full mt-12 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950 shadow-sm overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 overflow-x-auto no-scrollbar bg-gray-50/50 dark:bg-gray-900/20">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium text-sm transition-all whitespace-nowrap outline-none ${
                isActive
                  ? "border-amber-500 text-amber-600 dark:text-amber-400 bg-white dark:bg-gray-950"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {tab.badge !== undefined && (
                <span className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                  isActive 
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div className="p-6 md:p-8">
        {/* Description Panel */}
        {activeTab === "description" && (
          <div className="animate-fade-in space-y-6">
            <div className="prose prose-amber dark:prose-invert max-w-none">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Product Overview</h3>
              {product.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights bullet list */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-900">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                  About this item
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-amber-500 select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Specifications Panel */}
        {activeTab === "specs" && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technical Specifications</h3>
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr 
                      key={key} 
                      className={`border-b last:border-0 border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-900/20 ${
                        idx % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/30 dark:bg-gray-900/10"
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-600 dark:text-gray-400 w-1/3 md:w-1/4 bg-gray-50/50 dark:bg-gray-900/10">
                        {key}
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-200 font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Reviews Panel */}
        {activeTab === "reviews" && (
          <div className="animate-fade-in">
            <ReviewSection 
              rating={product.rating || 0} 
              reviewCount={product.reviewCount || 0} 
              productName={product.name}
            />
          </div>
        )}

        {/* Shipping & Returns Panel */}
        {activeTab === "shipping" && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <Truck className="h-5 w-5 text-amber-500" /> Shipping Information
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Free Standard Shipping:</span>
                    <span>On all orders over $50. Delivered in 3-5 business days.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Express Delivery:</span>
                    <span>Available at checkout (1-2 business days) for $14.99.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Order Tracking:</span>
                    <span>You will receive a tracking number via email as soon as your package ships.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-5 w-5 text-amber-500" /> Easy Returns & Warranty
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">30-Day Returns:</span>
                    <span>If you are not 100% satisfied, return your items in original packaging within 30 days for a full refund.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Warranty:</span>
                    <span>{product.warranty}. Covered for manufacturer defects.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What's in the Box */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-gray-50/50 dark:bg-gray-900/10 h-fit">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                <Package className="h-5 w-5 text-amber-500" /> What&apos;s in the Box?
              </h3>
              <ul className="space-y-3">
                {product.whatsInTheBox.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-bold">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
