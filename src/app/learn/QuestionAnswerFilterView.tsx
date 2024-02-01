"use client";
import { QA } from "@/data/qa";
import React, { useMemo, useState } from "react";
import QuestionAnswer from "../components/QuestionAnswer";
import SkillTagFilter from "../components/SkillTagFilter";
import { List } from "immutable";

type Props = {
  allTags: string[];
  questionAnswersData: QA[];
};

function QuestionAnswerFilterView({ allTags, questionAnswersData }: Props) {
  const [selectedTags, setSelectedTags] = useState(
    List<boolean>(new Array(allTags.length).fill(false))
  );
  const onTagClick = (index: number) => {
    setSelectedTags((selectedTags) =>
      selectedTags.set(index, !selectedTags.get(index))
    );
  };

  const filteredData = useMemo(() => {
    if (selectedTags.filter((tag) => tag === true).size === 0)
      return [...questionAnswersData];
    const selectedTagNames = allTags.filter((_, index) =>
      selectedTags.get(index)
    );

    return questionAnswersData.filter(({ tags }) =>
      selectedTagNames.some((selectedTag) => tags?.includes(selectedTag))
    );
  }, [selectedTags, allTags, questionAnswersData]);

  return (
    <div className="mt-4">
      <div className="flex gap-2 my-4">
        {allTags.map((tag, index) => (
          <SkillTagFilter
            isSelected={selectedTags.get(index)!}
            key={index}
            skill={tag}
            onClick={() => onTagClick(index)}
          />
        ))}
      </div>
      {filteredData.map((qa, index) => (
        <QuestionAnswer key={index} questionAnswer={qa} />
      ))}
    </div>
  );
}

export default QuestionAnswerFilterView;
