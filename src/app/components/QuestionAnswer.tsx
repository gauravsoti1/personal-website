"use client";
import { QA } from "@/data/qa";
import React, { useState } from "react";
import Markdown from "react-markdown";
import SkillTag from "./SkillTag";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

function QuestionAnswer({
  questionAnswer,
  index,
}: {
  questionAnswer: QA;
  index: number;
}) {
  const [isAnswerVisible, setAnswerVisibility] = useState(false);
  const lineNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="flex gap-4 border-b border-slate-200 py-5 first:pt-0">
      <div
        aria-hidden
        className="select-none pt-0.5 font-mono text-xs text-slate-300"
      >
        {lineNumber}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          {questionAnswer.tags?.map((tag, tagIndex) => (
            <SkillTag dense={true} key={tagIndex} skill={tag} />
          ))}
        </div>

        <div className="mt-2 font-mono text-base font-medium text-blue-950">
          <Markdown>{questionAnswer.question}</Markdown>
        </div>

        <button
          type="button"
          className="mt-2 flex items-center gap-1.5 font-mono text-xs text-blue-600 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
          aria-expanded={isAnswerVisible}
          onClick={() => setAnswerVisibility((isVisible) => !isVisible)}
        >
          <span
            className={`inline-block transition-transform duration-150 ${
              isAnswerVisible ? "rotate-90" : ""
            }`}
          >
            ▸
          </span>
          {isAnswerVisible ? "Hide answer" : "Show answer"}
        </button>

        {isAnswerVisible && (
          <div className="mt-3 rounded border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                // @ts-ignore
                code(props) {
                  // eslint-disable-next-line no-unused-vars
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    // @ts-ignore
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      language={match[1]}
                      style={oneDark}
                    >
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
        )}
      </div>
    </div>
  );
}

export default QuestionAnswer;
