"use client";

import Lottie from "lottie-react";
import Header from "@/app/_lib/components/features/header";
import AnimationFile from "../../public/lotties/JB2G_Lottie.json";
import styles from "./page.module.css";

// @screens
import HomeScreen from "@/app/_lib/screens/home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.decorator}>
        <div>
          <Lottie animationData={AnimationFile} style={{ zIndex: -1 }} />
        </div>
      </div>
      <HomeScreen />
      {/* <section className={clsx(styles.section, styles["section-2"])}>
        <button className={styles.button}>to section 01</button>
      </section>
      <section className={clsx(styles.section, styles["section-3"])}>
        <button className={styles.button}>to section 01</button>
      </section> */}
    </div>
  );
}
