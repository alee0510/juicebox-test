"use client";

import clsx from "clsx";
import Header from "@/app/_lib/components/features/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={clsx(styles.section, styles["section-1"])}>
        <button className={styles.button}>to section 01</button>
      </section>
      <section className={clsx(styles.section, styles["section-2"])}>
        <button className={styles.button}>to section 01</button>
      </section>
      <section className={clsx(styles.section, styles["section-3"])}>
        <button className={styles.button}>to section 01</button>
      </section>
    </div>
  );
}
