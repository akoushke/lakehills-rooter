import OwlCarousel from '../owl-carousel';

export default function Portfolio() {
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

  return (
    <section className='portfolio-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1'>
            <div className='section-title-s2'>
              <span>Recently Completed</span>
              <h2>Our Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='portfolio-grids portfolio-slider'>
              <OwlCarousel className='owl-theme' {...options}>
                <div className='grid'>
                  <div className='img-holder'>
                    <img
                      src='http://via.placeholder.com/600x400/000/fff'
                      alt='residential'
                    />
                    <div className='service-image-overlay'></div>
                  </div>
                  <div className='details'>
                    <h3>
                      <a href='#'>Residential</a>
                    </h3>
                    <p className='cat'>
                      Lorem ipsum dolor sit amet consect adipisi elit sed do
                      eiusm tempor
                    </p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='img-holder'>
                    <img
                      src='http://via.placeholder.com/600x400/000/fff'
                      alt='details'
                    />
                    <div className='service-image-overlay'></div>
                  </div>
                  <div className='details'>
                    <h3>
                      <a href='#'>Commercial</a>
                    </h3>
                    <p className='cat'>
                      Lorem ipsum dolor sit amet consect adipisi elit sed do
                      eiusm tempor
                    </p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='img-holder'>
                    <img
                      src='http://via.placeholder.com/600x400/000/fff'
                      alt='industrial'
                    />
                    <div className='service-image-overlay'></div>
                  </div>
                  <div className='details'>
                    <h3>
                      <a href='#'>Industrial</a>
                    </h3>
                    <p className='cat'>
                      Lorem ipsum dolor sit amet consect adipisi elit sed do
                      eiusm tempor
                    </p>
                  </div>
                </div>
                <div className='grid'>
                  <div className='img-holder'>
                    <img
                      src='http://via.placeholder.com/600x400/000/fff'
                      alt='commercial'
                    />
                    <div className='service-image-overlay'></div>
                  </div>
                  <div className='details'>
                    <h3>
                      <a href='#'>Commercial </a>
                    </h3>
                    <p className='cat'>
                      Lorem ipsum dolor sit amet consect adipisi elit sed do
                      eiusm tempor
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
