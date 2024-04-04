import './styles.scss';

export default function Contact() {
  return (
    <section className='section-padding contact-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='section-title-s2'>
              {' '}
              <span>Contact Us</span>
              <h2>keep in touch</h2>
            </div>
            <div className='contact-form'>
              <form id='contact-form' method='post' noValidate>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='single-input form-group'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Your name'
                        data-error='Name is required.'
                        required
                      />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='single-input form-group'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        data-error='Valid email is required.'
                        required
                      />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='single-input form-group'>
                      <input
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        data-error='Subject is required.'
                        required
                      />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='single-input form-group'>
                      <input
                        type='text'
                        name='phone'
                        placeholder='Phone'
                        data-error='Phone is required.'
                        required
                      />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='single-input form-group'>
                      <textarea
                        placeholder='Message'
                        name='message'
                        data-error='Please,leave us a message.'
                        required
                      ></textarea>
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>
                  <p className='form-message'></p>
                  <div className='col-sm-12'>
                    <div className='single-input form-group'>
                      <button className='theme-btn' type='submit'>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-sm-5 col-sm-offset-1'>
            <div className='contact-info'>
              <ul>
                <li>
                  <div className='single-info'>
                    <div className='info-icon'>
                      {' '}
                      <i className='fa fa-home'></i>{' '}
                    </div>
                    <div className='info-content'>
                      <p>
                        143 castle road 517 <br />
                        district, kiyev port south Canada
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-info'>
                    <div className='info-icon'>
                      {' '}
                      <i className='fa fa-phone'></i>{' '}
                    </div>
                    <div className='info-content'>
                      <p>+3 012 345 6789</p>
                      <p>+1 123 456 7890</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='single-info'>
                    <div className='info-icon'>
                      {' '}
                      <i className='fa fa-envelope-o'></i>{' '}
                    </div>
                    <div className='info-content'>
                      <p>info@sbtechnosoft.com</p>
                      <p>support@sbtechnosoft.com</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='google-map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198710.35112897935!2d-98.51489117772236!3d38.904562823631146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1471865832140'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
