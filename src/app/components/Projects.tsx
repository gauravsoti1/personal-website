import React from 'react';
import Card from './Card';
import SkillTag from './SkillTag';
import { ProjectType as ProjectProps } from '../../data/projects';
import Link from 'next/link';
import ProjectVideo from './ProjectVideo';
import ProjectImage from './ProjectImage';

function Project({
  media,
  title,
  description,
  skills,
  codeLink,
}: ProjectProps) {
  return (
    <Card>
      {media.type === 'video' && <ProjectVideo src={media.src} />}
      {media.type === 'image' && <ProjectImage src={media.src} />}
      <h2 className="text-lg font-medium mt-2">
        {title}{' '}
        {codeLink && (
          <Link
            className="text-sm text-blue-950"
            target="_blank"
            href={codeLink}
          >
            {'('}
            <span className="underline">Code</span>
            {')'}
          </Link>
        )}
      </h2>
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
