'use client';
import './styles.scss';

import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slides/slide';

export default function Carousel() {
  var interleaveOffset = 0.5;

  return (
    <section className='hero-slider  hero-style-3'>
      <Swiper
        modules={[Autoplay, Parallax, Navigation, Pagination]}
        loop={true}
        speed={1000}
        parallax={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + 0 + (index + 1) + '</span>'
            );
          },
        }}
        watchSlidesProgress={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onTouchStart={(swiper) => {
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = '';
          }
        }}
        onSetTransition={(swiper, speed) => {
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + 'ms';
            swiper.slides[i].querySelector('.slide-inner').style.transition =
              speed + 'ms';
          }
        }}
        onProgress={(swiper, progress) => {
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector('.slide-inner').style.transform =
              'translate3d(' + innerTranslate + 'px, 0, 0)';
          }
        }}
      >
        <SwiperSlide>
          <Slide btn_label1='EXPLORE MORE' btn_label2='GET STARTED' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide btn_label1='EXPLORE MORE' btn_label2='GET STARTED' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide btn_label1='EXPLORE MORE' btn_label2='GET STARTED' />
        </SwiperSlide>

        <div className='swiper-pagination'></div>
        <i className='swiper-button-next fi-rr-arrow-right'></i>
        <i className='swiper-button-prev fi-rr-arrow-left'></i>
      </Swiper>
    </section>
  );
}
