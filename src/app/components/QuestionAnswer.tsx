"use client";
import { QA } from "@/data/qa";
import React, { useState } from "react";
import Markdown from "react-markdown";
import SkillTag from "./SkillTag";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
// import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

// SyntaxHighlighter.registerLanguage("jsx", jsx);
// SyntaxHighlighter.registerLanguage("tsx", tsx);
// SyntaxHighlighter.registerLanguage("typescript", typescript);

function QuestionAnswer({ questionAnswer }: { questionAnswer: QA }) {
  const [isAnswerVisible, setAnswerVisibility] = useState(false);
  return (
    <div className="border-b border-blue-900 pb-4 mb-4">
      <div className="flex gap-2 items-center flex-wrap">
        {questionAnswer.tags?.map((tag, index) => (
          <SkillTag dense={true} key={index} skill={tag} />
        ))}
      </div>
      <div className="font-medium ">
        <Markdown className="text-lg">{questionAnswer.question}</Markdown>{" "}
      </div>

      <button
        className="text-blue-700"
        onClick={() => setAnswerVisibility((isVisible) => !isVisible)}
      >
        {isAnswerVisible ? "Hide Answer" : "Show Answer"}
      </button>
      <Markdown
        className={`${!isAnswerVisible && "hidden"} `}
        remarkPlugins={[remarkGfm]}
        components={{
          // @ts-ignore
          code(props) {
            // eslint-disable-next-line no-unused-vars
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              // @ts-ignore
              <SyntaxHighlighter {...rest} PreTag="div" language={match[1]}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {questionAnswer.answer}
      </Markdown>
    </div>
  );
}

export default QuestionAnswer;
