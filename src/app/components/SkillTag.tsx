import React from "react";

type Props = {
  skill: string;
  color?: string;
};
function SkillTag({ skill, color = "bg-blue-100" }: Props) {
  return (
    <span
      className={`${color} text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
    >
      {skill}
    </span>
  );
}

export default SkillTag;
