"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronDown } from "lucide-react";
import { allProducts, dummyCategories } from "@/lib/dummy-data";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      let url = `/search?q=${encodeURIComponent(query.trim())}`;
      if (category !== "all") {
        url += `&cat=${category}`;
      }
      router.push(url);
      setShowSuggestions(false);
    }
  }

  // Filter products based on search query and category
  const suggestions = query.trim().length > 0
    ? allProducts
        .filter(
          (p) =>
            p.isActive &&
            (category === "all" || p.categoryId === category) &&
            (p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.brand.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 6)
    : [];

  const displaySuggestions = showSuggestions && suggestions.length > 0;

  // Highlight search matching text
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
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="relative flex h-10 w-full rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus-within:border-amber-500/50 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all duration-200">
          
          {/* Category Dropdown (Desktop Only) */}
          <div className="relative hidden md:block select-none">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-full bg-gray-50/80 dark:bg-gray-900/40 border-r border-gray-200 dark:border-gray-800 pl-4 pr-8 text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none cursor-pointer appearance-none rounded-l-full"
            >
              <option value="all">All Categories</option>
              {dummyCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for premium tech..."
            className="w-full bg-transparent pl-4 pr-16 text-sm text-gray-900 dark:text-white focus:outline-none placeholder-gray-400"
          />

          {/* Reset query button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setShowSuggestions(false);
              }}
              className="absolute right-11 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}

          {/* Search Button (Circle Pill) */}
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 text-gray-950 transition-colors shadow-sm cursor-pointer"
            aria-label="Submit search"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Aligned Suggestions Dropdown */}
      {displaySuggestions && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2 shadow-2xl max-h-[380px] overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 px-2 py-1 uppercase tracking-wider">
            Suggested Matches
          </p>
          <div className="space-y-0.5 mt-1">
            {suggestions.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => {
                  setShowSuggestions(false);
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
  );
}
