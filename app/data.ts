// All page content lives here. Edit this file to change the site; the components only render it.

export const site = {
  name: 'Rafid Abrar',
  title: 'Rafid Abrar, finance graduate and researcher in Dhaka',
  description:
    'Rafid Abrar is a finance graduate and researcher in Dhaka working on financial modeling, corporate finance, econometric research and financial inclusion.',
  email: 'mailtorafidabrar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rafid-abrar/',
  // Leave empty until the CV exists. Put the PDF in /public and set e.g. '/Rafid-Abrar-CV.pdf'.
  cvUrl: '',
  location: 'Dhaka, Bangladesh',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
} as const;

export type IconName = 'home' | 'about' | 'work' | 'projects' | 'education' | 'contact';

export const nav: { id: string; href: string; label: string; short: string; icon: IconName }[] = [
  { id: 'top', href: '#top', label: 'Home', short: 'Home', icon: 'home' },
  { id: 'about', href: '#about', label: 'About', short: 'About', icon: 'about' },
  { id: 'experience', href: '#experience', label: 'Experience', short: 'Work', icon: 'work' },
  { id: 'work', href: '#work', label: 'Projects', short: 'Projects', icon: 'projects' },
  { id: 'education', href: '#education', label: 'Education', short: 'Study', icon: 'education' },
  { id: 'contact', href: '#contact', label: 'Contact', short: 'Contact', icon: 'contact' },
];

export const hero = {
  lead: 'Finance graduate and researcher in Dhaka, focused on',
  highlight: 'private sector growth',
};

export const about = {
  heading: 'Finance for the real economy.',
  lead: 'Private sector development, industrial growth and financial inclusion, approached with models and data.',
  cells: [
    { note: 'CGPA in the BBA at BUP', big: '4.00' },
    { note: 'Chartered Financial Analyst', word: 'CFA Level I passed' },
  ],
};

export type TimelineItem = {
  title: string;
  body: string;
  when: string;
  year?: string;
  current?: boolean;
};

export const experience: TimelineItem[] = [
  {
    year: '2026',
    title: 'Teaching Assistant',
    body: 'Bangladesh University of Professionals (BUP). Supporting finance and banking coursework.',
    when: 'April 2026 to present',
    current: true,
  },
  {
    year: '2025',
    title: 'Equity Research Intern',
    body: 'UCB Stock Brokerage Limited. Company and sector research for the brokerage.',
    when: 'August to October 2025',
  },
  {
    year: '2019',
    title: 'General Secretary',
    body: 'Bangladesh Economics Olympiad. Leading operations and a large stakeholder network.',
    when: 'January 2019 to present',
    current: true,
  },
  {
    year: '2018',
    title: 'Co-Founder',
    body: 'Arenaboard Online Judge. An early-stage online platform, built and launched.',
    when: 'April 2018 to June 2019',
  },
];

export const focus = {
  heading: 'Models, research, ventures.',
  items: [
    { title: 'Financial analysis and strategy', body: 'Financial modeling, project valuation and risk sensitivity analysis.' },
    { title: 'Industrial support and inclusion', body: 'Private sector development frameworks, financial inclusion strategies and alternative investment structures.' },
    { title: 'Academic and market research', body: 'Econometric modeling in Stata and SPSS, macro-variable analysis and data-driven research design.' },
    { title: 'Venture architecture and innovation', body: 'Business model innovation, startup operations and early-stage growth strategy.' },
  ],
};

export const projects = {
  heading: 'Projects, filling in.',
  lead: 'Sample entries stand in here until the real projects are added.',
  items: [
    { title: 'Financial modeling and valuation', body: 'Forecasting, valuation and risk sensitivity analysis.' },
    { title: 'Econometric research', body: 'Macro-variable analysis in Stata and SPSS.' },
    { title: 'Financial inclusion framework', body: 'Private sector development and inclusive financial products.' },
  ],
};

export const education: TimelineItem[] = [
  {
    title: 'MBA, Finance and Banking',
    body: 'Bangladesh University of Professionals',
    when: 'Expected March 2027',
    current: true,
  },
  { title: 'BBA, Finance and Banking', body: 'Bangladesh University of Professionals', when: '2021 to 2025' },
  { title: 'HSC, Science', body: 'Notre Dame College', when: '2018 to 2020' },
  { title: 'SSC, Science', body: 'Govt. Laboratory High School, Rajshahi', when: '2013 to 2018' },
];

export const credentials = [
  { note: 'Passed', title: 'CFA Level I', tone: 'yellow' },
  { note: 'Graduate of', title: 'Social and Green Impact Incubation Bootcamp', tone: 'ink' },
] as const;

export const contact = {
  heading: 'Let’s talk finance.',
  lead: 'Open to conversations on financial innovation, research and sustainable market development.',
};
