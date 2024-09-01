'use client';
import OwlCarousel from '../owl-carousel';
import { useState } from 'react';
import { REVIEWS } from '../../lib/constants';

import './styles.scss';

export default function Review() {
  const [reviews, setReviews] = useState(REVIEWS);
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

  const Reviews = () =>
    reviews.items.map((item, index) => (
      <div key={index} className='reviews-item'>
        <h2>{item.title}</h2>
        <div className='reviews-stars'>
          <span className='icon'>
            {' '}
            <i className='fa fa-star'></i>{' '}
          </span>
          <span className='icon'>
            {' '}
            <i className='fa fa-star'></i>{' '}
          </span>
          <span className='icon'>
            {' '}
            <i className='fa fa-star'></i>{' '}
          </span>
          <span className='icon'>
            {' '}
            <i className='fa fa-star'></i>{' '}
          </span>
          <span className='icon'>
            {' '}
            <i className='fa fa-star'></i>{' '}
          </span>
        </div>
        <p>{item.body}</p>
        <img alt='' src={item.image} />
        <h3>
          {item.name}
          <br />
          <span>{item.location}</span>
        </h3>
      </div>
    ));

  return (
    <section className='review-section'>
      <div className='container'>
        <div className='section-title-s2'>
          <span>{reviews.title}</span>
          <h2>Service Recipient Says</h2>
          <p>{reviews.body}</p>
        </div>
        <OwlCarousel className='owl-theme' {...options}>
          <Reviews />
        </OwlCarousel>
      </div>
    </section>
  );
}
