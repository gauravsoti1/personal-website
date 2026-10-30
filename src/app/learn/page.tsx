import React from "react";
import { Metadata } from "next";
import "./index.css";
import { getQuestionsData } from "@/lib/questions";
import QuestionAnswerFilterView from "./QuestionAnswerFilterView";

export const metadata: Metadata = {
  title: "Things I've learned",
  description:
    "A running log of questions Gaurav Sobti has actually had to answer on the job, and how he answered them.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    type: "website",
    url: "/learn",
    title: "Things I've learned | Gaurav Sobti",
    description:
      "A running log of questions Gaurav Sobti has actually had to answer on the job, and how he answered them.",
  },
};

function Learn() {
  const questionAnswersData = getQuestionsData();
  const allTags = Array.from(
    questionAnswersData.reduce((tagsSet, currentQA) => {
      currentQA.tags?.map((tag) => tagsSet.add(tag));
      return tagsSet;
    }, new Set<string>()),
  ).sort((a, b) => a.localeCompare(b));
  return (
    <section className="mx-auto p-8 lg:max-w-6xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl">
          Things I&apos;ve learned
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          The best way to learn is through experience, a running log of
          questions I&apos;ve actually had to answer, and how I answered them.
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
