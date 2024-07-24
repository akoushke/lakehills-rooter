import type { Metadata } from 'next';
import type { Viewport } from 'next';
import '../styles/main.scss';

// inject jquery globally

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'LakeHills Rooter',
  description: 'Sewer & Drain Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
