import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Vendors.css';

import ven1 from '../../../images/vendorLogos/1.png';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay, } from 'swiper/modules';


const Vendors = () => {
  return (
    <section className='container vendors'>
      {/* Vendors Text */}
      <div className="row gy-3">
        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='ourVendorsText'>Our Vendors</p></div>
        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
      </div>

      <div className='row vendorText'>
        <p>Embark on technological Excellence with our Trusted <br />Network of Vendors.</p>
      </div>

      <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
          <Swiper
            effect={'coverflow'}

            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 550,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay,]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <img src={ven1}></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='col-lg-1'></div>
      </div>
    </section>
  )
}

export default Vendors