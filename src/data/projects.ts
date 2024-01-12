export type ProjectType = {
  img: string;
  title: string;
  description: string;
  skills: string[];
};

const projects: ProjectType[] = [
  {
    img: "/sanjeevani-ui.gif",
    title: "Sanjeevani",
    description: "A hospital website using nextjs",
    skills: ["Next JS", "Material UI"],
  },
  {
    img: "/sanjeevani-cms.gif",
    title: "Sanjeevani-cms",
    description: "A cms system using strapi",
    skills: ["strapi", "cms", "api"],
  },
];

export default projects;
