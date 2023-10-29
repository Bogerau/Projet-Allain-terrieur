// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/images/Maison1.png" alt="première maison" /></SwiperSlide>
      <SwiperSlide><img src="/images/Maison2.png" alt="deuxième maison" /></SwiperSlide>
      <SwiperSlide><img src="/images/Maison3.png" alt="troisième maison" /></SwiperSlide>
      <SwiperSlide><img src="/images/Maison4v2.png" alt="troisième maison" /></SwiperSlide>
    </Swiper>
  );
};