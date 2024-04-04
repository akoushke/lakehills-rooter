import './styles.scss';

export default function ServiceDetails() {
  return (
    <section className='section-padding services-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='services-details'>
              <div className='services-details-image'>
                {' '}
                <img
                  src='http://via.placeholder.com/800x500/000/fff'
                  alt=''
                />{' '}
              </div>
              <div className='services-details-content'>
                <h3>Project Manegment</h3>
                <p>
                  Duis aute irurereprehenderit involuptate velit essle cillum
                  dolore eu fugiate prehen cillum dolore eu
                  fugiateprehen.consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. <br />
                  <br />
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className='services-faq'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div id='accordion' className='accordion-wrapper'>
                      <div className='card'>
                        <div className='card-header' id='headingOne'>
                          <h5>
                            {' '}
                            <a
                              data-toggle='collapse'
                              role='button'
                              data-target='#collapseOne'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              What is Lorem Ipsum?
                            </a>{' '}
                          </h5>
                        </div>
                        <div
                          id='collapseOne'
                          className='collapse in'
                          aria-labelledby='headingOne'
                          data-parent='#accordion'
                        >
                          <div className='card-body'>
                            {' '}
                            He went such dare good mr fact. The small own seven
                            saved man age ﻿no offer. Suspicion did mrs nor
                            furniture smallness. Scale whole downs often leave
                            not eat. An expression reasonably cultivated
                            indulgence mr he surrounded instrument.{' '}
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='headingTwo'>
                          <h5>
                            {' '}
                            <a
                              className='collapsed'
                              role='button'
                              data-toggle='collapse'
                              data-target='#collapseTwo'
                              aria-expanded='false'
                              aria-controls='collapseTwo'
                            >
                              {' '}
                              What’s my value proposition?{' '}
                            </a>{' '}
                          </h5>
                        </div>
                        <div
                          id='collapseTwo'
                          className='collapse'
                          aria-labelledby='headingTwo'
                          data-parent='#accordion'
                        >
                          <div className='card-body'>
                            {' '}
                            He went such dare good mr fact. The small own seven
                            saved man age ﻿no offer. Suspicion did mrs nor
                            furniture smallness. Scale whole downs often leave
                            not eat. An expression reasonably cultivated
                            indulgence mr he surrounded instrument.{' '}
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='headingThree'>
                          <h5>
                            {' '}
                            <a
                              className='collapsed'
                              role='button'
                              data-toggle='collapse'
                              data-target='#collapseThree'
                              aria-expanded='false'
                              aria-controls='collapseThree'
                            >
                              {' '}
                              Why do we use it?{' '}
                            </a>{' '}
                          </h5>
                        </div>
                        <div
                          id='collapseThree'
                          className='collapse'
                          aria-labelledby='headingThree'
                          data-parent='#accordion'
                        >
                          <div className='card-body'>
                            {' '}
                            He went such dare good mr fact. The small own seven
                            saved man age ﻿no offer. Suspicion did mrs nor
                            furniture smallness. Scale whole downs often leave
                            not eat. An expression reasonably cultivated
                            indulgence mr he surrounded instrument.{' '}
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='headingFour'>
                          <h5>
                            {' '}
                            <a
                              className='collapsed'
                              role='button'
                              data-toggle='collapse'
                              data-target='#collapseFour'
                              aria-expanded='false'
                              aria-controls='collapseFour'
                            >
                              {' '}
                              Is my product/service a real business?{' '}
                            </a>{' '}
                          </h5>
                        </div>
                        <div
                          id='collapseFour'
                          className='collapse'
                          aria-labelledby='headingFour'
                          data-parent='#accordion'
                        >
                          <div className='card-body'>
                            {' '}
                            He went such dare good mr fact. The small own seven
                            saved man age ﻿no offer. Suspicion did mrs nor
                            furniture smallness. Scale whole downs often leave
                            not eat. An expression reasonably cultivated
                            indulgence mr he surrounded instrument.{' '}
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='headingFive'>
                          <h5>
                            {' '}
                            <a
                              className='collapsed'
                              role='button'
                              data-toggle='collapse'
                              data-target='#collapseFive'
                              aria-expanded='false'
                              aria-controls='collapseFive'
                            >
                              {' '}
                              How much power do my customers have?{' '}
                            </a>{' '}
                          </h5>
                        </div>
                        <div
                          id='collapseFive'
                          className='collapse'
                          aria-labelledby='headingFive'
                          data-parent='#accordion'
                        >
                          <div className='card-body'>
                            {' '}
                            He went such dare good mr fact. The small own seven
                            saved man age ﻿no offer. Suspicion did mrs nor
                            furniture smallness. Scale whole downs often leave
                            not eat. An expression reasonably cultivated
                            indulgence mr he surrounded instrument.{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='services-page-right'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='services-category'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fa fa-angle-right'></i>Building Staff
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-angle-right'></i>Roof Repairing
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-angle-right'></i>Smart Houses
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-angle-right'></i>Renovation
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-angle-right'></i>Trades &amp;
                          Stocks
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='services-contact text-center'>
                    {' '}
                    <img src='images/contact-icon.png' alt='' />
                    <h5>Call us for any help</h5>
                    <a href='#'>+(012) 345 6789</a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
