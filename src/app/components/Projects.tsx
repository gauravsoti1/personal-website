import React from 'react';
import Link from 'next/link';
import SkillTag from './SkillTag';
import { ProjectType as ProjectProps } from '../../data/projects';
import ProjectVideo from './ProjectVideo';
import ProjectImage from './ProjectImage';

function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5a7 7 0 0 0-14 0C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const TAPE_COLORS = [
  'bg-sky-300/70',
  'bg-amber-300/70',
  'bg-rose-300/70',
  'bg-emerald-300/70',
  'bg-violet-300/70',
];

function ProjectPin({ project, index }: { project: ProjectProps; index: number }) {
  const { media, title, description, skills, codeLink } = project;
  const tape = TAPE_COLORS[index % TAPE_COLORS.length];

  return (
    <div className="group relative transition-transform duration-300 hover:-translate-y-1">

      <span
        aria-hidden="true"
        className={`absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-2 rounded-sm ${tape} shadow-sm`}
      />
      <div className="overflow-hidden rounded-lg border-8 border-white bg-white shadow-lg shadow-amber-900/10">
        {media.type === 'video' && <ProjectVideo src={media.src} />}
        {media.type === 'image' && (
          <ProjectImage src={media.src} alt={`${title} project screenshot`} />
        )}
        <div className="p-4">
          <h3 className="font-semibold text-blue-950">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <SkillTag key={skill} skill={skill} dense />
            ))}
          </div>
          <Link
            href={codeLink}
            target="_blank"
            className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-blue-600 underline-offset-2 hover:text-amber-600 hover:underline"
          >
            View code <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AddingMore() {
  return (
    <div className="rounded-lg border-8 border-dashed border-amber-200 bg-transparent p-4">
      <div className="flex aspect-video items-center justify-center text-center text-sm text-amber-700/70">
        More pinned up soon
      </div>
    </div>
  );
}

function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-b from-amber-50 via-orange-50/60 to-amber-50 p-4 shadow-xl shadow-amber-100/50 sm:p-8">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
        <IconPin className="h-4 w-4" /> base camp
      </p>
      <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
        Things I&apos;ve built along the way
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
        A few projects pinned up from the trip. Click through for the code.
      </p>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPin key={project.title} project={project} index={index} />
        ))}
        <AddingMore />
      </div>
    </div>
  );
}

export default Projects;
