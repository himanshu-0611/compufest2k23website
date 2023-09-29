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
              <img src="https://img.playbook.com/mWj-6t74UnIGJkvzBcRT6ntmgWEGh7-JqBzHFXLSfkE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBjZjZlMTY1/LTZjNjAtNDdjYy1i/MTFjLWI4MDU2YThk/NTVkNw" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/79Gus-hpj2F0O9AqQdAdsAD_dZVuiRSAk_xM4M2MxJA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcxYjhhMTcz/LWQzZWItNDkwNy1h/OWQ0LWFhYjBlMTg2/MjUwNA" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/TU3d7yqgpf25fTbntLrJwY0cT8EWr7RseCAFHuEmv3g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyMjNhNDQ0/LWI1Y2UtNDc3NS1i/OTZhLWI2MmZmOWYy/MTIwYQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/Gga0n6J6xkXaoYxSFqAs5mXGRgtvMNf0Z1EMJE4mnio/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwYTc4OTM0/LWYxMWItNDEyMy1h/OTI0LWM5MGQyZGZl/YzVmYw" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/9pHUu0mMMaIG2flkVVZo9NZbft9uvzjzOXs9GLhDrW0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFkMzIzOTY2/LTM3ZDQtNDBmNi04/YjI3LWQ5M2MxMTky/ZjMwZA" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/9pHUu0mMMaIG2flkVVZo9NZbft9uvzjzOXs9GLhDrW0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFkMzIzOTY2/LTM3ZDQtNDBmNi04/YjI3LWQ5M2MxMTky/ZjMwZA" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/AYbGSJdBOcivbhDsA_ENZNXEUFLO_7Gahs42qJL-O7E/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q5ZjYwZjdl/LTNiODMtNGNjNy1i/ODE5LWRlNTU5ODM2/NThhOQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide> 
       </Swiper>

    </div>
  );
}