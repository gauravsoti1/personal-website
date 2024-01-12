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
      <div className="mt-2">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </Card>
  );
}

function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}

export default Projects;
