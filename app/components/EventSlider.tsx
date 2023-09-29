"use client"
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EventSlider() {

  let imgurls = [
    {url: "https://img.playbook.com/79Gus-hpj2F0O9AqQdAdsAD_dZVuiRSAk_xM4M2MxJA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcxYjhhMTcz/LWQzZWItNDkwNy1h/OWQ0LWFhYjBlMTg2/MjUwNA"},
    {url: "https://img.playbook.com/PsicChvMIisPUyIkiVaqQXUMH5DypEDfvYcAv537uBo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyYTMzZjFj/LWM4MDEtNGE1Yi1h/MmIzLWZlNjQ5N2Rj/MDczYQ"},
    {url: "https://img.playbook.com/TU3d7yqgpf25fTbntLrJwY0cT8EWr7RseCAFHuEmv3g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyMjNhNDQ0/LWI1Y2UtNDc3NS1i/OTZhLWI2MmZmOWYy/MTIwYQ"},
    {url: "https://img.playbook.com/9pHUu0mMMaIG2flkVVZo9NZbft9uvzjzOXs9GLhDrW0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFkMzIzOTY2/LTM3ZDQtNDBmNi04/YjI3LWQ5M2MxMTky/ZjMwZA"},
    {url: "https://img.playbook.com/I6T1fXD70HDkW26xiqaB0xmCP8rkbSwklvBwSqralZk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I3YTA1Mjcx/LThmY2MtNGYzZi1h/NzRmLWYyOTAxZWRi/ZmQyZQ"},
    {url: "https://img.playbook.com/mWj-6t74UnIGJkvzBcRT6ntmgWEGh7-JqBzHFXLSfkE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBjZjZlMTY1/LTZjNjAtNDdjYy1i/MTFjLWI4MDU2YThk/NTVkNw"},
    {url: "https://img.playbook.com/Gga0n6J6xkXaoYxSFqAs5mXGRgtvMNf0Z1EMJE4mnio/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwYTc4OTM0/LWYxMWItNDEyMy1h/OTI0LWM5MGQyZGZl/YzVmYw"},

  ]

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
        <SwiperSlide className='w-80'>
          <div className="slide-content ">
            <a href="/events">
              <img src="https://img.playbook.com/HgJLr8bTzDkE3OIN3gz5lHZT-ZeGdLHKDtrTz-A_dVg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JmYTk4ODg2/LTAzNmItNDk4OC1h/ZDc2LTAwMzQ5ZGFj/MzA4NQ" className="glow"/>
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
              <img src="https://img.playbook.com/LwgYR8r9C8ZgumhQX_0VDH2ElLi7L2GDYesGOnKw9lw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg2YWIwNGQ4/LTFiMWYtNGVmOC05/YjJlLWUxMGIyODI4/MmE3Mw" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/PE6Hlz-vbzZkqh10K96K0v3-HHycswZTkLZHG6pPUXM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBiNWI4MjIw/LTI5ZDYtNGRlZC1i/ODEyLTU5OGI0MWRh/MWVhNQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/I6T1fXD70HDkW26xiqaB0xmCP8rkbSwklvBwSqralZk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I3YTA1Mjcx/LThmY2MtNGYzZi1h/NzRmLWYyOTAxZWRi/ZmQyZQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/xoPayzgWqrXupBPkAIO8-46jLU46AbJZCdSDWrcV9VY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y5OTdmMjdl/LWQ5MGUtNDY1ZC05/MDVhLWMyMzI5OWIx/NjRiNw" className="glow"/>
            </a>
          </div>
        </SwiperSlide> 
       </Swiper>

    </div>
  );
}
