import { MutableRefObject } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AnimationFile from "@/../public/lotties/JB2G_Lottie.json";
import styles from "./lottie.module.css";

// @props
type LottieProps = {
  componentRef?: MutableRefObject<LottieRefCurrentProps | null>;
};

// @main component
export default function LottieAnimation({ componentRef }: LottieProps): JSX.Element {
  return (
    <div className={styles["container"]}>
      <div className={styles["lottie"]}>
        <Lottie
          loop={false}
          autoplay={false}
          lottieRef={componentRef}
          animationData={AnimationFile}
          aria-label="lottie animation"
          style={{ zIndex: -1 }}
        />
      </div>
    </div>
  );
}
