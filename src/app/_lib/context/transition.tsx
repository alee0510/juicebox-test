"use client";

// @fonts and styles
import React, { useRef, createContext, useContext, useState } from "react";
import gsap from "gsap";
import { LottieRefCurrentProps } from "lottie-react";
import LottieAnimation from "@/app/_lib/components/features/lottie";

// @create context
export const TransitionContext = createContext({
  timeline: null as gsap.core.Timeline | null,
  lottieContainer: null as React.RefObject<HTMLDivElement> | null,
  lottieComponent: null as React.RefObject<HTMLDivElement> | null,
  playLottie: () => {},
});
export const useTransition = () => useContext(TransitionContext);

// @manage transitions
export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  // @hooks
  const [timeline] = useState<gsap.core.Timeline | null>(() =>
    gsap.timeline({ defaults: { duration: 0.5, paused: true } })
  );
  const transition = useRef<HTMLDivElement>(null);
  const lottie = useRef<LottieRefCurrentProps | null>(null);
  const containerLottie = useRef<HTMLDivElement>(null);
  const componentLottie = useRef<HTMLDivElement>(null);

  // @animate lottie
  const playLottie = () => {
    if (lottie.current) {
      lottie.current.setSpeed(2);
      lottie.current.goToAndPlay(1);
    }
  };

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        lottieContainer: containerLottie,
        lottieComponent: componentLottie,
        playLottie,
      }}
    >
      <LottieAnimation
        containerRef={containerLottie}
        componentRef={componentLottie}
        lottieRef={lottie}
      />
      <div ref={transition} id="transition">
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
