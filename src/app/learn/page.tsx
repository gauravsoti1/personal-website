import QA from "@/data/qa";
import React from "react";
import Markdown from "react-markdown";

function Learn() {
  return (
    <section className="p-8">
      <h1 className="text-xl">Learn</h1>
      <p className="text-sm">
        Best way to learn is through questions and answers
      </p>

      <div className="mt-4">
        {QA.map(({ question, answer }, index) => (
          <div key={index}>
            <div className="font-medium">
              <Markdown>{question}</Markdown>{" "}
            </div>
            <p>Show Answer</p>
            <Markdown>{answer}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Learn;
