import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizProgress } from "@/components/QuizProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizResults } from "@/components/QuizResults";
import { questions } from "@/data/questions";
import { QuizState } from "@/types/quiz";
import { Code2, ChevronRight, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: Array(questions.length).fill(null),
    isComplete: false,
  });

  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState({ ...quizState, answers: newAnswers });
  };

  const handleNext = () => {
    const currentAnswer = quizState.answers[quizState.currentQuestion];
    
    if (currentAnswer === null) {
      toast({
        title: "Выберите ответ",
        description: "Пожалуйста, выберите один из вариантов ответа",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = currentAnswer === questions[quizState.currentQuestion].correctAnswer;
    const newScore = isCorrect ? quizState.score + questions[quizState.currentQuestion].points : quizState.score;

    if (quizState.currentQuestion === questions.length - 1) {
      setQuizState({
        ...quizState,
        score: newScore,
        isComplete: true,
      });
    } else {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        score: newScore,
      });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1,
      });
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: Array(questions.length).fill(null),
      isComplete: false,
    });
    setHasStarted(false);
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <Code2 className="w-24 h-24 mx-auto text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Тест по Программированию
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Проверьте свои знания в программировании! Вас ждут 10 вопросов на различные темы.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Правила теста:</h2>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• 10 вопросов с вариантами ответов</li>
              <li>• За каждый правильный ответ — 10 баллов</li>
              <li>• Можно вернуться к предыдущим вопросам</li>
              <li>• Максимальный балл — 100</li>
            </ul>
          </div>

          <Button size="lg" onClick={handleStart} className="text-lg px-8 py-6">
            Начать тест
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  }

  if (quizState.isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <QuizResults
            score={quizState.score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <Code2 className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Тест по Программированию</h1>
        </div>

        <QuizProgress
          current={quizState.currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={quizState.answers[quizState.currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="flex justify-between gap-4">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={quizState.currentQuestion === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Назад
          </Button>
          <Button
            onClick={handleNext}
            disabled={quizState.answers[quizState.currentQuestion] === null}
            className="gap-2"
          >
            {quizState.currentQuestion === questions.length - 1 ? "Завершить" : "Далее"}
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
