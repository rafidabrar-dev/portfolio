// All page content lives here. Edit this file to change the site; the components only render it.

export const site = {
  name: 'Rafid Abrar',
  title: 'Rafid Abrar, finance graduate and researcher in Dhaka',
  description:
    'Rafid Abrar is a finance graduate and researcher in Dhaka working on financial modeling, corporate finance, econometric research and financial inclusion.',
  // Shown in link previews (WhatsApp, Facebook, LinkedIn): kept short so it is not cut off.
  shareDescription:
    'Finance graduate and researcher in Dhaka. Financial modeling, corporate finance, econometric research and financial inclusion.',
  email: 'mailtorafidabrar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rafid-abrar/',
  facebook: 'https://www.facebook.com/rafidabrar.bd/',
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

// Home-page sections use "/#id" so the links also work from /education and /contact.
export const nav: { id: string; href: string; label: string; short: string; icon: IconName }[] = [
  { id: 'top', href: '/', label: 'Home', short: 'Home', icon: 'home' },
  { id: 'about', href: '/#about', label: 'About', short: 'About', icon: 'about' },
  { id: 'experience', href: '/#experience', label: 'Experience', short: 'Work', icon: 'work' },
  { id: 'work', href: '/#work', label: 'Projects', short: 'Projects', icon: 'projects' },
  { id: 'education', href: '/education', label: 'Education', short: 'Study', icon: 'education' },
  { id: 'contact', href: '/contact', label: 'Contact', short: 'Contact', icon: 'contact' },
];

export const olympiad = {
  heading: 'Leading the Economics Olympiad.',
  lead: 'General Secretary of the Bangladesh Economics Olympiad, on its executive committee.',
  committeeUrl: 'https://ecolympbd.org/about-us/people/',
  photos: [
    {
      src: '/china_econolm.webp',
      width: 3994,
      height: 2663,
      alt: 'The Bangladesh delegation on stage in Shenzhen, holding Bangladesh flags',
      caption: 'Leading the Bangladesh Delegation at the International Economics Olympiad 2026 in Shenzhen, China.',
    },
    {
      src: '/bd-econ-olmp.webp',
      width: 4032,
      height: 3024,
      alt: 'Rafid Abrar speaking at a podium in front of the Bangladesh Economics Olympiad 2026 screen',
      caption:
        'As part of the nationwide outreach for the Bangladesh Economics Olympiad 2026, leading the Student Activation Program at Presidency University.',
    },
  ],
  news: [
    {
      title: 'Bangladeshi prodigy shines bright at International Economics Olympiad 2024, Hong Kong',
      source: 'The Business Standard',
      date: '31 July 2024',
      url: 'https://www.tbsnews.net/economy/corporates/bangladeshi-prodigy-shines-bright-international-economics-olympiad-2024-hong-kong',
    },
    {
      title: 'Bangladesh Economics Olympiad 2023 National Team Selection Camp commences',
      source: 'The Business Standard',
      date: '24 June 2023',
      url: 'https://www.tbsnews.net/economy/corporates/bangladesh-economics-olympiad-2023-national-team-selection-camp-commences-655282',
    },
  ],
  press: {
    heading: 'On national television.',
    body: 'Representing the Bangladesh Economics Olympiad on BTV, the national television of Bangladesh.',
    url: 'https://www.facebook.com/reel/712353808579980',
  },
};

export const cfaCredentialUrl = 'https://credentials.cfainstitute.org/9acac28d-9466-41ad-a7a0-1c6f29bc9b62';

export const educationPage = {
  title: 'Education',
  lead: 'My academic journey and qualifications.',
  entries: [
    {
      id: 'mba',
      image: '/education/university.webp',
      imageAlt: 'Bangladesh University of Professionals campus, with academic buildings behind a lake',
      mark: 'BUP',
      title: 'Bangladesh University of Professionals',
      institution: 'MBA, Finance and Banking',
      period: 'Expected March 2027',
      current: true,
      description:
        'Currently pursuing an MBA in Finance and Banking at BUP, building on the BBA and on research and teaching work at the university.',
      website: 'https://bup.edu.bd',
    },
    {
      id: 'cfa',
      mark: 'CFA',
      title: 'CFA Institute',
      institution: 'Chartered Financial Analyst (CFA) Level I',
      period: 'Exam passed',
      image: '/education/cfa_1.webp',
      imageAlt: 'CFA Program Level I digital badge from CFA Institute',
      imageFit: 'contain',
      description: 'Passed the Level I exam of the CFA Program. The digital credential can be verified with CFA Institute.',
      website: cfaCredentialUrl,
      linkLabel: 'Verify the credential',
    },
    {
      id: 'bba',
      extraLink: { label: 'BUP alumni profile', url: 'https://alumni.bup.edu.bd/student-profile/1080' },
      image: '/education/university.webp',
      imageAlt: 'Bangladesh University of Professionals campus, with academic buildings behind a lake',
      mark: 'BUP',
      title: 'Bangladesh University of Professionals',
      institution: 'BBA, Finance and Banking',
      period: '2021 to 2025',
      description:
        'Completed the BBA in Finance and Banking with a CGPA of 4.00, building the base in financial modeling, valuation and econometric research.',
      website: 'https://bup.edu.bd',
    },
    {
      id: 'hsc',
      image: '/education/college.webp',
      imageAlt: 'The gate of Notre Dame College, Dhaka',
      mark: 'NDC',
      title: 'Notre Dame College',
      institution: 'Higher Secondary Certificate (HSC), Science',
      period: '2018 to 2020',
      description: 'Completed the Higher Secondary Certificate in the Science group.',
      website: 'https://ndc.edu.bd',
    },
    {
      id: 'ssc',
      image: '/education/govt-lab-rajshahi.webp',
      imageAlt: 'Govt. Laboratory High School, Rajshahi, seen across its lawn',
      mark: 'GLHS',
      title: 'Govt. Laboratory High School, Rajshahi',
      institution: 'Secondary School Certificate (SSC), Science',
      period: '2013 to 2018',
      description: 'Completed the Secondary School Certificate in the Science group in Rajshahi.',
      credit: {
        text: 'Photo: Tawsif.web',
        url: 'https://commons.wikimedia.org/wiki/File:Govt._Laboratory_High_School,_Rajshahi_-_Academic_Building.png',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
    },
  ],
} as const;

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

export const credentials: { note: string; title: string; tone: 'yellow' | 'ink'; url?: string }[] = [
  { note: 'Passed', title: 'CFA Level I', tone: 'yellow', url: cfaCredentialUrl },
];

export const contact = {
  heading: 'Let’s talk finance.',
  lead: 'Open to conversations on financial innovation, research and sustainable market development.',
};
