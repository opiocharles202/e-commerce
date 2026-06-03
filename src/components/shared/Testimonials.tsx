"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  product: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "James Mwangi",
    role: "Tech Enthusiast",
    avatar: "JM",
    rating: 5,
    title: "Absolutely the best online gadget store!",
    content:
      "I've ordered three times from Gadget District and every experience has been flawless. The iPhone 16 Pro Max arrived in perfect condition with original packaging. Shipping was faster than expected, and their customer support team answered all my questions within minutes. This is now my go-to store for all electronics.",
    product: "iPhone 16 Pro Max",
    date: "May 2026",
  },
  {
    id: "t-2",
    name: "Sarah Kimani",
    role: "Content Creator",
    avatar: "SK",
    rating: 5,
    title: "Premium products, premium service",
    content:
      "As a content creator, I need reliable tech gear. The AirPods Pro 2 I got here have incredible noise cancellation that helps me focus during editing sessions. The prices are competitive and the 30-day return policy gave me confidence to purchase. Highly recommend to anyone looking for authentic gadgets.",
    product: "AirPods Pro 2",
    date: "April 2026",
  },
  {
    id: "t-3",
    name: "David Ochieng",
    role: "Software Developer",
    avatar: "DO",
    rating: 5,
    title: "Genuine products with warranty — love it!",
    content:
      "I was skeptical about buying expensive electronics online, but Gadget District completely won me over. My Samsung Galaxy S25 Ultra came with full manufacturer warranty and all original accessories. The product descriptions were accurate, and the specs matched perfectly. Will definitely be a repeat customer.",
    product: "Samsung Galaxy S25 Ultra",
    date: "March 2026",
  },
  {
    id: "t-4",
    name: "Amina Hassan",
    role: "Business Owner",
    avatar: "AH",
    rating: 5,
    title: "Bulk order for my team — seamless experience",
    content:
      "Ordered 5 Samsung Galaxy Tabs for my team and the process was incredibly smooth. Got a great bundle price, free shipping, and everything arrived within 2 days. The tablets are genuine and perform brilliantly. Gadget District has earned a loyal business customer.",
    product: "Samsung Galaxy Tab S9",
    date: "February 2026",
  },
  {
    id: "t-5",
    name: "Brian Otieno",
    role: "University Student",
    avatar: "BO",
    rating: 4,
    title: "Great value, fast delivery",
    content:
      "Found a MagSafe charger here at a much better price than other stores. Delivery to campus was super quick and the charger works perfectly with my iPhone. The installment payment option is a game-changer for students like me. Only wish they had more color options!",
    product: "MagSafe Charger",
    date: "January 2026",
  },
];

// Gradient avatar colors
const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-violet-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full">
          <Star className="h-3 w-3 fill-current" />
          Customer Reviews
        </span>
        <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          What Our Customers Say
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Join thousands of happy customers who trust Gadget District for their tech needs
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-8 sm:gap-12">
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900 dark:text-white">4.9</p>
          <div className="flex items-center gap-0.5 mt-1 justify-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">Average Rating</p>
        </div>
        <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900 dark:text-white">2,400+</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">Happy Customers</p>
        </div>
        <div className="h-10 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900 dark:text-white">98%</p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-medium">Would Recommend</p>
        </div>
      </div>

      {/* Featured testimonial (active one) */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 shadow-lg shadow-gray-900/[0.04] p-8 sm:p-10">
          {/* Quote icon */}
          <Quote className="absolute top-6 right-6 h-16 w-16 text-amber-500/[0.07] rotate-180" />

          <div className="relative z-10 space-y-5">
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${
                    s <= testimonials[activeIndex].rating
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"
                  }`}
                />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              &ldquo;{testimonials[activeIndex].title}&rdquo;
            </h3>

            {/* Content */}
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
              {testimonials[activeIndex].content}
            </p>

            {/* Product tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-lg">
              Purchased: {testimonials[activeIndex].product}
            </span>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-900">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${
                    avatarGradients[activeIndex % avatarGradients.length]
                  } text-white font-bold text-sm shadow-lg shadow-gray-900/5 select-none`}
                >
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].role} · {testimonials[activeIndex].date}
                  </p>
                </div>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial thumbnail selector */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => goTo(i)}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${
              i === activeIndex
                ? "border-amber-500 bg-amber-50/50 dark:bg-amber-950/10 shadow-sm"
                : "border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            <div
              className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-br ${
                avatarGradients[i % avatarGradients.length]
              } text-white font-bold text-[10px] sm:text-xs select-none transition-transform duration-200 ${
                i === activeIndex ? "scale-110" : ""
              }`}
            >
              {t.avatar}
            </div>
            <span className="text-[9px] sm:text-[10px] font-semibold text-gray-600 dark:text-gray-400 truncate w-full text-center">
              {t.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
