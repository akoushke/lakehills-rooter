import { subscribe } from 'diagnostics_channel';
import { title } from 'process';

// eslint-disable-next-line import/no-anonymous-default-export
const CONTACT_EMAIL_ADDRESS = 'lakehills.rooter@gmail.com';
const CONTACT_PHONE_NUMBER = '(425)-952-9999';
const CONTACT_ADDRESS = '654 1st Ave, Bellevue, WA 98004';
const FACEBOOK_URL = '#';
const TWITTER_URL = '#';
const VIMEO_URL = '#';
const PINTEREST_URL = '#';
const INSTAGRAM_URL = '#';
const YOUTUBE_URL = '#';
const LINKEDIN_URL = '#';
const GOOGLE_PLUS_URL = '#';
const CAROUSEL = {
  title: 'Welcome to our website',
  subtitle: 'Our Features',
  body: 'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    {
      body: 'Top-rated Sewer & Drain Services: fast, reliable solutions for a worry-free home!',
      image: '/images/carousel/slide1.jpg',
    },
    {
      body: 'Reliable Sewer & Drain Services: Expert care for smooth, trouble-free plumbing!',
      image: '/images/carousel/slide2.jpg',
    },
    {
      body: 'Swift & Reliable Sewer & Drain Services — Expert solutions for hassle-free plumbing!',
      image: '/images/carousel/slide3.jpg',
    },
  ],
};
const FEATURES = [
  {
    icon: 'ti-settings',
    title: 'Who we are',
    body: 'Your trusted plumbing experts delivering reliable and exceptional service every time',
  },
  {
    icon: 'ti-user',
    title: 'What we do',
    body: ' Delivering comprehensive plumbing services ensuring your premises runs smoothly',
  },
  {
    icon: 'ti-thumb-up',
    title: 'Why Choose Us?',
    body: 'for our unmatched expertise, prompt and reliable service, and affordable rates',
  },
];
const ABOUT = {
  title: 'Reliable Plumbing Solutions',
  body: `At Lakehill Rooter, we are committed to delivering expert plumbing 
    services with a focus on reliability and excellence. Our skilled team handles 
    every job with precision, ensuring that your plumbing needs are met efficiently 
    and effectively. Whether you’re dealing with a minor issue or a major repair, 
    we provide top-notch solutions and exceptional service, giving you confidence 
    and peace of mind every time.`,
  image: '/images/about/girl.jpg',
  videoLink: 'https://www.youtube.com/watch?v=7e90gBu4pas',
};
const SERVICE = {
  subtitle: 'What we do',
  body: `At Lakehill Rooter, we provide expert plumbing, sewer and drain services,
        ensuring reliable and efficient solutions for your home or business.`,
  cards: [
    {
      icon: 'fa-wrench',
      title: 'Pluming',
      body: `We offer expert plumbing services including drain cleaning, 
            sewer repairs, water heater installations and repairs, 
            and emergency solutions to ensure reliable and efficient plumbing for your premise.`,
    },
    {
      icon: 'fa-tint',
      title: 'Sewer Services',
      body: `We offer provides expert sewer services, encompassing everything 
            from repairs and replacements to thorough cleaning and maintenance, ensuring 
            your sewer system operates flawlessly and efficiently.`,
    },
    {
      icon: 'ti-thumb-up',
      title: 'Drain Cleaning',
      body: `We provide exceptional drain cleaning services, utilizing advanced 
            techniques to efficiently clear clogs and blockages, restore optimal water flow, 
            and maintain the performance of your plumbing system.`,
    },
  ],
};
const CONTACT_US = {
  title: 'Bringing Over 15 Years of Plumbing Expertise',
  subtitle:
    'Bringing Over 15 Years of Expertise in Plumbing to Ensure Reliable Solutions for Your Home and Business',
};
const PORTFOLIO = {
  title: 'Our Projects',
  subtitle: 'Our work',
  body: 'View Our Extensive Portfolio of Successful Plumbing Projects',
  cards: [
    {
      icon: '/images/projects/residential.jpg',
      title: 'Residential',
      body: 'Explore our expertise in industrial plumbing solutions',
    },
    {
      icon: '/images/projects/commercial.jpg',
      title: 'Commercial',
      body: 'Discover our proven commercial plumbing solutions and projects',
    },
    {
      icon: '/images/projects/industrial.jpg',
      title: 'Industrial',
      body: 'Check out our comprehensive industrial plumbing projects and services',
    },
  ],
};
const FUN_FACT = {
  title: 'Fun Facts',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: '/images/fun-fact/plumbers.jpg',
  projects: 100,
  years: 10,
  awards: 55,
  clients: 100,
  time: 2,
};
const REVIEWS = {
  title: 'Our Reviews',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/images/review/1.jpg',
      name: 'John Doe',
      location: 'California',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};
const FOOTER = {
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  links: [
    {
      about: 'About Us',
      reviews: 'Reviews',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact Us',
    },
  ],
  newsletter: 'Subscribe to our newsletter',
};

export {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_PHONE_NUMBER,
  CONTACT_ADDRESS,
  FACEBOOK_URL,
  TWITTER_URL,
  VIMEO_URL,
  PINTEREST_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  LINKEDIN_URL,
  GOOGLE_PLUS_URL,
  CAROUSEL,
  FEATURES,
  ABOUT,
  SERVICE,
  CONTACT_US,
  PORTFOLIO,
  FUN_FACT,
  REVIEWS,
  FOOTER,
};
