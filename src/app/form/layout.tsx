"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import global from "@/app/page.module.css";

// @component template
gsap.registerPlugin(useGSAP);
export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  // @side-effect
  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power4.inOut",
        duration: 1,
      }
    );
  });
  return (
    <section ref={container} className={global["section"]}>
      {children}
    </section>
  );
}
