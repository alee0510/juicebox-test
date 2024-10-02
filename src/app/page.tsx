"use client";

import Lottie from "lottie-react";

import Header from "@/app/_lib/components/features/header";
import AnimationFile from "../../public/lotties/JB2G_Lottie.json";
import styles from "./page.module.css";

// @screens
import HomeScreen from "@/app/_lib/screens/home";
import TutorialScreen from "./_lib/screens/tutorial";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.decorator}>
        <div className={styles.lottie}>
          <Lottie animationData={AnimationFile} style={{ zIndex: -1 }} />
        </div>
      </div>
      <HomeScreen />
      <TutorialScreen />
    </div>
  );
}
