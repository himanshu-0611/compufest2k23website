"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EventSlider() {

  const imageUrls = [
    "https://img.playbook.com/zGZzbthb2sp-O1RTfGkUthswZFSujb9JsRcXXLYMbDw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxYmFjY2U1/LWM3MGEtNGRhMC1i/YjIzLTMxNmFlMmJk/NDk3NA",
    "https://img.playbook.com/-p32_7wyMHCkNy9OlhRvHD1gwSPeJb4VLidF7NrtLq4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQxYjExM2Ey/LTVmMWYtNDcwOS05/MDA5LTE4MjkwMmUw/ZjU5NQ",
    "https://img.playbook.com/gGx0aTOo7FeHaJQdHA7oZKcoPDVevmwHbfrsdRoXUJE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxZmQyN2Zm/LTZlZDUtNDUzNC1h/NDM0LTljMmJmOTYy/YWVhZg",
    "https://img.playbook.com/fiqV6CLFh8sFoiAbqgKS18ij7aY7wAGwd0GQB7Hi9lM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMDI3NGYw/LWFiYmItNDBlYi1h/NWE1LWZlZWMzZmNj/ZTM3Yg",
    "https://img.playbook.com/jekhArTgevxPu2qopO9EDfyuYeTWh49AvN3qIhVLDDk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NhYmRhYTc1/LTZjODgtNDNiMS1h/ODI3LWE4MjZiNGM1/MWUyYQ",
    "https://img.playbook.com/X8V4xizPkzWC3_x9KWLQSZeZG9ZW3VYpQdULqna7J0Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhjNTk2MDhm/LTYxYWUtNDI1OS05/MTkwLTU4NjQ5YzEz/MThmZA",
    "https://img.playbook.com/9AUDUzGMmu-UgIBexOhs6pG64OtNSWSzNO9_RhGOB6k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NGJkNTE5/LWEzZGItNDA5OS1i/ZGRjLTE1MjM1ODM2/ZGRiOA"
  ];

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

        {
          imageUrls.map(el =>
            <SwiperSlide>
              <div className="bg-center bg-cover w-[600px] h-[400px] rounded-3xl border-2" >
                <a href="/events">
                  <img
                    src={el}
                    className="glow"
                  />
                </a>
              </div>
            </SwiperSlide>

          )
        }
      </Swiper>
    </div >
  );
}
