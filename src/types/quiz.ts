export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: (number | null)[];
  isComplete: boolean;
}
