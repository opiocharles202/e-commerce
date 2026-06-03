"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import type { PromoBanner } from "@/types/domain";

interface HeroBannerProps {
  banners: PromoBanner[];
}

export function HeroBanner({ banners }: HeroBannerProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % banners.length), [current, banners.length, goTo]);
  const prev = useCallback(() => goTo((current - 1 + banners.length) % banners.length), [current, banners.length, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const banner = banners[current];

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(100, (elapsed / 6000) * 100));
    }, 100);
    return () => {
      clearInterval(interval);
      setProgress(0);
    };
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl shadow-gray-900/10 aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9]">
      {/* Slides */}
      {banners.map((b, i) => (
        <div
          key={b.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === current 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={b.image}
            alt={b.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Multi-layered gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20 sm:from-black/80 sm:via-black/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:from-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-12 sm:justify-center px-6 py-8 sm:px-14 sm:py-14">
        {banner.badge && (
          <span className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 w-fit px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/20 animate-in fade-in-0 slide-in-from-left-4 duration-500">
            <Zap className="h-3 w-3 fill-current" />
            {banner.badge}
          </span>
        )}
        <h1 className="text-xl font-black leading-[1.15] text-white sm:text-3xl md:text-4xl lg:text-5xl max-w-xl tracking-tight drop-shadow-lg animate-in fade-in-0 slide-in-from-left-6 duration-700">
          {banner.title}
        </h1>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/75 max-w-xs sm:max-w-md lg:max-w-lg leading-relaxed animate-in fade-in-0 slide-in-from-left-8 duration-1000">
          {banner.subtitle}
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <Link
            href={banner.ctaHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            {banner.ctaText}
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 border border-white/30 text-white bg-white/10 hover:bg-white/20 font-bold text-xs sm:text-sm rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Browse All
          </Link>
        </div>
      </div>

      {/* Nav arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous banner"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/25 hover:border-white/20 transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => next()}
            aria-label="Next banner"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/25 hover:border-white/20 transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Progress Dots with active bar */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to banner ${i + 1}`}
                className={`relative h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
                  i === current ? "w-10 bg-white/30" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              >
                {i === current && (
                  <div
                    className="absolute inset-y-0 left-0 bg-amber-500 rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
