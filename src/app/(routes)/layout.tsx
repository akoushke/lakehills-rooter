'use client';

import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import Preloader from '@/widgets/preloader';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const nodeRef = useRef(null);
  const [Loading, setLoading] = useState(false);
  const [enableOverlay, setEnableOverlay] = useState(false);
  const slug = usePathname();

  useEffect(() => {
    setLoading(true);
  }, [slug]);

  return (
    <>
      <CSSTransition
        in={Loading}
        nodeRef={nodeRef}
        timeout={500}
        classNames='layout'
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={`page-wrapper ${enableOverlay ? 'body-overlay' : ''}`}
        >
          <Header
            slug={slug.replace('/', '')}
            setEnableOverlay={setEnableOverlay}
          />
          {children}
          <Footer />
        </div>
      </CSSTransition>
      {!Loading && <Preloader />}
    </>
  );
}
