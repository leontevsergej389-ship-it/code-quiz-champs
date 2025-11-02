import { Question } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answer: number) => void;
}

export const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }: QuestionCardProps) => {
  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/80 border-border shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-foreground">{question.question}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? "default" : "secondary"}
            className={cn(
              "w-full justify-start text-left h-auto py-4 px-6 text-base transition-all",
              selectedAnswer === index && "ring-2 ring-primary shadow-glow"
            )}
            onClick={() => onAnswerSelect(index)}
          >
            <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}.</span>
            <span>{option}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};
