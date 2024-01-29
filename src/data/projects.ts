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
];

export default projects;
