"use client";

// @components & hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "@/app/_lib/components/ui/button";

// @styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./page.module.css";
import global from "@/app/page.module.css";

// @main component
export default function TutorialPage(): JSX.Element {
  // @state
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // @effects
  useEffect(() => {
    if (swiper && currentSlide <= 2) {
      swiper?.slideTo(currentSlide, 500, false);
    }
  }, [currentSlide, swiper]);

  // @events
  const onButtonContinue = () => {
    if (currentSlide === 2) {
      router.push("/form/name");
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <section className={global["section"]}>
      <div className={styles["swiper-container"]}>
        <div className={styles["swiper"]}>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            <SwiperSlide>
              <SlideItem
                title="Professionals around the world shared how they feel abo"
                transparent="ut technology and I’ve listened. Now it’s your turn."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                title="I’ll ask you a handful of meaningful questions"
                transparent=" and compare your responses with people in your industry."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                title="You’ll get insights into current industry sentiments an"
                transparent="d a reality check about technology in a few minutes. Deal? Great!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={global["content-container"]}>
        <Button
          title="Continue"
          name="continue-button"
          type="outlined"
          onClick={onButtonContinue}
        />
      </div>
    </section>
  );
}

// @slide item
function SlideItem({ title, transparent }: { title: string; transparent: string }): JSX.Element {
  return (
    <div className={styles["swiper-slide"]}>
      <h2>
        {title}
        <span className={styles["transparent"]}>{transparent}</span>
      </h2>
    </div>
  );
}
