import Preloader from '@/widgets/preloader';
import Carousel from '@/widgets/swiper';
import Feature from '@/widgets/feature';
import About from '@/widgets/about';
import Service from '@/widgets/service';
import CTA from '@/widgets/cta';
import Portfolio from '@/widgets/portfolio';
import FunFact from '@/widgets/fun-fact';
import Review from '@/widgets/review';

export default function Home() {
  return (
    <main>
      <Carousel />
      <Preloader />
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
