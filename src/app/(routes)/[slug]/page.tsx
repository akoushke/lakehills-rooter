import FAQ from '@/widgets/faq';
import About from '@/widgets/about';
import CTA from '@/widgets/cta';
import Service from '@/widgets/service';
import Review from '@/widgets/review';
import PageHeading from '@/widgets/page-heading';
import Custom404 from '@/widgets/404';
import ServiceDetails from '@/widgets/service-details';
import Gallery from '@/widgets/gallery';
import Contact from '@/widgets/contact';

export default function Page({ params }: { params: { slug: string } }) {
  const pages = new Map([
    ['about', <About key='about' />],
    ['faq', <FAQ key='faq' />],
    ['services', <Service key='services' />],
    ['service-details', <ServiceDetails key='service-details' />],
    ['gallery', <Gallery key='gallery' />],
    ['contact', <Contact key='contact' />],
  ]);

  const isReview = params.slug === 'reviews';

  return (
    <>
      <PageHeading pageTitle={params.slug} />
      {!isReview ? pages.get(params.slug) || <Custom404 /> : null}
      {!isReview && <CTA />}
      <Review />
    </>
  );
}
