type Props = {
  body: string;
  icon: string;
  title: string;
};

export default function Card({ body, icon, title }: Props) {
  return (
    <div className='col-sm-4 box-shadow2'>
      <div className='featured-icon-box text-center'>
        <div className='featured-icon'>
          <i className={`ti ${icon}`}></i>
        </div>
        <div className='featured-content'>
          <div className='featured-title'>
            <h5>{title}</h5>
          </div>
          <div className='featured-desc'>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
