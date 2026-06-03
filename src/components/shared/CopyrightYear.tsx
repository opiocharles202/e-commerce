"use client";

// Tiny CC to safely read current year — avoids the PPR `new Date()` restriction
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
