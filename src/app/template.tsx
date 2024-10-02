"use client";

// @fonts and styles
import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// @register plugins
gsap.registerPlugin(useGSAP);

// @manage transitions
export default function Template({ children }: { children: React.ReactNode }) {
  // @hooks
  const pathname = usePathname();
  const transition = useRef<HTMLDivElement>(null);

  // @fade-in & fade-out transition
  useGSAP(() => {
    gsap.fromTo(
      transition.current,
      { opacity: 0 },
      { opacity: 1, ease: "power4.inOut", duration: 0.05 }
    );
  }, [pathname]);

  return (
    <div ref={transition} id="transition">
      {children}
    </div>
  );
}
