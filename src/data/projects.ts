export type ProjectType = {
  video: string;
  title: string;
  description: string;
  skills: string[];
  codeLink: string;
};

const projects: ProjectType[] = [
  {
    video: "/sanjeevani-ui.webm",
    title: "Sanjeevani",
    description:
      "A hospital website using nextjs. Single handedly executed project covering design(figma), development, testing(react-testing-library), deployment and maintenance. ",
    skills: [
      "Next JS",
      "Material UI",
      "figma",
      "react",
      "javascript",
      "aws",
      "react testing library",
      "cypress",
    ],
    codeLink: "https://github.com/gauravsoti1/sanjeevani",
  },
  {
    video: "/sanjeevani-cms.webm",
    title: "Sanjeevani-cms",
    description: "A cms system using strapi",
    skills: ["strapi", "cms", "api", "aws"],
    codeLink: "https://github.com/gauravsoti1/sanjeevani-cms",
  },
  {
    video: "/redux-persist-authentication.webm",
    title: "Redux Persist Authentication",
    description:
      "A project which makes use of redux persist to mimic localStorage as database and session storage for authentication",
    skills: ["react", "typescript", "redux-toolkit", "redux-persist"],
    codeLink:
      "https://github.com/gauravsoti1/redux-persist-authentication-example",
  },
  {
    video: "/dsalgomaster.webm",
    title: "Datastructures and Algorithms",
    description:
      "All the notes and practice of data structures and algorithms from different sources like books, udemy. Also, maths from Euler",
    skills: [
      "data structures",
      "algorithms",
      "javascript",
      "euler",
      "leetcode",
      "udemy",
      "cracking the coding interview",
      "elements of programming",
      "freecodecamp",
    ],
    codeLink: "https://github.com/gauravsoti1/dsalgomaster",
  },
];

export default projects;
