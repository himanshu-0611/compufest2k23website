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
    {url: "https://img.playbook.com/SkB86uJ8bXcknheRWbxla3Jk4OGcrn1P4MBmBAZ_XAs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyNGU4MDY5/LTlkNzQtNDRjMy05/YWY0LWVmYzQyMmZh/MGM0OQ"},
    {url: "https://img.playbook.com/daDDgOo9rmz2zlozb7VojbZb668k5rhFEjEnzFCQPD8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNlNzkyYjI3/LTI1ZDktNGMxOS1h/MGQ0LTNlMWU1Mjcw/MTJiMA"},
    {url: "https://img.playbook.com/kWqWZlplQsT6bpIdWPzsBxiKCcxM1hq_DW3BgziZ9eg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc3ZTA0YjY0/LTVhZDctNDk0OS04/YTljLTY2MTcwMzBh/ZWI0OA"},
    {url: "https://img.playbook.com/wYzBmWm-MGt9777zohXnnl49EveDiZ9v5uLCgiXMznE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzMwYWE0NzI4/LWNmM2ItNDQ0OS05/YTMzLWQyYTllYzA5/ODZjMg"},
    {url: "https://img.playbook.com/S9pDwNsbDYWISMyQxJsdBf0oaq9cWEJMKryO3TyEQ58/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3ZmQ2MWNi/LTEwODEtNDYwZC04/ZjI5LWFlYTk5OTU5/N2FiMQ"},
    {url: "https://img.playbook.com/bmEtwG0uvLEJgrvmAGnWeFSUoveJdcPIaDdjvH3Ku4w/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QxMTdkYjE4/LTZlNDAtNDJiNS05/YmQ2LThiYWZjMGRk/N2VkZQ"},
    {url: "https://img.playbook.com/4DT6vwZ7rDxYFzrUSKBYQzZeW8J6BKj0ptE_btAazFQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JlNjdhNGQ5/LTYxNjItNDQzYi1h/MjliLTM4N2Q3MzZh/YTMwNQ"},

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
              <img src="https://img.playbook.com/SkB86uJ8bXcknheRWbxla3Jk4OGcrn1P4MBmBAZ_XAs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyNGU4MDY5/LTlkNzQtNDRjMy05/YWY0LWVmYzQyMmZh/MGM0OQ" className="glow"/>
            </a>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className="slide-content">
            <a href="/events">
              <img src="https://img.playbook.com/kWqWZlplQsT6bpIdWPzsBxiKCcxM1hq_DW3BgziZ9eg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc3ZTA0YjY0/LTVhZDctNDk0OS04/YTljLTY2MTcwMzBh/ZWI0OA" className="glow"/>
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
              <img src="https://img.playbook.com/S9pDwNsbDYWISMyQxJsdBf0oaq9cWEJMKryO3TyEQ58/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3ZmQ2MWNi/LTEwODEtNDYwZC04/ZjI5LWFlYTk5OTU5/N2FiMQ" className="glow"/>
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