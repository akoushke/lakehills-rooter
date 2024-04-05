import CONST from '@/lib/constants';

import './styles.scss';

type Props = {
  slug: string;
};

export default function Header({ slug }: Props) {
  const pageMenuLinks = ['faq', 'gallery', 'reviews'];
  const servicesMenuLinks = ['services', 'service-details'];

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
                      <i className='ti-email'></i> {CONST.CONTACT_EMAIL_ADDRESS}
                    </li>
                    <li>
                      <i className='ti-mobile'></i> {CONST.CONTACT_PHONE_NUMBER}
                    </li>
                    <li>
                      <i className='ti-location-pin'></i>{' '}
                      {CONST.CONTACT_ADDRESS}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col col-sm-3'>
                <div className='social'>
                  <div className='social-links'>
                    <ul>
                      <li>
                        <a href={CONST.FACEBOOK_URL}>
                          <i className='ti-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href={CONST.TWITTER_URL}>
                          <i className='ti-twitter-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a href={CONST.VIMEO_URL}>
                          <i className='ti-vimeo-alt'></i>
                        </a>
                      </li>
                      <li>
                        <a href={CONST.PINTEREST_URL}>
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
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand' href='/'>
                <img
                  src='/logo/horizontal-logo-white-background.png'
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
                    <li className={`${slug == 'gallery' ? 'active' : ''}`}>
                      <a href='/gallery'>Gallery</a>
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
