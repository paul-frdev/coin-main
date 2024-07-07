import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Question = {
  id?: number;
  questionText?: string;
  answerOptions?: AnswerOptions[];
  point?: string;
  secondPoint?: string;
  showMessageCart?: boolean;
  showMessage?: boolean;
  number?: number;
};

export type AnswerOptions = {
  id: number;
  answerText: string;
};

export type ShowMessage = {
  id?: number;
  title?: string;
  src: string | StaticImport;
  text?: string;
  subtitle?: string;
  spanText?: string;
};

export type Answer = {
  id: string;
  title: string;
  text: string;
};

export type SelectedAnswer = {
  questionTitle: string | undefined;
  selectedAnswer: string | null;
};
