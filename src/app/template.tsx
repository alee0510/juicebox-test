"use client";
import TransitionProvider from "@/app/_lib/context/transition";
import { Suspense } from "react";

// @main component
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <Suspense>{children}</Suspense>
    </TransitionProvider>
  );
}
