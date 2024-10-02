"use client";
import clsx from "clsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSearchQuery from "@/app/_lib/hooks/useSearchQuery";

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
