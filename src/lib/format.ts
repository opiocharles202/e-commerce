/**
 * Pure server-safe date formatting utilities.
 * Uses Intl.DateTimeFormat which is safe in RSC/Cache Components
 * because it doesn't access the current time.
 */

/**
 * Format an ISO date string like "2025-01-15" → "January 15, 2025"
 * Safe to call in React Server Components with Cache Components enabled.
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  locale = "en-US"
): string {
  // Parse as UTC noon to avoid timezone-related date shifts
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  return new Intl.DateTimeFormat(locale, options).format(date);
}
