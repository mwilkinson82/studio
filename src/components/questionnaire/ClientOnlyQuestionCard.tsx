'use client';

import * as React from 'react';
import { QuestionCard } from '@/components/questionnaire/QuestionCard';
import type { QuestionDefinition } from "@/types";

interface ClientOnlyQuestionCardProps {
  question: QuestionDefinition;
  value: string;
  onChange: (value: string) => void;
  stepNumber: number;
  totalSteps: number;
  minCharLength?: number;
  maxCharLength?: number;
  charCount?: number;
  onNext: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  isSubmitting: boolean;
  isMinCharMet: boolean;
}

export default function ClientOnlyQuestionCard(props: ClientOnlyQuestionCardProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Return null or a very minimal skeleton if needed, removing the image placeholder
    return null; 
  }

  return <QuestionCard {...props} />;
}
