'use client';

import Footer from '@/widgets/footer';
import Header from '@/widgets/header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
