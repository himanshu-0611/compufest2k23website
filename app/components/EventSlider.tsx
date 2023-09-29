"use client"
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EventSlider() {

  return (
    <div id="events">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0, // Set rotation to 0 to prevent rotation
          stretch: 0,
          depth: 300, // Increase depth to move cards backward
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide={3}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        id='event'
      >
        <SwiperSlide >
          <div className="slide-content ">
            <a href="/events">
              <img src="assets/Flyers/arduino.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/uiux.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/webnetic.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/computingtechnology.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/optimizer.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/web3.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="assets/Flyers/powerbi.jpg" className="glow h-[15rem] lg:h-96 w-fit"/>
            </a>
          </div>
        </SwiperSlide> 
       </Swiper>

    </div>
  );
}
