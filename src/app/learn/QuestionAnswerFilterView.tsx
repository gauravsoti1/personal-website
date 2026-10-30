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
    List<boolean>(new Array(allTags.length).fill(false)),
  );
  const onTagClick = (index: number) => {
    setSelectedTags((selectedTags) =>
      selectedTags.set(index, !selectedTags.get(index)),
    );
  };

  const tagCounts = useMemo(
    () =>
      allTags.map(
        (tag) =>
          questionAnswersData.filter(({ tags }) => tags?.includes(tag))
            .length,
      ),
    [allTags, questionAnswersData],
  );

  const filteredData = useMemo(() => {
    if (selectedTags.filter((tag) => tag === true).size === 0)
      return [...questionAnswersData];
    const selectedTagNames = allTags.filter((_, index) =>
      selectedTags.get(index),
    );

    return questionAnswersData.filter(({ tags }) =>
      selectedTagNames.some((selectedTag) => tags?.includes(selectedTag)),
    );
  }, [selectedTags, allTags, questionAnswersData]);

  return (
    <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-start">
      <aside className="lg:sticky lg:top-8 lg:w-56 lg:flex-none">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          Filter · {filteredData.length}/{questionAnswersData.length}
        </div>
        <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
          {allTags.map((tag, index) => (
            <SkillTagFilter
              isSelected={selectedTags.get(index)!}
              key={index}
              skill={tag}
              count={tagCounts[index]}
              onClick={() => onTagClick(index)}
            />
          ))}
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        {filteredData.map((qa, index) => (
          <QuestionAnswer key={index} index={index} questionAnswer={qa} />
        ))}
      </div>
    </div>
  );
}

export default QuestionAnswerFilterView;
