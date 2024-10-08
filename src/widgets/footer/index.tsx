import './styles.scss';
import {
  FACEBOOK_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  PINTEREST_URL,
  VIMEO_URL,
  CONTACT_EMAIL_ADDRESS,
  CONTACT_PHONE_NUMBER,
  CONTACT_ADDRESS,
  FOOTER,
} from '@/lib/constants';
import { useEffect, useState } from 'react';
import env from '@/lib/environments';

export default function Footer() {
  const [footer, setFooter] = useState(FOOTER);

  useEffect(() => setFooter(FOOTER), []);
  return (
    <footer className='site-footer'>
      <div className='upper-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-3 col-md-3 col-sm-6'>
              <div className='widget about-widget'>
                <div className='logo widget-title'>
                  <h3>About Us</h3>
                </div>
                <p> {footer.about}</p>
                <ul className='footer-social-menu list-inline'>
                  <li>
                    <a href={FACEBOOK_URL}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={TWITTER_URL}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={INSTAGRAM_URL}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className='fa fa-linkedin-square'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-3 col-sm-6'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <a href={`${env.basePath}/about`}>About Us</a>
                  </li>
                  <li>
                    <a href={`${env.basePath}/services`}>Our Services</a>
                  </li>
                  <li>
                    <a href={`${env.basePath}/contact`}>Contact Us</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href={`${env.basePath}/reviews`}>Reviews</a>
                  </li>
                  <li>
                    <a href={`${env.basePath}/faq`}>FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-3 col-sm-6'>
              <div className='widget contact-widget service-link-widget'>
                <div className='widget-title'>
                  <h3>Head office</h3>
                </div>
                <p>{CONTACT_ADDRESS}</p>
                <ul>
                  <li>Phone: {CONTACT_PHONE_NUMBER}</li>
                  <li>
                    Email:
                    <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`}>
                      {CONTACT_EMAIL_ADDRESS}
                    </a>
                  </li>
                  <li>Office Time: 9 a.m.- 6 p.m.</li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-3 col-sm-6'>
              <div className='widget newsletter-widget'>
                <div className='widget-title'>
                  <h3>Newsletter</h3>
                </div>
                <p>{footer.newsletter}</p>
                <form>
                  <div className='input-1'>
                    <input
                      disabled
                      type='email'
                      className='form-control'
                      placeholder='Coming Soon...'
                      required
                    />
                  </div>
                  <div className='submit clearfix'>
                    <button type='submit'>
                      <i className='ti-email'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lower-footer'>
        <div className='container'>
          <div className='row'>
            <div className='separator'></div>
            <div className='col col-xs-12'>
              <p className='copyright'>
                Copyright &copy; 2019 <span>sbtechnosoft</span>. All rights
                reserved.
              </p>
              <div className='social-icons'>
                <ul>
                  <li>
                    <a href={FACEBOOK_URL}>
                      <i className='ti-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={TWITTER_URL}>
                      <i className='ti-twitter-alt'></i>
                    </a>
                  </li>
                  <li>
                    <a href={LINKEDIN_URL}>
                      <i className='ti-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href={PINTEREST_URL}>
                      <i className='ti-pinterest'></i>
                    </a>
                  </li>
                  <li>
                    <a href={VIMEO_URL}>
                      <i className='ti-vimeo-alt'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
