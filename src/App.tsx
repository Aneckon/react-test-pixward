import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel, Navigation } from 'swiper';

import { Header, Home, Story, Trailer } from './components';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        scrollbar={true}
        navigation={true}
        modules={[Pagination, Scrollbar, Mousewheel, Navigation]}
        mousewheel={true}
        className="mySwiper">
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide><Trailer /></SwiperSlide>
        <SwiperSlide><Story /></SwiperSlide>
      </Swiper>
    </div>
  );
};
