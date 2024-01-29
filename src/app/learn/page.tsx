import React from "react";
import QuestionAnswer from "../components/QuestionAnswer";
import "./index.css";
import { getQuestionsData } from "@/lib/questions";

function Learn() {
  const questionAnswersData = getQuestionsData();
  return (
    <section className="lg:max-w-6xl mx-auto p-8 ">
      <div className="mb-12">
        <h1 className="text-6xl">Learn</h1>
        <p className="text-sm">
          Best way to learn is through questions and answers
        </p>
      </div>
      <div className="mt-4">
        {questionAnswersData.map((qa, index) => (
          <QuestionAnswer key={index} questionAnswer={qa} />
        ))}
      </div>
    </section>
  );
}

export default Learn;
