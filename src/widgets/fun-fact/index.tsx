import './styles.scss';

export default function FunFact() {
  return (
    <section className='fun-fact-section'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='fun-fact-grids clearfix'>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter' data-count='500'>
                      50
                    </span>
                    +
                  </h3>
                  <p>Finished Projects</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter' data-count='250'>
                      20
                    </span>
                    +
                  </h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter' data-count='15'>
                      00
                    </span>
                    +
                  </h3>
                  <p>Awards winning</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter' data-count='100'>
                      00
                    </span>
                    %
                  </h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
