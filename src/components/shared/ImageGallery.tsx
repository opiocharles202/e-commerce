"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export function ImageGallery({ images, name }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Track selected image in lightbox
  const [lightboxSelected, setLightboxSelected] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoverPosition({ x, y });
  };

  const openLightbox = () => {
    setLightboxSelected(selected);
    setIsLightboxOpen(true);
  };

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxSelected((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - vertical on desktop, horizontal scroll on mobile */}
      <div className="order-2 md:order-1 flex md:flex-col gap-2 md:w-20 overflow-x-auto md:overflow-x-visible md:overflow-y-auto max-h-[450px] no-scrollbar scroll-smooth">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative aspect-square w-16 md:w-full shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
              i === selected
                ? "border-amber-500 shadow-sm ring-1 ring-amber-500/20"
                : "border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
            }`}
          >
            <Image
              src={img}
              alt={`${name} thumbnail ${i + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image container */}
      <div className="order-1 md:order-2 relative flex-1 aspect-square md:max-w-[450px] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 group">
        {/* Hover zoom area */}
        <div
          className="relative w-full h-full overflow-hidden cursor-zoom-in"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          onClick={openLightbox}
        >
          <Image
            src={images[selected]}
            alt={`${name} — main image`}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            priority
            className="object-cover transition-transform duration-200 ease-out"
            style={{
              transform: isHovering ? "scale(2.2)" : "scale(1)",
              transformOrigin: `${hoverPosition.x}% ${hoverPosition.y}%`,
            }}
          />
        </div>

        {/* Floating actions / badges */}
        <button
          onClick={openLightbox}
          className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-gray-800 dark:bg-gray-950/90 dark:hover:bg-gray-950 dark:text-gray-200 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Expand image"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {images.length > 1 && (
          <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 bg-black/60 text-white rounded-md backdrop-blur-sm pointer-events-none">
            {selected + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Lightbox Main Content Container */}
          <div className="relative flex items-center justify-center w-full max-w-4xl h-[70vh] my-auto">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-16 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Lightbox Image */}
            <div 
              className="relative w-full h-full max-h-[60vh] md:max-h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxSelected]}
                alt={`${name} — fullscreen image`}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-16 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Lightbox Info and Thumbnails */}
          <div 
            className="w-full max-w-2xl flex flex-col items-center gap-4 mt-auto mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-sm font-medium tracking-wide">
              {name} — Image {lightboxSelected + 1} of {images.length}
            </p>

            <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxSelected(i)}
                  className={`relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === lightboxSelected
                      ? "border-amber-500 scale-105 shadow-md shadow-amber-500/20"
                      : "border-transparent opacity-65 hover:opacity-100 hover:border-gray-500"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${name} lightbox thumbnail ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
