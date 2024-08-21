'use client';
import dynamic from 'next/dynamic';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  (window as any).$ = (window as any).jQuery = require('jquery');
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default OwlCarousel;
