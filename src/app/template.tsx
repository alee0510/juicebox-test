"use client";

// @fonts and styles
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LottieRefCurrentProps } from "lottie-react";
import LottieAnimation from "@/app/_lib/components/features/lottie";

// @register plugins
gsap.registerPlugin(useGSAP);

// @manage transitions
export default function Template({
  children,
}: {
  children: React.ReactNode | ((callback: () => void) => React.ReactNode);
}) {
  // @hooks
  const pathname = usePathname();
  const transition = useRef<HTMLDivElement>(null);
  const lottie = useRef<LottieRefCurrentProps | null>(null);

  // @fade-in & fade-out transition
  useGSAP(() => {
    gsap.fromTo(
      transition.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power4.inOut",
        duration: 0.05,
        onComplete: () => {
          if (lottie.current) {
            lottie.current.setSpeed(2);
            lottie.current.play();
          }
        },
      }
    );
  }, [pathname]);

  return (
    <React.Fragment>
      <LottieAnimation componentRef={lottie} />
      <div ref={transition} id="transition">
        {typeof children === "function" ? children(() => {}) : children}
      </div>
    </React.Fragment>
  );
}
