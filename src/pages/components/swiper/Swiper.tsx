import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "./swiper.less";
import LogoSrc from "@/assets/logo.jpg";

const images_top: string[] = [];
for (let i = 0; i < 20; i++) {
  images_top.push(`/images/${i}.png`);
}

const images_bottom: string[] = [];
for (let i = 20; i < 40; i++) {
  images_bottom.push(`/images/${i}.png`);
}

interface IProps {
  isBottom?: boolean;
}

export default function ImgSwiper(props: IProps) {
  const { isBottom } = props;
  const imgList = isBottom ? images_bottom : images_top;
  return (
    <div className={clsx(styles.homeSwiperWrap)}>
      <Swiper
        dir={isBottom ? "rtl" : "ltl"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop
        autoplay={{
          delay: 500,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[150px]">
              <img
                // src={imgList[index % imgList.length]}
                src={LogoSrc}
                className={styles.imgItem}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
