'use client';

import './styles.scss';

import { useEffect, useState } from 'react';
import type { CardType } from '@/lib/types';
import { SERVICE } from '@/lib/constants';
import Card from './card';

type ServiceType = {
  subtitle: string;
  body: string;
  cards: Array<CardType>;
};

export default function Service() {
  const [service, setService] = useState<ServiceType>({
    subtitle: '',
    body: '',
    cards: [],
  });

  useEffect(() => {
    setService(SERVICE);
  }, []);
  return (
    <section className='service-section-s2 section-padding pt0'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title-s2'>
              <h2>{service.subtitle}</h2>
              <p className='mt-6'>{service.body}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='service-grids clearfix'>
              {service.cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
