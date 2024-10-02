"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "@/app/_lib/context/transition";

// @component template & hooks
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";
import global from "@/app/page.module.css";

// @main component
gsap.registerPlugin(useGSAP);
export default function FormScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const { lottieComponent, playLottie } = useTransition();

  // @side-effect
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 }, paused: true });
    tl.add(gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1, ease: "power4.inOut" }));
    tl.add(
      gsap.fromTo(
        lottieComponent?.current || "",
        {
          scale: 0.5,
          translateY: "-5%",
        },
        {
          scale: 0.15,
          translateY: "-27%",
          ease: "power4.inOut",
          onComplete: playLottie,
        }
      )
    );
    tl.play();
  });

  return (
    <section ref={container} className={global["section"]}>
      <LayoutTemplate info="Let’s start with the basics. Type in your first name.">
        <Input
          label="First Name"
          placeholder="First Name"
          onChange={(e) => {
            if (!e.target.value) return query.delete("first_name");
            query.set("first_name", e.target.value);
          }}
          onSubmit={() => {
            if (!query.get("first_name")) return;
            router.push("/form/email?name=" + query.get("first_name"));
          }}
        />
      </LayoutTemplate>
    </section>
  );
}
