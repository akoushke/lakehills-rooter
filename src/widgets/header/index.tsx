import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL_ADDRESS,
  CONTACT_PHONE_NUMBER,
  FACEBOOK_URL,
  TWITTER_URL,
  VIMEO_URL,
  PINTEREST_URL,
} from '@/lib/constants';
import { useState } from 'react';

import './styles.scss';

type Props = {
  slug: string;
  setEnableOverlay: (enableOverlay: boolean) => void;
};

export default function Header({ slug, setEnableOverlay }: Props) {
  const pageMenuLinks = ['faq', 'gallery', 'reviews'];
  const servicesMenuLinks = ['services', 'service-details'];
  const [showNav, setShowNav] = useState(false);
  const displayNav = (show: boolean) => {
    setShowNav(show);
    setEnableOverlay(show);
  };

  return (
    <>
      <header id='header' className='site-header header-style-3'>
        <div className='topbar'>
          <div className='container'>
            <div className='row'>
              <div className='col col-sm-9'>
                <div className='contact-info'>
                  <ul>
                    <li>
                      <i className='ti-email'></i> {CONTACT_EMAIL_ADDRESS}
                    </li>
                    <li>
                      <i className='ti-mobile'></i> {CONTACT_PHONE_NUMBER}
                    </li>
                    <li>
                      <i className='ti-location-pin'></i> {CONTACT_ADDRESS}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col col-sm-3'>
                <div className='social'>
                  <div className='social-links'>
                    <ul>
                      <li>
                        <a className='disabled' href={FACEBOOK_URL}>
                          <i className='ti-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a className='disabled' href={TWITTER_URL}>
                          <i className='ti-twitter-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a className='disabled' href={VIMEO_URL}>
                          <i className='ti-vimeo-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a className='disabled' href={PINTEREST_URL}>
                          <i className='ti-pinterest'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className='navigation navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              {/* <button
                type='button'
                className='open-btn'
                onClick={() => displayNav(true)}
              >
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button> */}
              {/* <a className='navbar-brand' href='/'>
                <img src='/logo/transparent.png' alt='logo' />
              </a> */}
            </div>
            {/* <div
              id='navbar'
              className={`navbar-collapse collapse navbar-right navigation-holder ${showNav && 'slideInn'}`}
            >
             <button
                className='close-navbar'
                onClick={() => displayNav(false)}
              >
                <i className='ti-close'></i>
              </button>
              <ul className='nav navbar-nav'>
                 <li className={slug === '' ? 'active' : ''}>
                  <a href='/'>Home</a>
                </li>
                <li className={slug === 'about' ? 'active' : ''}>
                  <a href='/about'>About Us</a>
                </li>
                <li
                  className={`menu-item-has-children ${pageMenuLinks.includes(slug) ? 'active' : ''}`}
                >
                  <a href='#'>Pages</a>
                  <ul className='sub-menu'>
                    <li className={`${slug == 'faq' ? 'active' : ''}`}>
                      <a href='/faq'>FAQ</a>
                    </li>
                    <li className={`${slug == 'reviews' ? 'active' : ''}`}>
                      <a href='/reviews'>Reviews</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`menu-item-has-children ${servicesMenuLinks.includes(slug) ? 'active' : ''}`}
                >
                  <a href='#'>Services</a>
                  <ul className='sub-menu'>
                    <li className={`${slug == 'services' ? 'active' : ''}`}>
                      <a href='/services'>Services</a>
                    </li>
                    <li
                      className={`${slug == 'service-details' ? 'active' : ''}`}
                    >
                      <a href='/service-details'>Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className={slug === 'contact' ? 'active' : ''}>
                  <a href='/contact'>Contact Us</a>
                </li> 
              </ul>
            </div>

             <div className='cart-contact'>
              <div className='contact-btn hidden-xs'>
                <a href='/contact' className='theme-btn'>
                  Request Quote
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}
