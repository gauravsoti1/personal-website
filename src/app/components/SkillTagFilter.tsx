import React from "react";

type Props = {
  skill: string;
  onClick: () => void;
  isSelected: boolean;
};

function SkillTagFilter({ onClick, isSelected, skill }: Props) {
  return (
    <span
      onClick={onClick}
      className={` ${
        isSelected ? "bg-red-500 text-white" : "bg-red-100 text-red-500"
      }  text-xs font-medium px-2.5 py-1 rounded cursor-pointer`}
    >
      {skill}
    </span>
  );
}

export default SkillTagFilter;
