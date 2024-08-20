import { CardType } from '@/lib/types';

export default function Card({ icon, body, title }: CardType) {
  return (
    <div className='grid'>
      <div className='overlay'></div>
      <div className={'icon '}>
        <i className={`fa ${icon}`}></i>
      </div>
      <h3>
        <a href='#'>{title}</a>
      </h3>
      <p className='text-center'>{body}</p>
    </div>
  );
}
