import './styles.scss';

export default function Footer() {
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industry's
                  standard dummy text
                </p>
                <ul className='footer-social-menu list-inline'>
                  <li>
                    <a href=''>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-linkedin-square'></i>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <i className='fa fa-skype'></i>
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
                    <a href=''>About Us</a>
                  </li>
                  <li>
                    <a href=''>Our Services</a>
                  </li>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                  <li>
                    <a href=''>Contact Us</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href=''>Reviews</a>
                  </li>
                  <li>
                    <a href=''>Blog</a>
                  </li>
                  <li>
                    <a href=''>FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-3 col-sm-6'>
              <div className='widget contact-widget service-link-widget'>
                <div className='widget-title'>
                  <h3>Head office</h3>
                </div>
                <p>
                  125 Big fella St., New York, Hi 5654775, United States of
                  America
                </p>
                <ul>
                  <li>Phone: 0123456789</li>
                  <li>
                    Email:
                    <a href='mailto:test@sbtechnosoft.com'>
                      test@sbtechnosoft.com
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing industry.
                </p>
                <form>
                  <div className='input-1'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email Address *'
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
                      <i className='ti-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='ti-pinterest'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
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
