"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";

// @component template & hooks
import Input from "@/app/_lib/components/ui/input";
import LayoutTemplate from "@/app/form/component.template";
// import { useTransition } from "@/app/_lib/context/transition";
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";
import global from "@/app/page.module.css";

// @main component
gsap.registerPlugin(useGSAP);
export default function FormScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  // const { lottieComponent, playLottie } = useTransition();

  // @side-effect
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 }, paused: true });
    tl.add(gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1, ease: "power4.inOut" }));
    tl.play();
  });

  return (
    <section ref={container} className={global["section"]}>
      <LayoutTemplate info="How should we contact you? Type in your email address.">
        <Input
          label="email address"
          placeholder="Email adress"
          onChange={(e) => {
            if (!e.target.value) return query.delete("email");
            query.set("email", e.target.value);
          }}
          onSubmit={() => {
            if (!query.get("email")) return;
            router.push("/result?name=" + query.get("name") + "&email=" + query.get("email"));
          }}
        />
      </LayoutTemplate>
    </section>
  );
}
