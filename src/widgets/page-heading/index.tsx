import './styles.scss';

type Props = {
  pageTitle: string;
};

export default function PageHeading({ pageTitle }: Props) {
  return (
    <div className='pagehding-sec'>
      <div className='images-overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='page-heading'>
              <h1>{pageTitle}</h1>
            </div>
            <div className='page-breadcrumb-inner'>
              <div className='page-breadcrumb'>
                <div className='breadcrumb-list'>
                  <ul>
                    <li>
                      <a href='/'>Home</a>
                    </li>
                    <li>
                      <a href={`/${pageTitle}`}>{pageTitle}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
