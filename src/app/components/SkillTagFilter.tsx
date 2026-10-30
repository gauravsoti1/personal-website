import React from "react";

type Props = {
  skill: string;
  onClick: () => void;
  isSelected: boolean;
  count?: number;
};

function SkillTagFilter({ onClick, isSelected, skill, count }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`flex w-full items-center justify-between gap-2 rounded border px-2.5 py-1.5 font-mono text-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 lg:w-auto ${
        isSelected
          ? "border-amber-400 bg-amber-50 text-amber-700"
          : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600"
      }`}
    >
      <span>{skill}</span>
      {typeof count === "number" && (
        <span className={isSelected ? "text-amber-600/70" : "text-slate-400"}>
          {count}
        </span>
      )}
    </button>
  );
}

export default SkillTagFilter;
