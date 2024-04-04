import './styles.scss';

export default function Feature() {
  return (
    <section className='features-wrapper'>
      <div className='container'>
        <div className='row box-shadow2 bg-white featured-box'>
          <div className='col-sm-4'>
            <div className='featured-icon-box text-center'>
              <div className='featured-icon'>
                <i className='ti ti-settings'></i>
              </div>
              <div className='featured-content'>
                <div className='featured-title'>
                  <h5>Who we are</h5>
                </div>
                <div className='featured-desc'>
                  <p>
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                  <a className='btn' href='#'>
                    More Services<i className='ti ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 box-shadow2'>
            <div className='featured-icon-box text-center'>
              <div className='featured-icon'>
                <i className='ti ti-user'></i>
              </div>
              <div className='featured-content'>
                <div className='featured-title'>
                  <h5>What we do</h5>
                </div>
                <div className='featured-desc'>
                  <p>
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                  <a className='btn' href='#'>
                    More Services<i className='ti ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='featured-icon-box text-center'>
              <div className='featured-icon'>
                <i className='ti ti-thumb-up'></i>
              </div>
              <div className='featured-content'>
                <div className='featured-title'>
                  <h5>Why Choose Us?</h5>
                </div>
                <div className='featured-desc'>
                  <p>
                    Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm
                    tempor
                  </p>
                  <a className='btn' href='#'>
                    More Services<i className='ti ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
