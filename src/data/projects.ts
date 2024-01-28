export type ProjectType = {
  img: string;
  title: string;
  description: string;
  skills: string[];
  codeLink: string;
};

const projects: ProjectType[] = [
  {
    img: "/sanjeevani-ui.gif",
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
    img: "/sanjeevani-cms.gif",
    title: "Sanjeevani-cms",
    description: "A cms system using strapi",
    skills: ["strapi", "cms", "api", "aws"],
    codeLink: "https://github.com/gauravsoti1/sanjeevani-cms",
  },
];

export default projects;
