import React from "react";
import Card from "./Card";
import Image from "next/image";
import SkillTag from "./SkillTag";
import { ProjectType as ProjectProps } from "../../data/projects";

function Project({ img, title, description, skills }: ProjectProps) {
  return (
    <Card>
      <div className="relative aspect-video">
        <Image src={img} fill alt={`image of ${title}`} />
      </div>
      <h2 className="text-lg font-medium mt-2">{title}</h2>
      <h6 className="text-sm">{description}</h6>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </Card>
  );
}

function AddingMore() {
  return (
    <Card>
      <div className="relative aspect-video  flex justify-center items-center">
        <h6 className="text-lg">Adding more soon ...</h6>
      </div>
      <h2 className="text-lg font-medium mt-2">Preparing Content</h2>
    </Card>
  );
}

function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
      <AddingMore />
    </div>
  );
}

export default Projects;
