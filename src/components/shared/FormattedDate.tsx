"use client";

// Client component for date formatting — avoids new Date() in RSC with Cache Components
interface FormattedDateProps {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
  className?: string;
}

export function FormattedDate({
  dateString,
  options = { year: "numeric", month: "long", day: "numeric" },
  className,
}: FormattedDateProps) {
  return (
    <span className={className}>
      {new Date(dateString).toLocaleDateString("en-US", options)}
    </span>
  );
}
