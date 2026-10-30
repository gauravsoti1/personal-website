export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  isBreak?: boolean;
};

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const summary =
  'Senior Fullstack Engineer with 8+ years of experience: YC-backed startup, design systems at scale, Melbourne Permanent Resident. Deep expertise in React, TypeScript, and design systems, with a track record of owning product decisions end-to-end across startups and enterprise scale-ups.';

export const location = 'Melbourne, Australia';
export const workRights = 'Permanent Resident';

export const roles: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer (Frontend)',
    company: 'EPAM Systems',
    location: 'Melbourne, Australia',
    period: 'Dec 2025 – Present',
    highlights: [
      'Owned features end-to-end across a B2B e-commerce platform: React storefront, Python/Django REST & GraphQL backend, Playwright E2E',
      'Drove platform-wide modernizations: REST→GraphQL migration and cross-flow unification of add-to-cart error handling, replacing inconsistent legacy patterns with a single maintainable one, regression-free',
      'Owned E2E and CI reliability, root-causing flaky Playwright tests (session-cookie, host-binding, Cloudflare cold-start challenges)',
    ],
  },
  {
    role: 'Career Break: Professional Development & Certifications',
    company: 'Self-directed',
    location: '',
    period: 'Aug 2024 – Dec 2025',
    highlights: [
      'Completed a 200-hour Yoga Protocol Instructor certification (Morarji Desai National Institute of Yoga) and a Permaculture Design Certificate (Aranya Agricultural Alternatives)',
      'Deliberately pursued structured skill development outside tech before returning to full-time roles',
    ],
    isBreak: true,
  },
  {
    role: 'Senior Software Developer (Frontend)',
    company: 'TCS',
    location: 'Melbourne, Australia',
    period: 'Apr 2024 – Aug 2024',
    highlights: [
      'Led development of a scalable banking platform, engineering modular reusable React components and optimising system performance',
      'Mentored junior developers through code reviews, establishing React best practices and engineering standards across the team',
    ],
  },
  {
    role: 'Senior Software Developer (Frontend, Contract)',
    company: 'Sportsbet',
    location: 'Melbourne, Australia',
    period: 'May 2023 – Sep 2023',
    highlights: [
      'Owned product design and engineering for an AWS Server Cost Saving tool from 0 to launch, driving a 50% increase in developer adoption through intuitive UX',
      'Led end-to-end product process: designed UI in Figma, gathered requirements from stakeholders, and built a React/TypeScript frontend with Material UI',
      'Established a comprehensive testing strategy achieving 85% code coverage using React Testing Library and Vitest',
      'Reduced bundle size by 25% through code splitting and lazy loading, improving overall application performance',
    ],
  },
  {
    role: 'Senior Software Developer (Frontend)',
    company: 'Xeneta',
    location: 'Oslo, Norway',
    period: 'Oct 2021 – Mar 2023',
    highlights: [
      'Led design system development with a team of 3, delivering 10+ production-ready React/TypeScript components used by 100+ engineers across the organisation',
      'Established a product-driven Storybook workflow with theme configuration, component documentation, and a design token system, improving cross-team collaboration',
      'Maintained 100% test coverage using Jest and RTL; monitored production via Sentry, resolving memory leaks and rendering performance issues',
      'Delivered 5 frontend architecture workshops on design systems, React performance, and testing strategies to upskill engineering teams',
    ],
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Mesh (YCombinator)',
    location: 'Gurgaon, India',
    period: 'Apr 2019 – Feb 2021',
    highlights: [
      'Single-handedly owned frontend product development from 0 to 100k active users, directly contributing to YC membership and Series A funding',
      'Designed complete product UX in Adobe XD, then built a responsive web app using React, Redux, TypeScript, and Styled Components',
      'Built a data-heavy analytics dashboard with interactive visualisations (heat maps, network graphs, pie charts) and implemented user retention funnels',
      'Shipped a cross-platform Flutter app (iOS/Android) in 2 months; hired and built the frontend team from scratch',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'POPxo & QuickCompany',
    location: '',
    period: 'May 2016 – Dec 2018',
    highlights: [
      'Contributed across multiple product verticals at POPxo (dating app, e-commerce, content CMS) and owned incorporation & trademark filing workflows at QuickCompany, building Ruby on Rails websites',
      'Reduced order processing time by 75% at QuickCompany (12 days to 3 days) by redesigning the workflow end-to-end',
      'Drove a 20% performance improvement at POPxo via GTMetrix/PageSpeed optimisation, cutting server costs by 10%',
      'Implemented SSR for a React PWA using Express and Webpack, growing organic traffic 2x through improved SEO',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'JavaScript (ES6+)', 'React Native', 'Flutter'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Ruby on Rails'],
  },
  {
    label: 'Design Systems',
    skills: [
      'Component Architecture',
      'Storybook',
      'Design Tokens',
      'Material UI',
      'Tailwind',
      'Styled Components',
    ],
  },
  {
    label: 'State & APIs',
    skills: ['Redux', 'React Query', 'Zustand', 'Context API', 'GraphQL', 'REST APIs'],
  },
  {
    label: 'Testing & Quality',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest', 'MSW', 'TDD'],
  },
  {
    label: 'Performance & DevOps',
    skills: [
      'Web Vitals',
      'Code Splitting',
      'SEO',
      'GitHub Actions',
      'CircleCI',
      'AWS',
    ],
  },
  {
    label: 'Product & Design',
    skills: ['Figma', 'Adobe XD', 'User Analytics', 'Agile/Scrum'],
  },
  {
    label: 'Additional',
    skills: ['Cursor AI', 'Accessibility (WCAG)', 'Sentry', 'PWA', 'Monorepos'],
  },
];

export const certifications = [
  'Microsoft Azure AI Associate Engineer (in progress, expected Apr 2026)',
  'Apollo GraphQL Developer – Associate',
  'JavaScript: The Advanced Concepts, Zero To Mastery Academy (2020)',
];

export const education = {
  degree: 'B.Tech in Information Technology',
  institution: 'GGSIPU',
  period: '2011 – 2015',
};
