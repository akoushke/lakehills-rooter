'use client';

import { CONTACT_PHONE_NUMBER, CONTACT_US } from '@/lib/constants';
import { useEffect, useState } from 'react';
import env from '@/lib/environments';
import './styles.scss';

type ContactType = {
  title: string;
  subtitle: string;
};

export default function CTA() {
  const [contact, setContact] = useState<ContactType>({} as ContactType);

  useEffect(() => {
    setContact(CONTACT_US);
  }, []);
  return (
    <section className='cta-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='cta-content'>
              <h2>{contact.title}</h2>
              <p>{contact.subtitle}</p>
              <div className='phone-btn'>
                <span>{CONTACT_PHONE_NUMBER}</span>{' '}
                <span className='mid-text'>or</span>
                <a href={`${env.basePath}/contact`} className='theme-btn'>
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
