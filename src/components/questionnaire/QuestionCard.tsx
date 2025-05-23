import type { QuestionDefinition } from "@/types";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

interface QuestionCardProps {
  question: QuestionDefinition;
  value: string;
  onChange: (value: string) => void;
  stepNumber: number;
  totalSteps: number;
}

export function QuestionCard({
  question,
  value,
  onChange,
  stepNumber,
  totalSteps,
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-2xl">{question.label}</CardTitle>
          <span className="text-sm text-muted-foreground">
            Step {stepNumber} of {totalSteps}
          </span>
        </div>
        {question.supportingText && (
          <CardDescription className="flex items-start text-sm">
            <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
            {question.supportingText}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor={question.id} className="text-base font-medium">
            {question.prompt}
          </Label>
          <Textarea
            id={question.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            rows={6}
            className="resize-none text-base"
            aria-label={question.prompt}
          />
        </div>
      </CardContent>
    </Card>
  );
}
