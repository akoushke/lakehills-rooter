'use client';
import CountUp from 'react-countup';
import { FUN_FACT } from '@/lib/constants';
import './styles.scss';
import { useEffect, useState } from 'react';

type FactType = {
  title: string;
  body: string;
  image: string;
  projects: number;
  years: number;
  awards: number;
  clients: number;
  time: number;
};

export default function FunFact() {
  const [fact, setFact] = useState({} as FactType);

  useEffect(() => {
    setFact(FUN_FACT);
  }, []);

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
                        duration={fact.time}
                        end={fact.projects}
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
                        duration={fact.time}
                        end={fact.years}
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
                        duration={fact.time}
                        end={fact.awards}
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
                        duration={fact.time}
                        end={fact.clients}
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
