import React from "react";

type Props = {
  skill: string;
  color?: string;
  dense?: boolean;
};
function SkillTag({ skill, color = "bg-blue-100", dense = false }: Props) {
  return (
    <span
      className={`${color} ${
        dense ? "px-1.5 text-[0.625rem] " : "px-2.5 text-xs"
      } text-blue-800  py-0.5 font-medium  rounded dark:bg-blue-900 dark:text-blue-300`}
    >
      {skill}
    </span>
  );
}

export default SkillTag;
