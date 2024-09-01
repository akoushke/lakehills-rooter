import FAQ from '@/widgets/faq';
import About from '@/widgets/about';
import CTA from '@/widgets/cta';
import Service from '@/widgets/service';
import Review from '@/widgets/review';
import PageHeading from '@/widgets/page-heading';
import Custom404 from '@/widgets/404';
import ServiceDetails from '@/widgets/service-details';
import Contact from '@/widgets/contact';
import env from '@/lib/environments';

// app/[slug]/page.js

export async function generateStaticParams() {
  // Define the slugs that should have statically generated pages
  const slugs = [
    env.isDev ? 'about' : `${env.basePath}/about`,
    env.isDev ? 'faq' : `${env.basePath}/faq`,
    env.isDev ? 'services' : `${env.basePath}/services`,
    env.isDev ? 'service-details' : `${env.basePath}/service-details`,
    env.isDev ? 'contact' : `${env.basePath}/contact`,
    env.isDev ? 'reviews' : `${env.basePath}/reviews`,
  ];

  return slugs.map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const pages = new Map([
    ['about', <About key='about' />],
    ['faq', <FAQ key='faq' />],
    ['services', <Service key='services' />],
    ['service-details', <ServiceDetails key='service-details' />],
    ['contact', <Contact key='contact' />],
  ]);

  const isReview = params.slug === 'reviews';

  return (
    <>
      <PageHeading pageTitle={params.slug.replace('-', ' ')} />
      {!isReview ? pages.get(params.slug) || <Custom404 /> : null}
      {!isReview && <CTA />}
      <Review />
    </>
  );
}
