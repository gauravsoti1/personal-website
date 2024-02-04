export type ProjectType = {
  media: {
    src: string;
    type: 'video' | 'image';
  };
  title: string;
  description: string;
  skills: string[];
  codeLink: string;
};

const projects: ProjectType[] = [
  {
    media: {
      src: '/sanjeevani-ui.webm',
      type: 'video',
    },
    title: 'Sanjeevani',
    description:
      'A hospital website using nextjs. Single handedly executed project covering design(figma), development, testing(react-testing-library), deployment and maintenance. ',
    skills: [
      'Next JS',
      'Material UI',
      'figma',
      'react',
      'javascript',
      'aws',
      'react testing library',
      'cypress',
    ],
    codeLink: 'https://github.com/gauravsoti1/sanjeevani',
  },
  {
    media: {
      src: '/graphql-typescript-prisma.png',
      type: 'image',
    },
    title: 'Graphql typescript prisma',
    description:
      'An end to end graphql typesafety app. Server built in nodejs using graphql, graphql-yoga, pathos, prisma, postgres graphql-scalar types. Frontend using: react, graphql-codegen, urql',
    skills: [
      'graphql',
      'typescript',
      'graphql-codegen',
      'graphql-yoga',
      'pathos',
      'prisma',
      'postgres',
    ],
    codeLink: 'https://github.com/gauravsoti1/prisma-graphql-typescript-server',
  },
  {
    media: {
      src: '/sanjeevani-cms.webm',
      type: 'video',
    },
    title: 'Sanjeevani-cms',
    description: 'A cms system using strapi',
    skills: ['strapi', 'cms', 'api', 'aws'],
    codeLink: 'https://github.com/gauravsoti1/sanjeevani-cms',
  },
  {
    media: {
      src: '/redux-persist-authentication.webm',
      type: 'video',
    },
    title: 'Redux Persist Authentication',
    description:
      'A project which makes use of redux persist to mimic localStorage as database and session storage for authentication',
    skills: ['react', 'typescript', 'redux-toolkit', 'redux-persist'],
    codeLink:
      'https://github.com/gauravsoti1/redux-persist-authentication-example',
  },
  {
    media: {
      src: '/dsalgomaster.webm',
      type: 'video',
    },
    title: 'Datastructures and Algorithms',
    description:
      'All the notes and practice of data structures and algorithms from different sources like books, udemy. Also, maths from Euler',
    skills: [
      'data structures',
      'algorithms',
      'javascript',
      'euler',
      'leetcode',
      'udemy',
      'cracking the coding interview',
      'elements of programming',
      'freecodecamp',
    ],
    codeLink: 'https://github.com/gauravsoti1/dsalgomaster',
  },
];

export default projects;
