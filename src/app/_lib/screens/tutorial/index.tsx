import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "@/app/_lib/components/ui/button";

// @import css
import "swiper/css";
import "swiper/css/pagination";
import styles from "./tutorial.module.css";
import global from "@/app/page.module.css";

export default function TutorialScreen() {
  return (
    <section className={clsx(global["section"], global["section-2"])} style={{ opacity: 0 }}>
      <div className={styles["swiper-container"]}>
        <div className={styles["swiper"]}>
          <Swiper modules={[Pagination]} pagination>
            <SwiperSlide>
              <div className={styles["swiper-slide"]}>
                <h2>
                  Professionals around the world shared how they feel abo
                  <span className={styles["transparent"]}>
                    ut technology and I’ve listened. Now it’s your turn.
                  </span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["swiper-slide"]}>
                <h2>
                  I’ll ask you a handful of meaningful questions{" "}
                  <span className={styles["transparent"]}>
                    and compare your responses with people in your industry. 
                  </span>
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["swiper-slide"]}>
                <h2>
                  You’ll get insights into current industry sentiments an
                  <span className={styles["transparent"]}>
                    d a reality check about technology in a few minutes. Deal? Great!
                  </span>
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={global["content-container"]}>
        <Button title="Continue" name="continue-button" type="outlined" />
      </div>
    </section>
  );
}
