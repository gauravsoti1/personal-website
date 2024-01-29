import { QA } from "@/data/qa";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const notesCwd = path.join(process.cwd(), "NOTES.md");
console.log("notesCwd", notesCwd);

export type QuestionType = {
  content: string;
};
export const getQuestionsData = (): QA[] => {
  const notesFile = fs.readFileSync(notesCwd, "utf-8");
  const matterResult = matter(notesFile);
  const { content } = matterResult;
  const parsedQuestions = content.matchAll(/Q\) (.*)/g);
  const parsedAnswers = content.matchAll(/A\)([\s\S]*?(?=\n.*?(?:Q\))))/gm);
  const result: QA[] = [],
    questions: string[] = [],
    answers: string[] = [];

  Array.from(parsedQuestions, (match) => questions.push(match[1]));
  Array.from(parsedAnswers, (match) => answers.push(match[1]));
  questions.map((question) => result.push({ question, answer: "" }));
  result.forEach((object, index) => (object.answer = answers[index]?.trim()));
  return result;
};
