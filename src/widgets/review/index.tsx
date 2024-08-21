import OwlCarousel from '../owl-carousel';

import './styles.scss';

export default function Review() {
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
    <section className='review-section'>
      <div className='container'>
        <div className='section-title-s2'>
          <span>Client Reviews</span>
          <h2>Service Recipient Says</h2>
          <p>
            {` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industry's standard dummy text`}
          </p>
        </div>
        <OwlCarousel className='owl-theme' {...options}>
          <div className='reviews-item'>
            <h2>Awesome Service</h2>
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
            <p>
              {` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy text`}
            </p>
            <img alt='' src='/reviews1.png' />
            <h3>
              Kolis Muller
              <br />
              <span>USA Citizen</span>
            </h3>
          </div>

          <div className='reviews-item'>
            <h2>Awesome Service</h2>
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
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty`}
            </p>
            <img alt='' src='/reviews2.png' />
            <h3>
              Kolis Muller
              <br />
              <span>USA Citizen</span>
            </h3>
          </div>

          <div className='reviews-item'>
            <h2>Awesome Service</h2>
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
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty`}
            </p>
            <img alt='' src='/reviews1.png' />
            <h3>
              Kolis Muller
              <br />
              <span>USA Citizen</span>
            </h3>
          </div>
          <div className='reviews-item'>
            <h2>Awesome Service</h2>
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
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industry's standard dummy texty`}
            </p>
            <img alt='' src='/reviews2.png' />
            <h3>
              Kolis Muller
              <br />
              <span>USA Citizen</span>
            </h3>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
