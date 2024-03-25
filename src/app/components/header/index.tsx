import Image from 'next/image';

import './styles.scss';

export default function Header() {
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
                      <i className='ti-email'></i> support@sbtechnosoft.com
                    </li>
                    <li>
                      <i className='ti-mobile'></i> +0123456789
                    </li>
                    <li>
                      <i className='ti-location-pin'></i> 55 no street, outline
                      Austria
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col col-sm-3'>
                <div className='social'>
                  <div className='social-links'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='ti-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='ti-twitter-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='ti-vimeo-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
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
              <button type='button' className='open-btn'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand' href='index.html'>
                <Image
                  src='/logo/horizontal-logo-white-background.png'
                  width={500}
                  height={50}
                  alt='logo'
                />
              </a>
            </div>
            <div
              id='navbar'
              className='navbar-collapse collapse navbar-right navigation-holder'
            >
              <button className='close-navbar'>
                <i className='ti-close'></i>
              </button>
              <ul className='nav navbar-nav'>
                <li className='active'>
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <a href='about-us.html'>About Us</a>
                </li>
                <li className='menu-item-has-children'>
                  {' '}
                  <a href='#'>Pages</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='about-us.html'>About Us</a>
                    </li>
                    <li>
                      <a href='faq.html'>FAQ</a>
                    </li>
                    <li>
                      <a href='testimonials.html'>Testimonials</a>
                    </li>
                    <li>
                      <a href='team.html'>Team</a>
                    </li>
                    <li>
                      <a href='gallery.html'>Gallery</a>
                    </li>
                    <li>
                      <a href='404.html'>404</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  {' '}
                  <a href='#'>Services</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='services.html'>Services</a>
                    </li>
                    <li>
                      <a href='service-details.html'>Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  {' '}
                  <a href='#'>Blog</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='blog.html'>Blog default</a>
                    </li>
                    <li>
                      <a href='blog-single.html'>Blog single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact-us.html'>Contact Us</a>
                </li>
              </ul>
            </div>

            <div className='cart-contact'>
              <div className='contact-btn hidden-xs'>
                {' '}
                <a href='contact-us.html' className='theme-btn'>
                  Request Quote
                </a>{' '}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
