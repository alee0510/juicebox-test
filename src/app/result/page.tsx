"use client";
import clsx from "clsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";
import { useTransition } from "@/app/_lib/context/transition";

// @components & styles
import Button from "@/app/_lib/components/ui/button";
import styles from "@/app/result/page.module.css";
import global from "@/app/page.module.css";

// @main component
gsap.registerPlugin(useGSAP);
export default function ResultScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const name = query.get("name") || "<Name/>";
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
    tl.play();
  });

  return (
    <section ref={container} className={global["section"]}>
      <div className={clsx(global["content-container"], styles["info-container"])}>
        <h5>Thanks, {name}! Now, it’s time to get a reality check.</h5>
        <h5>This will take 2-3 minutes.</h5>
      </div>
      <div className={clsx(global["content-container"])}>
        <Button title="Continue" name="continue-button" type="filled" />
      </div>
    </section>
  );
}
