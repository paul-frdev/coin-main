import { Answer } from "@/types/quizQuestions";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AnswerStoreActions {
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  updateAnswer: (title: string, newText: string) => void;
  removeAnswers: () => void;
}

const useAnswerStore = create<AnswerStoreActions>((set, get) => ({
  answers: [],
  addAnswer: (answer: Answer) => {
    const currentAnswers = get().answers;
    const existingAnswer = currentAnswers.find(item => item.title === answer.title);

    if (existingAnswer) {
      return;
    }

    const updatedAnswers = [...currentAnswers, answer];
    set({ answers: updatedAnswers });
  },
  updateAnswer: (title: string, newText: string) => {
    const currentAnswers = get().answers;
    const index = currentAnswers.findIndex(item => item.title === title);

    if (index !== -1) {
      const updatedAnswer = { ...currentAnswers[index], text: newText };
      const updatedAnswers = [...currentAnswers];
      updatedAnswers[index] = updatedAnswer;

      set({ answers: updatedAnswers });
    }
  },
  removeAnswers: () => set({ answers: [] }),
}));

export default useAnswerStore;
