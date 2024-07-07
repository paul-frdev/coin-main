import { AnswerButton } from "./ui/AnswerButton";
import { AnswerOptions } from "@/types/quizQuestions";
import React from "react";

interface QuestionsListProps {
  answers: AnswerOptions[] | undefined;
  nextQuestion?: (data: string, answerId: number) => void;
}
export const AnswersList: React.FC<QuestionsListProps> = ({ answers, nextQuestion }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {answers?.map(answer => <AnswerButton key={answer.id} id={answer.id} answer={answer.answerText} nextQuestion={nextQuestion} />)}
    </div>
  );
};
