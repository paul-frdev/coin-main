"use client";

import { MessageList } from "../messages/MessageList";
import { QuizCart } from "./QuizCart";
import { QuizNav } from "./QuizNav";
import useAnswerStore from "@/hooks/useAnswerStore";
import { Question } from "@/types/quizQuestions";
import { nanoid } from "nanoid/non-secure";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { AlertModal } from '../modals/AlertModal';
import { mainQuestions } from '@/constants/questions';

export const QuizList = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | any>(null);

  const [title, setTitle] = useState("");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [countPoints, setCountPoints] = useState(0);
  const [secondPoints, setSecondPoints] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { addAnswer, updateAnswer, answers, removeAnswers } = useAnswerStore();
  const router = useRouter();

  const id = nanoid();
  const questionsData: Question[] = mainQuestions;

  const showQuestion = useCallback(
    (index: number) => {
      let curQuestion = questionsData[currentQuestionIndex];
      setTitle(curQuestion?.questionText!);

      if (currentQuestionIndex === 0) {
        setCurrentQuestion(curQuestion);
        setCountPoints(0);
        setSecondPoints(0);
      } else {
        curQuestion = questionsData[index];
        setCurrentQuestion(curQuestion);
        setTitle(curQuestion?.questionText!);
      }

      if (currentQuestionIndex === 20) {
        router.push("/checkout-results");
      }
    },
    [currentQuestionIndex, questionsData, router]
  );

  const onDelete = () => {
    removeAnswers();
    setIsOpen(false);
  };

  const nextQuestion = useCallback(
    (event: string, answerId: number) => {
      addAnswer({ id: id, title: currentQuestion.questionText, text: event });
      updateAnswer(title, event);

      setCurrentQuestionIndex(prev => prev + 1);
      showQuestion(currentQuestionIndex + 1);
    },
    [addAnswer, currentQuestion?.questionText, currentQuestionIndex, id, showQuestion, title, updateAnswer]
  );

  const backShowNextQuestion = (index: number) => {
    setCurrentQuestionIndex(prev => prev + 1);
    showQuestion(index + 1);
  };

  const prevQuestion = useCallback(() => {
    setCurrentQuestionIndex(prev => prev - 1);
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 6) {
      setCountPoints(countPoints - 20);
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 20) {
      setSecondPoints(secondPoints - 7);
    }
    setIsOpen(false);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 5) {
      setCountPoints(prev => prev + 20);
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 20) {
      setSecondPoints(prev => prev + 7);
    }

    showQuestion(currentQuestionIndex);
  }, [showQuestion, currentQuestionIndex]);

  useEffect(() => {
    if (title === "I’m..." && answers.length) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, [title]);

  return (
    <>
      <AlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={onDelete} />
      <div className="w-full flex flex-col justify-center items-center gap-y-9">
        {mainQuestions.length > currentQuestionIndex ? (
          <QuizNav
            prevQuestion={prevQuestion}
            disabled={currentQuestionIndex === 0}
            countPoints={countPoints}
            secondPoints={secondPoints}
            index={currentQuestionIndex}
          />
        ) : null}
        {currentQuestion?.showMessageCart ? (
          <MessageList
            currentQuestionId={currentQuestion?.id}
            currentQuestion={currentQuestion}
            toNextQuestion={backShowNextQuestion}
            currentQuestionIndex={currentQuestionIndex}
          />
        ) : mainQuestions.length > currentQuestionIndex ? (
          <QuizCart currentQuestionIndex={currentQuestionIndex} question={currentQuestion} nextQuestion={nextQuestion} />
        ) : null}
      </div>
    </>
  );
};
