'use client';

import Footer from '@/widgets/footer';
import Header from '@/widgets/header';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import Preloader from '@/widgets/preloader';
import { useRouter, usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const nodeRef = useRef(null);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const slug = usePathname();

  useEffect(() => {
    setShow(true);
  }, [slug]);

  return (
    <>
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={500}
        classNames='layout'
        unmountOnExit
      >
        <main ref={nodeRef}>
          <Header slug={slug.replace('/', '')} />
          {children}
          <Footer />
        </main>
      </CSSTransition>
      {!show && <Preloader />}
    </>
  );
}
