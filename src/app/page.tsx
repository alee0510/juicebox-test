"use client";

import clsx from "clsx";
import Lottie from "lottie-react";
import Header from "@/app/_lib/components/features/header";
import Button from "@/app/_lib/components/ui/button";
import AnimationFile from "../../public/lotties/JB2G_Lottie.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["decorator"]}>
        <div>
          <Lottie animationData={AnimationFile} style={{ zIndex: -1 }} />
        </div>
      </div>
      <section className={clsx(styles.section, styles["section-1"])}>
        <div className={clsx(styles["main-content"])}>
          <p>WA businesses feel confident about future growth</p>
          <p className={styles["align-right"]}>AI cant replace creativity</p>
          <p>Sales measure true success</p>
          <p className={styles["align-right"]}>Human connection drives WA business</p>
          <p>The primary barrier to digital transformation is financial investment</p>
        </div>
        <div className={styles["content-container"]}>
          <h2 className={styles["content-heading"]}>
            Compare your thoughts on <span className={styles["gradient-text"]}>technology</span>{" "}
            with current industry opinions.
          </h2>
        </div>
        <div className={styles["content-container"]}>
          <Button
            title="Get a reality check"
            name="check-reality-button"
            type="filled"
            color="primary"
          />
        </div>
      </section>
      {/* <section className={clsx(styles.section, styles["section-2"])}>
        <button className={styles.button}>to section 01</button>
      </section>
      <section className={clsx(styles.section, styles["section-3"])}>
        <button className={styles.button}>to section 01</button>
      </section> */}
    </div>
  );
}
