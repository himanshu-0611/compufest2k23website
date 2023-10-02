import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default () => {
  return (
    <div className="container p-6">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='https://img.playbook.com/jekhArTgevxPu2qopO9EDfyuYeTWh49AvN3qIhVLDDk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NhYmRhYTc1/LTZjODgtNDNiMS1h/ODI3LWE4MjZiNGM1/MWUyYQ'
            alt="slide_image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://img.playbook.com/zGZzbthb2sp-O1RTfGkUthswZFSujb9JsRcXXLYMbDw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxYmFjY2U1/LWM3MGEtNGRhMC1i/YjIzLTMxNmFlMmJk/NDk3NA'
            alt="slide_image"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.playbook.com/fiqV6CLFh8sFoiAbqgKS18ij7aY7wAGwd0GQB7Hi9lM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMDI3NGYw/LWFiYmItNDBlYi1h/NWE1LWZlZWMzZmNj/ZTM3Yg'
            alt="slide_image"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.playbook.com/9AUDUzGMmu-UgIBexOhs6pG64OtNSWSzNO9_RhGOB6k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NGJkNTE5/LWEzZGItNDA5OS1i/ZGRjLTE1MjM1ODM2/ZGRiOA'
            alt="slide_image"

          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

