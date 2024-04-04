import './styles.scss';

type Props = {
  title?: string;
  text?: string;
  video?: string;
  image?: string;
};

export default function About({
  title = 'We Build for Your Comfort',
  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  video = 'https://www.youtube.com/embed/MWjk8asP2e8?autoplay=1',
  image = 'http://via.placeholder.com/455x475/000/fff',
}: Props) {
  return (
    <section className='about-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-5 col-md-5'>
            <div className='section-title'>
              <span>About us</span>
              <h2>{title}</h2>
            </div>
            <div className='about-text'>
              <p>{text}</p>
              <a href='#' className='theme-btn'>
                More About us
              </a>
            </div>
          </div>
          <div className='col col-lg-6 col-lg-offset-1 col-md-7'>
            <div className='about-pic-area'>
              <div className='video-area'>
                <div className='box'>
                  <a
                    href={video}
                    className='video-btn'
                    data-type='iframe'
                    tabIndex='0'
                  >
                    <i className='fi fi-rr-play-circle'></i>
                    <span>See intro</span>
                  </a>
                </div>
                <img src={image} alt='about-pic' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
