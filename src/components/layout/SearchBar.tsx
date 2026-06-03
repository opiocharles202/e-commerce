"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when expanded
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    }
  }

  return (
    <div className="relative flex items-center">
      {open ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="h-8 w-44 rounded-lg border border-border bg-background pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring sm:w-56"
            />
          </div>
          <button
            type="button"
            onClick={() => { setOpen(false); setQuery(""); }}
            aria-label="Close search"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </form>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open search"
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Search className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
