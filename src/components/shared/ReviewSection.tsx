"use client";

import { useState } from "react";
import { Star, CheckCircle, ThumbsUp, MessageSquare } from "lucide-react";

interface ReviewSectionProps {
  rating: number;
  reviewCount: number;
  productName: string;
}

interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  title: string;
  date: string;
  content: string;
  verified: boolean;
  helpfulCount: number;
}

export function ReviewSection({ rating, reviewCount, productName }: ReviewSectionProps) {
  // Generate review distribution percentages based on the rating
  const getDistribution = (r: number) => {
    if (r >= 4.8) {
      return { 5: 88, 4: 8, 3: 2, 2: 1, 1: 1 };
    } else if (r >= 4.5) {
      return { 5: 72, 4: 18, 3: 6, 2: 2, 1: 2 };
    } else if (r >= 4.2) {
      return { 5: 60, 4: 25, 3: 9, 2: 4, 1: 2 };
    } else {
      return { 5: 50, 4: 30, 3: 12, 2: 5, 1: 3 };
    }
  };

  const distribution = getDistribution(rating);

  // Universal high-quality dummy reviews
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "rev-1",
      author: "Alex Mercer",
      rating: 5,
      title: "Absolutely exceeded my expectations!",
      date: "May 24, 2026",
      content: `I've been using this ${productName} for about a week now, and it's fantastic. The build quality feels incredibly premium, and it performs flawlessly. If you are on the fence about getting one, just do it. You won't regret it.`,
      verified: true,
      helpfulCount: 24,
    },
    {
      id: "rev-2",
      author: "Sarah Connor",
      rating: 5,
      title: "Perfect addition to my setup",
      date: "May 18, 2026",
      content: `Everything from the packaging to the actual device screams premium. It arrived a day earlier than expected, which is always a nice surprise. The specifications match the description perfectly. Battery/durability is top-tier.`,
      verified: true,
      helpfulCount: 15,
    },
    {
      id: "rev-3",
      author: "David Chen",
      rating: 4,
      title: "Great product, slightly expensive but worth it",
      date: "May 10, 2026",
      content: `Extremely satisfied with the performance of the ${productName}. The design is stunning and fits my aesthetic perfectly. The only downside is the price tag, which is a bit steep, but you get what you pay for in terms of quality.`,
      verified: true,
      helpfulCount: 8,
    },
    {
      id: "rev-4",
      author: "Emma Watson",
      rating: 5,
      title: "Best in class, period.",
      date: "April 28, 2026",
      content: `I did a lot of research before choosing the ${productName}, and it definitely ranks as the best in its category. The user experience is smooth and intuitive, and the warranty provides peace of mind. Highly recommended!`,
      verified: false,
      helpfulCount: 31,
    },
  ]);

  const [votedReviews, setVotedReviews] = useState<Record<string, boolean>>({});

  const handleHelpfulClick = (id: string) => {
    if (votedReviews[id]) return; // prevent multiple votes
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
    setVotedReviews((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-8">
      {/* Overview Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gray-50/50 dark:bg-gray-900/10 p-6 rounded-2xl border border-gray-100 dark:border-gray-900">
        {/* Large Score */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <span className="text-5xl font-black text-gray-900 dark:text-white leading-none">
            {rating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5 mt-3 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Based on {reviewCount.toLocaleString()} ratings
          </span>
        </div>

        {/* Bars */}
        <div className="md:col-span-2 space-y-2">
          {Object.entries(distribution)
            .reverse()
            .map(([stars, pct]) => (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <button className="w-12 font-semibold text-left hover:text-amber-500 transition-colors">
                  {stars} star
                </button>
                <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-right font-medium text-gray-500 dark:text-gray-400">
                  {pct}%
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-900">
          <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-gray-500" /> Top Customer Reviews
          </h3>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Showing {reviews.length} of {reviewCount} reviews
          </span>
        </div>

        <div className="grid gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 border border-gray-100 dark:border-gray-900 rounded-2xl bg-white dark:bg-gray-950 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Author & Date */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-white font-bold text-sm shadow-sm shadow-amber-500/10 select-none">
                    {rev.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {rev.author}
                    </h4>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        <CheckCircle className="h-3 w-3 fill-emerald-100 dark:fill-emerald-950/20" /> Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                  {rev.date}
                </span>
              </div>

              {/* Stars & Title */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= rev.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"
                      }`}
                    />
                  ))}
                </div>
                <h5 className="text-sm font-bold text-gray-900 dark:text-white">
                  {rev.title}
                </h5>
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {rev.content}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleHelpfulClick(rev.id)}
                  disabled={votedReviews[rev.id]}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-sm transition-all ${
                    votedReviews[rev.id]
                      ? "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900 cursor-default"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  <ThumbsUp className={`h-3.5 w-3.5 ${votedReviews[rev.id] ? "fill-amber-500" : ""}`} />
                  Helpful ({rev.helpfulCount})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
