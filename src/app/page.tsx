"use client";

// @components & hooks
import { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "@/app/_lib/context/transition";
import Button from "@/app/_lib/components/ui/button";
import styles from "./page.module.css";

// @main component
gsap.registerPlugin(useGSAP);
export default function HomePage(): JSX.Element {
  // @hooks
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const { playLottie } = useTransition();

  // @side-effect
  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power4.inOut",
        duration: 0.5,
        onComplete: playLottie,
      }
    );
  });

  return (
    <section ref={container} className={styles["section"]}>
      <div className={styles["info-container"]}>
        <p>WA businesses feel confident about future growth</p>
        <p className={styles["align-right"]}>AI cant replace creativity</p>
        <p>Sales measure true success</p>
        <p className={styles["align-right"]}>Human connection drives WA business</p>
        <p>The primary barrier to digital transformation is financial investment</p>
      </div>
      <div className={styles["content-container"]}>
        <h2 className={styles["content-heading"]}>
          Compare your thoughts on <span className={styles["gradient-text"]}>technology</span> with
          current industry opinions.
        </h2>
      </div>
      <div className={styles["content-container"]}>
        <Button
          title="Get a reality check"
          name="check-reality-button"
          type="filled"
          color="primary"
          onClick={() => router.push("/tutorial")}
        />
      </div>
    </section>
  );
}
