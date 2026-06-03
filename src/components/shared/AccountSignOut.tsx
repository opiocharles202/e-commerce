"use client";

import { LogOut } from "lucide-react";

export function AccountSignOut() {
  return (
    <button
      onClick={() => {
        // Will call signOut Server Action in backend phase
        console.log("Sign out");
      }}
      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
    >
      <LogOut className="h-4 w-4 shrink-0" />
      Sign Out
    </button>
  );
}
