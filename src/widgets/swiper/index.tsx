'use client';
import './styles.scss';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slides/slide';

import { SwiperOptions } from 'swiper/types';

interface SlideType {
  ID: string;
  body: string;
  image: string;
}

export default function Carousel() {
  const [slides, setSlides] = useState<Array<SlideType>>([]);
  const fileName = 'slide';

  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        const response = await fetch(`/api/markdown/${fileName}`);
        if (!response.ok) {
          throw new Error('File not found');
        }
        const { items } = await response.json();
        const slides = items.map((item: any) => ({
          body: item.slide.body,
          image: item.slide.image,
        }));

        setSlides(slides);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMarkdownData();
  }, []);

  var interleaveOffset = 0.5;
  const slideOpts: SwiperOptions = {
    modules: [Autoplay, Parallax, Navigation, Pagination],
    loop: true,
    speed: 1000,
    parallax: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    pagination: {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
      },
    },
    watchSlidesProgress: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    onTouchStart: (swiper: any) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = '';
      }
    },
    onSetTransition: (swiper: { slides: string | any[] }, speed: string) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + 'ms';
        swiper.slides[i].querySelector('.slide-inner').style.transition =
          speed + 'ms';
      }
    },
    onProgress: (
      swiper: { slides: string | any[]; width: number },
      progress: any
    ) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector('.slide-inner').style.transform =
          'translate3d(' + innerTranslate + 'px, 0, 0)';
      }
    },
  };

  const slidesComps = slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <Slide body={slide.body} image={slide.image} />
    </SwiperSlide>
  ));
  return (
    <section className='hero-slider  hero-style-3'>
      <Swiper {...slideOpts}>
        {slidesComps}
        <div className='swiper-pagination'></div>
        <i className='swiper-button-next fi-rr-arrow-right'></i>
        <i className='swiper-button-prev fi-rr-arrow-left'></i>
      </Swiper>
    </section>
  );
}
