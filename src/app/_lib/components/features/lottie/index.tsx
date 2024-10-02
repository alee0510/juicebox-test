import { MutableRefObject, RefObject } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AnimationFile from "@/../public/lotties/JB2G_Lottie.json";
import styles from "./lottie.module.css";

// @props
type LottieProps = {
  containerRef?: RefObject<HTMLDivElement>;
  componentRef?: RefObject<HTMLDivElement>;
  lottieRef?: MutableRefObject<LottieRefCurrentProps | null>;
};

// @main component
export default function LottieAnimation({
  containerRef,
  componentRef,
  lottieRef,
}: LottieProps): JSX.Element {
  return (
    <div ref={containerRef} className={styles["container"]}>
      <div ref={componentRef} className={styles["lottie"]}>
        <Lottie
          loop={false}
          autoplay={false}
          lottieRef={lottieRef}
          animationData={AnimationFile}
          aria-label="lottie animation"
          className={styles["lottie-file"]}
        />
      </div>
    </div>
  );
}
