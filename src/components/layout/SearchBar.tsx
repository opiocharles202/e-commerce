"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { allProducts } from "@/lib/dummy-data";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Focus input when expanded
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Handle clicking outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
        setShowSuggestions(false);
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
      setShowSuggestions(false);
    }
  }

  // Filter products based on search query
  const suggestions = query.trim().length > 0
    ? allProducts
        .filter(
          (p) =>
            p.isActive &&
            (p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.brand.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 6)
    : [];

  const displaySuggestions = showSuggestions && suggestions.length > 0;

  // Highlight search matching text (Amazon predicted style: query is normal, prediction is bold)
  function highlightMatch(text: string, search: string) {
    if (!search) return <span className="font-semibold">{text}</span>;

    const index = text.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1) {
      return <span className="font-semibold">{text}</span>;
    }

    const before = text.slice(0, index);
    const match = text.slice(index, index + search.length);
    const after = text.slice(index + search.length);

    return (
      <span>
        {before && <span className="font-bold text-gray-900 dark:text-white">{before}</span>}
        <span className="font-normal text-gray-500 dark:text-gray-400">{match}</span>
        {after && <span className="font-bold text-gray-900 dark:text-white">{after}</span>}
      </span>
    );
  }

  return (
    <div ref={containerRef} className="relative flex items-center">
      {open ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search products..."
              aria-label="Search products"
              className="h-8 w-44 rounded-lg border border-border bg-background pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring sm:w-64 md:w-80 transition-all duration-200"
            />

            {/* Suggestions Dropdown */}
            {displaySuggestions && (
              <div className="absolute right-0 top-full z-50 mt-1.5 w-72 sm:w-80 md:w-96 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2 shadow-2xl overflow-hidden max-h-[380px] overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 px-2 py-1 uppercase tracking-wider">
                  Product Matches
                </p>
                <div className="space-y-0.5 mt-1">
                  {suggestions.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={() => {
                        setShowSuggestions(false);
                        setOpen(false);
                        setQuery("");
                      }}
                      className="flex items-center gap-3 rounded-lg px-2.5 py-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      {/* Product Thumbnail */}
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-900">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>

                      {/* Info & Highlights */}
                      <div className="min-w-0 flex-1 text-left">
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold truncate leading-none mb-1">
                          {product.brand}
                        </p>
                        <p className="text-sm truncate leading-snug">
                          {highlightMatch(product.name, query)}
                        </p>
                      </div>

                      {/* Price tag */}
                      <div className="shrink-0 text-right">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setQuery("");
              setShowSuggestions(false);
            }}
            aria-label="Close search"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </form>
      ) : (
        <button
          onClick={() => {
            setOpen(true);
            setShowSuggestions(true);
          }}
          aria-label="Open search"
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Search className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
