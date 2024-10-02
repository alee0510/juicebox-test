import Lottie from "lottie-react";
import AnimationFile from "@/../public/lotties/JB2G_Lottie.json";
import styles from "./lottie.module.css";

// @main component
export default function LottieAnimation() {
  return (
    <div className={styles["container"]}>
      <div className={styles["lottie"]}>
        <Lottie
          loop={false}
          autoPlay={false}
          animationData={AnimationFile}
          aria-label="lottie animation"
          style={{ zIndex: -1 }}
          //   lottieRef={lottie}
        />
      </div>
    </div>
  );
}
