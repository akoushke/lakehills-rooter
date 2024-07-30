import './styles.scss';

type Props = {
  image?: string;
  body?: string;
  heading?: string;
  subHeading?: string;
  btn_label1?: string;
  btn_label2?: string;
};

export default function Slide({
  image = 'http://via.placeholder.com/1900x840/000/fff',
  subHeading = 'Lake Hills Rooter',
  heading = 'Sewer & Drain Services',
  body = `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been`,
  btn_label1 = '',
  btn_label2 = '',
}: Props) {
  return (
    <div
      className='slide-inner'
      style={{
        backgroundImage: `url(${image}`,
      }}
    >
      <div className='container'>
        <div data-swiper-parallax='200' className='slide-subtitle'>
          <h4>{subHeading}</h4>
        </div>
        <div data-swiper-parallax='300' className='slide-title'>
          <h2>{heading}</h2>
        </div>
        <div data-swiper-parallax='400' className='slide-text'>
          <p>{body}</p>
        </div>
        <div className='clearfix'></div>
        <div data-swiper-parallax='500' className='slide-btns'>
          {btn_label1 && (
            <a href='#' className='theme-btn'>
              {btn_label1}
            </a>
          )}
          {btn_label2 && (
            <a href='#' className='theme-btn one'>
              {btn_label2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
