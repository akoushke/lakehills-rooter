'use client';
import CountUp from 'react-countup';

import './styles.scss';

const MAX_NUMBER_OF_PROJECTS = 500;
const MAX_NUMBER_OF_YEARS_OF_EXPERIENCE = 250;
const MAX_NUMBER_OF_AWARDS = 15;
const MAX_PERCENTAGE_OF_HAPPY_CLIENTS = 100;
const TIMER_DURATION = 2;
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
                    <span className='counter'>
                      <CountUp
                        duration={TIMER_DURATION}
                        end={MAX_NUMBER_OF_PROJECTS}
                        enableScrollSpy
                      />
                    </span>
                    +
                  </h3>
                  <p>Finished Projects</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter'>
                      <CountUp
                        duration={TIMER_DURATION}
                        end={MAX_NUMBER_OF_YEARS_OF_EXPERIENCE}
                        enableScrollSpy
                      />
                    </span>
                    +
                  </h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter'>
                      <CountUp
                        duration={TIMER_DURATION}
                        end={MAX_NUMBER_OF_AWARDS}
                        enableScrollSpy
                      />
                    </span>
                    +
                  </h3>
                  <p>Awards winning</p>
                </div>
              </div>
              <div className='grid'>
                <div className='info'>
                  <h3>
                    <span className='counter'>
                      <CountUp
                        duration={TIMER_DURATION}
                        end={MAX_PERCENTAGE_OF_HAPPY_CLIENTS}
                        enableScrollSpy
                      />
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
