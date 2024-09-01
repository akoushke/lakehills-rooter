'use client';

import Carousel from '@/widgets/swiper';
import Feature from '@/widgets/feature';
import About from '@/widgets/about';
import Service from '@/widgets/service';
import CTA from '@/widgets/cta';
import Portfolio from '@/widgets/portfolio';
import FunFact from '@/widgets/fun-fact';
import Review from '@/widgets/review';

import { useFetchMarkdown } from '@/hooks';

export default function Home() {
  // const markdownData = useFetchMarkdown('home');
  return (
    <main>
      <Carousel />
      <Feature />
      <About />
      <Service />
      <CTA />
      <Portfolio />
      <FunFact />
      <Review />
    </main>
  );
}
