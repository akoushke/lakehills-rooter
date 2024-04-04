'use client';

import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import Preloader from '@/widgets/preloader';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={700}
        classNames='layout'
        unmountOnExit
      >
        <main ref={nodeRef}>
          <Header />
          {children}
          <Footer />
        </main>
      </CSSTransition>
      {!show && <Preloader />}
    </>
  );
}
