import React, { useState, useEffect } from 'react';
import './styles.scss';
import { FEATURES } from '@/lib/constants';
import { CardType } from '@/lib/types';
import Card from './card';

export default function Feature() {
  const [cards, setCards] = useState<Array<CardType>>([]);

  const cardsComps = cards.map(({ body, icon, title }: CardType, index) => (
    <Card key={index} body={body} icon={icon} title={title} />
  ));

  useEffect(() => {
    setCards(FEATURES);
    return () => {};
  }, []);

  return (
    <section className='features-wrapper'>
      <div className='container'>
        <div className='row box-shadow2 bg-white featured-box'>
          {cardsComps}
        </div>
      </div>
    </section>
  );
}
