import OwlCarousel from '../owl-carousel';

import { useState, useEffect } from 'react';
import { PORTFOLIO } from '@/lib/constants';
import { CardType } from '@/lib/types';
import Card from './card';

type PortfolioType = {
  title: string;
  subtitle: string;
  body: string;
  cards: Array<CardType>;
};

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioType>(
    {} as PortfolioType
  );

  useEffect(() => {
    setPortfolio(PORTFOLIO);
  }, []);

  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fi flaticon-back"></i>',
      '<i class="fi flaticon-next"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },

      650: {
        items: 2,
        center: false,
        margin: 10,
      },

      992: {
        items: 3,
      },
    },
  };

  return (
    <section className='portfolio-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title-s2'>
              <h2>{portfolio.title}</h2>
              <p>{portfolio.body}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='portfolio-grids portfolio-slider'>
              <OwlCarousel className='owl-theme' {...options}>
                {portfolio.cards?.map((card, index) => (
                  <>
                    <Card key={index} {...card} />
                  </>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
