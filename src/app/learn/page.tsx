import React from 'react';
import './index.css';
import { getQuestionsData } from '@/lib/questions';
import QuestionAnswerFilterView from './QuestionAnswerFilterView';

function Learn() {
  const questionAnswersData = getQuestionsData();
  const allTags = Array.from(
    questionAnswersData.reduce((tagsSet, currentQA) => {
      currentQA.tags?.map((tag) => tagsSet.add(tag));
      return tagsSet;
    }, new Set<string>()),
  ).sort((a, b) => a.localeCompare(b));
  return (
    <section className="lg:max-w-6xl mx-auto p-8 ">
      <div className="mb-12">
        <h1 className="text-6xl">Learn</h1>
        <p className="text-sm">
          Best way to learn is through experience oritented questions and
          answers
        </p>
      </div>
      <QuestionAnswerFilterView
        allTags={allTags}
        questionAnswersData={questionAnswersData}
      />
    </section>
  );
}

export default Learn;
