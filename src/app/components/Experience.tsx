import React from 'react';
import SkillTag from './SkillTag';
import {
  certifications,
  education,
  location,
  roles,
  skillCategories,
  summary,
  workRights,
} from '../../data/experience';

function IconCabin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4 3 20h18L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 20 12 13l2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 21V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 5c2-1.5 4-1.5 6 0s4 1.5 6 0v8c-2 1.5-4 1.5-6 0s-4-1.5-6 0V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5a7 7 0 0 0-14 0C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconBackpack({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="8" width="14" height="13" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 8v3h6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9.5" y="14" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Waypoint({ role }: { role: (typeof roles)[number] }) {
  const isBreak = role.isBreak;

  return (
    <div className="relative py-6 md:py-8 md:even:pl-[calc(50%+2.5rem)] md:odd:pr-[calc(50%+2.5rem)]">
      <span
        className={`absolute left-4 top-6 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white shadow-sm md:left-1/2 md:top-8 ${
          isBreak ? 'border-accent-amber text-amber-600' : 'border-trail-pine text-trail-pine'
        }`}
      >
        {isBreak ? <IconTent className="h-5 w-5" /> : <IconCabin className="h-5 w-5" />}
      </span>

      <div
        className={`ml-12 rounded-2xl border bg-white/90 p-4 shadow-sm transition-transform duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-md sm:p-5 md:ml-0 ${
          isBreak ? '-rotate-1 border-dashed border-accent-amber/50' : 'border-trail-ice'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-trail-path/40 bg-trail-path/10 px-2 py-0.5 text-[11px] font-semibold text-trail-pine">
            {role.period}
          </span>
          {role.location && (
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
              <IconPin className="h-3 w-3" /> {role.location}
            </span>
          )}
        </div>
        <h3
          className={`mt-2 text-base font-semibold sm:text-lg ${
            isBreak ? 'italic text-slate-600' : 'text-blue-950'
          }`}
        >
          {role.role}
        </h3>
        <p className="text-xs font-medium text-trail-pineLight">{role.company}</p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-slate-600">
              <span
                className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${isBreak ? 'bg-accent-amber' : 'bg-trail-path'}`}
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="mb-4 overflow-hidden rounded-3xl border border-trail-ice shadow-xl shadow-blue-100/50">
      <div className="relative bg-gradient-to-b from-sky-50 to-white px-4 pb-10 pt-10 sm:px-8 sm:pt-12">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-trail-pine">
          <IconFlag className="h-4 w-4" /> experience
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          8+ years, across 3 countries.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-trail-ice bg-white px-3 py-1 text-xs font-medium text-blue-900">
            <IconPin className="h-3.5 w-3.5 text-trail-pine" /> {location}
          </span>
          <span className="rounded-full border border-trail-ice bg-white px-3 py-1 text-xs font-medium text-blue-900">
            {workRights}
          </span>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-0 border-l-2 border-dashed border-trail-path/60 md:left-1/2"
          />
          {roles.map((role) => (
            <Waypoint key={`${role.company}-${role.period}`} role={role} />
          ))}
        </div>

        <div className="mt-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-trail-pine">
            <IconBackpack className="h-4 w-4" /> skills &amp; tools
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {skillCategories.map((category) => (
              <div key={category.label} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <span className="w-40 flex-shrink-0 text-xs font-medium text-slate-500">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} dense />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-trail-ice pt-6 text-xs sm:flex-row sm:justify-between">
          <div>
            <p className="mb-2 font-semibold uppercase tracking-wider text-trail-pine">
              Certifications
            </p>
            <ul className="flex flex-col gap-1 text-slate-600">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div className="sm:text-right">
            <p className="mb-2 font-semibold uppercase tracking-wider text-trail-pine">
              Education
            </p>
            <p className="text-slate-600">
              {education.degree}, {education.institution} ({education.period})
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-20 bg-gradient-to-b from-white to-editor-bg">
        <p className="absolute inset-x-0 bottom-3 text-center text-xs font-medium text-slate-400">
          ↓ projects below ↓
        </p>
      </div>
    </div>
  );
}

export default Experience;
