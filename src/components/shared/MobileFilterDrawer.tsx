"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import type { Category } from "@/types/domain";

interface MobileFilterDrawerProps {
  categories: Category[];
  brands: string[];
  currentFilters: {
    category?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    q?: string;
  };
  activeCount: number;
}

function Drawer({
  open,
  onClose,
  categories,
  brands,
  currentFilters,
}: Omit<MobileFilterDrawerProps, "activeCount"> & { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 200 }}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer — slides up from bottom on mobile */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter products"
        className="fixed inset-x-0 bottom-0 flex flex-col rounded-t-2xl bg-background shadow-2xl transition-transform duration-300 ease-in-out"
        style={{
          zIndex: 201,
          maxHeight: "85vh",
          transform: open ? "translateY(0)" : "translateY(100%)",
        }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            Filters
          </div>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable filter content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <FilterSidebar
            categories={categories}
            brands={brands}
            currentFilters={currentFilters}
            onApply={onClose}
          />
        </div>

        {/* Footer CTA */}
        <div className="border-t p-4">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Show Results
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

export function MobileFilterDrawer(props: MobileFilterDrawerProps) {
  const [open, setOpen] = useState(false);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <>
      {/* Filter trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted lg:hidden"
        aria-label={`Open filters${props.activeCount > 0 ? `, ${props.activeCount} active` : ""}`}
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
        {props.activeCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {props.activeCount}
          </span>
        )}
      </button>

      {isClient && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          categories={props.categories}
          brands={props.brands}
          currentFilters={props.currentFilters}
        />
      )}
    </>
  );
}
