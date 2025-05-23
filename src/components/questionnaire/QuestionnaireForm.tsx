"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { QuestionnaireAnswers, QuestionDefinition } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QuestionCard } from "./QuestionCard";
import { recommendService } from "@/ai/flows/service-recommendation";
import type { ServiceRecommendationOutput } from "@/ai/flows/service-recommendation";
import { Loader2, ArrowLeft, ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, getServiceById } from "@/config/services"; // Import services data

const questions: QuestionDefinition[] = [
  {
    id: "mindClarification",
    label: "Let’s get you clarity.",
    prompt: "What’s on your mind that could use clarity?",
    placeholder: "e.g., Scaling my business, improving team productivity, launching a new product...",
    supportingText: "This maps priorities. It helps us guide you better.",
  },
  {
    id: "situationContext",
    label: "Context creates clarity.",
    prompt: "What’s the situation around this issue?",
    placeholder: "e.g., Rapid growth phase, recent market changes, internal team restructuring...",
    supportingText: "Knowing what surrounds the issue sharpens what matters. We don’t need fluff. Only what helps.",
  },
  {
    id: "issueOrigin",
    label: "The root reveals the answer.",
    prompt: "What do you think is really causing this issue?",
    placeholder: "e.g., Lack of clear processes, insufficient resources, communication breakdown...",
    supportingText: "Understanding the origin of the issue helps guide the solution. Your clarity starts here. No judgment. Only insight.",
  },
  {
    id: "triedSolutions",
    label: "What have you already tried?",
    prompt: "Share what you’ve done so far, even if it didn’t work.",
    placeholder: "e.g., Hired new staff, implemented new software, changed marketing strategies...",
    supportingText: "We don’t want to offer advice you’ve already outgrown. This is a direct action point. Don’t hold back now.",
  },
  {
    id: "desiredOutcome",
    label: "What does success look like?",
    prompt: "Describe the outcome you’re hoping for.",
    placeholder: "e.g., 20% increase in revenue, improved customer satisfaction, successful product launch...",
    supportingText: "We need a clear target. Otherwise, you’ll just circle the issue. It’s not perfection. It’s 20 yards forward.",
  },
  {
    id: "urgentPart",
    label: "If we had to focus on one part first…",
    prompt: "Which part feels the most urgent or impactful right now?",
    placeholder: "e.g., Streamlining sales, improving team morale, defining brand message...",
    supportingText: "Type the piece that matters most to start with. If it’s more than one, we’ll cover more—but we always start with focus.",
  },
  {
    id: "additionalContext",
    label: "What else should we know?",
    prompt: "Is there anything else you feel is important?",
    placeholder: "Any other details, constraints, or aspirations...",
    supportingText: "This is your space to share any context we might’ve missed. You’ll never be ignored. Give us everything that matters in this place.",
  },
];

const initialAnswers: QuestionnaireAnswers = {
  mindClarification: "",
  situationContext: "",
  issueOrigin: "",
  triedSolutions: "",
  desiredOutcome: "",
  urgentPart: "",
  additionalContext: "",
};

export function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<ServiceRecommendationOutput | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleAnswerChange = (id: keyof QuestionnaireAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const aiInput = {
        clarity: answers.mindClarification,
        context: answers.situationContext,
        rootCause: answers.issueOrigin,
        previousAttempts: answers.triedSolutions,
        successDefinition: answers.desiredOutcome,
        urgentPart: answers.urgentPart,
        additionalContext: answers.additionalContext,
      };
      const result = await recommendService(aiInput);
      setRecommendation(result);
      // Instead of navigating, we will display the recommendation on the same page.
      // router.push(`/recommendation?service=${encodeURIComponent(result.serviceName)}&justification=${encodeURIComponent(result.justification)}`);
    } catch (error) {
      console.error("Error getting recommendation:", error);
      toast({
        title: "Error",
        description: "Failed to get service recommendation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Scroll to top when step changes or recommendation appears
    window.scrollTo(0, 0);
  }, [currentStep, recommendation]);


  const progressValue = ((currentStep + 1) / questions.length) * 100;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground">Finding the best solution for you...</p>
      </div>
    );
  }

  if (recommendation) {
    const recommendedServiceDetails = services.find(s => s.name === recommendation.serviceName);
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-primary">Your Recommended Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {recommendedServiceDetails ? (
            <div>
              <h3 className="text-2xl font-semibold mb-2">{recommendedServiceDetails.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{recommendedServiceDetails.tagline}</p>
              <p className="mb-4">{recommendedServiceDetails.description}</p>
              <p className="text-2xl font-bold text-primary mb-4">${recommendedServiceDetails.price}</p>
              <h4 className="font-semibold mb-1">Key Features:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                {recommendedServiceDetails.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : (
             <p className="text-xl font-semibold">{recommendation.serviceName}</p>
          )}
          <div>
            <h4 className="font-semibold mb-1">Justification:</h4>
            <p className="text-muted-foreground bg-accent/50 p-3 rounded-md">{recommendation.justification}</p>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" onClick={() => { setRecommendation(null); setCurrentStep(questions.length - 1); }} className="shadow-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />  Back to Questions
            </Button>
            <Button onClick={() => router.push(`/checkout/${recommendedServiceDetails?.id || 'unknown'}`)} className="shadow-md">
              Proceed to Purchase <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  

  const currentQuestion = questions[currentStep];

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <Progress value={progressValue} className="w-full max-w-2xl h-2" />
      <QuestionCard
        question={currentQuestion}
        value={answers[currentQuestion.id]}
        onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
        stepNumber={currentStep + 1}
        totalSteps={questions.length}
      />
      <div className="flex justify-between w-full max-w-2xl pt-4">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0 || isLoading}
          variant="outline"
          className="shadow-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        {currentStep < questions.length - 1 ? (
          <Button onClick={nextStep} disabled={isLoading} className="shadow-sm">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isLoading} className="shadow-md">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Get My Recommendation
          </Button>
        )}
      </div>
    </div>
  );
}
