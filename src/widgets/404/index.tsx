import './styles.scss';
import env from '@/lib/environments';

export default function Custom404() {
  return (
    <section className='section-padding oops-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='content-box'>
              <h1>404</h1>
              <h2>Oops! Page Not Found!</h2>
              <p>Try to Search for the Best Match or Visit our Home Page</p>
              {/* <div className='sidebar_search'>
                <form action='#'>
                  <input type='text' placeholder='Search....' />
                  <button className='tran3s color1_bg'>
                    <i className='fa fa-search' aria-hidden='true'></i>
                  </button>
                </form>
              </div> */}
              <ul className='link_btn'>
                <li>
                  <a href={`${env.basePath}`} className='theme-btn'>
                    go to home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
