"use client";

// @components & hooks
import { useRouter } from "next/navigation";
import Button from "@/app/_lib/components/ui/button";
import styles from "./page.module.css";

// @main component
export default function HomePage(): JSX.Element {
  const router = useRouter();
  return (
    <section className={styles["section"]}>
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
