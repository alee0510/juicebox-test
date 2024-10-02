"use client";
import TransitionProvider from "@/app/_lib/context/transition";

// @main component
export default function Template({ children }: { children: React.ReactNode }) {
  return <TransitionProvider>{children}</TransitionProvider>;
}
