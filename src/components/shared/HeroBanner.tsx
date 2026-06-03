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
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-950 shadow-2xl shadow-gray-950/10 aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9]">
      {/* Slides */}
      {banners.map((b, i) => {
        const isIphone = b.id === "banner-1" || b.title.toLowerCase().includes("iphone");
        const isGalaxy = b.id === "banner-2" || b.title.toLowerCase().includes("galaxy");
        
        let bgGradient = "from-gray-950 via-gray-900 to-black";
        let glowColor = "bg-amber-500/10";
        if (isIphone) {
          bgGradient = "from-[#110f0e] via-[#1a1715] to-[#080707]";
          glowColor = "bg-amber-500/10";
        } else if (isGalaxy) {
          bgGradient = "from-[#07080b] via-[#0f111c] to-[#040507]";
          glowColor = "bg-indigo-500/15";
        }

        const isActive = i === current;

        return (
          <div
            key={b.id}
            className={`absolute inset-0 bg-gradient-to-br ${bgGradient} transition-all duration-700 ease-out ${
              isActive 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute top-1/2 right-0 -translate-y-1/2 h-[90%] w-[60%] rounded-full ${glowColor} blur-[120px] pointer-events-none`} />

            {/* Content Column (Responsive Flex) */}
            <div className="relative z-10 flex h-full flex-col justify-end pb-14 sm:justify-center px-6 py-8 sm:px-14 sm:py-14 sm:max-w-[55%] select-none">
              {b.badge && isActive && (
                <span className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 w-fit px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-500 text-gray-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/20 animate-in fade-in-0 slide-in-from-left-4 duration-500">
                  <Zap className="h-3 w-3 fill-current" />
                  {b.badge}
                </span>
              )}
              
              {isActive && (
                <>
                  <h1 className="text-2xl font-black leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-lg animate-in fade-in-0 slide-in-from-left-6 duration-700">
                    {b.title}
                  </h1>
                  
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-400 max-w-xs sm:max-w-md leading-relaxed animate-in fade-in-0 slide-in-from-left-8 duration-1000">
                    {b.subtitle}
                  </p>
                  
                  <div className="mt-5 sm:mt-8 flex flex-row gap-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
                    <Link
                      href={b.ctaHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                    >
                      {b.ctaText}
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 border border-white/20 text-white bg-white/5 hover:bg-white/10 font-bold text-xs sm:text-sm rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Browse All
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Product Image Placement */}
            {/* Mobile View: Full-bleed cover background to hide borders and maximize phone size */}
            <div className="absolute inset-0 z-0 sm:hidden block pointer-events-none">
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="100vw"
                className="object-cover object-center opacity-[0.7] transition-opacity duration-700"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
            </div>

            {/* Desktop View: Clean object-contain product placement on the right side */}
            <div className="hidden sm:flex absolute inset-0 left-1/2 items-center justify-end p-12 md:p-16 pointer-events-none z-0">
              <div className="relative w-full h-full max-h-full max-w-full">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 600px"
                  className="object-contain object-right transition-transform duration-1000 ease-out hover:scale-105 pointer-events-auto"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </div>
        );
      })}

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
