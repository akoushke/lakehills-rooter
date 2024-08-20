'use client';

import './styles.scss';
import { ABOUT } from '@/lib/constants';
import { useEffect, useState } from 'react';

type AboutType = {
  title: string;
  body: string;
  image: string;
  videoLink: string;
} | null;

export default function About() {
  const [about, setAbout] = useState<AboutType>(null);

  useEffect(() => {
    setAbout(ABOUT);
  }, []);

  return (
    <section className='about-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-5 col-md-5'>
            <div className='section-title'>
              <span>About us</span>
              <h2>{about?.title}</h2>
            </div>
            <div className='about-text'>
              <p>{about?.body}</p>
              <a href='#' className='theme-btn'>
                More About us
              </a>
            </div>
          </div>
          <div className='col col-lg-6 col-lg-offset-1 col-md-7'>
            <div className='about-pic-area'>
              <div className='video-area'>
                <div className='box'>
                  <a
                    href={about?.videoLink}
                    className='video-btn'
                    data-type='iframe'
                    tabIndex={0}
                  >
                    <i className='fi fi-rr-play-circle'></i>
                    <span>See intro</span>
                  </a>
                </div>
                <img src={about?.image} alt='about-pic' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
