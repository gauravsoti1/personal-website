import React from "react";

type Props = {
  skill: string;
  dense?: boolean;
};

function SkillTag({ skill, dense = false }: Props) {
  const sizeClasses = dense ? "px-1.5 text-[0.625rem]" : "px-2.5 py-0.5 text-xs";

  return (
    <span
      className={`${sizeClasses} rounded bg-blue-100 font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300`}
    >
      {skill}
    </span>
  );
}
export default SkillTag;
