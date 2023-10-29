import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]} 
      className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/images/Maison1.png" alt="première maison" /></SwiperSlide>
      <SwiperSlide><img src="/images/Maison2.png" alt="deuxième maison" /></SwiperSlide>
      <SwiperSlide><img src="/images/Maison3.png" alt="troisième maison" /></SwiperSlide>
    </Swiper>
  );
};