import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, totalQuestions, onRestart }: QuizResultsProps) => {
  const maxScore = totalQuestions * 10;
  const percentage = (score / maxScore) * 100;

  const getResultMessage = () => {
    if (percentage >= 90) return "Отлично! Вы эксперт! 🎉";
    if (percentage >= 70) return "Хорошо! Продолжайте в том же духе! 👍";
    if (percentage >= 50) return "Неплохо! Есть куда расти! 📚";
    return "Не расстраивайтесь! Попробуйте еще раз! 💪";
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/80 border-border shadow-lg text-center">
      <div className="mb-6">
        <Trophy className="w-20 h-20 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold mb-2 text-foreground">Тест завершен!</h2>
        <p className="text-xl text-muted-foreground">{getResultMessage()}</p>
      </div>

      <div className="my-8 p-6 bg-secondary rounded-lg">
        <div className="text-5xl font-bold text-primary mb-2">
          {score} / {maxScore}
        </div>
        <div className="text-lg text-muted-foreground">
          Правильных ответов: {score / 10} из {totalQuestions}
        </div>
        <div className="text-2xl font-semibold mt-2 text-accent">
          {percentage.toFixed(0)}%
        </div>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="gap-2"
      >
        <RotateCcw className="w-5 h-5" />
        Пройти тест заново
      </Button>
    </Card>
  );
};
