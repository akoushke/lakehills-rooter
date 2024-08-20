import { CardType } from '@/lib/types';

export default function Card({ icon, title, body }: CardType) {
  return (
    <div className='grid'>
      <div className='img-holder'>
        <img src={icon} alt={title} />
        <div className='service-image-overlay'></div>
      </div>
      <div className='details'>
        <h3>
          <a href='#'>{title}</a>
        </h3>
        <p className='cat'>{body}</p>
      </div>
    </div>
  );
}
