import './styles.scss';

export default function CTA() {
  return (
    <section className='cta-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='cta-content'>
              <h2>We have 30 years experience in Constrution</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <div className='phone-btn'>
                <span>+0123456789</span> <span className='mid-text'>or</span>
                <a href='#' className='theme-btn'>
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
