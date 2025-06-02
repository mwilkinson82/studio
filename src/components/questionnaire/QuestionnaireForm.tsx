// src/components/questionnaire/QuestionnaireForm.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { QuestionnaireAnswers, QuestionDefinition } from "@/types";
import { Button } from "@/components/ui/button";
import ClientOnlyQuestionCard from "./ClientOnlyQuestionCard";
import { recommendService } from "@/ai/flows/service-recommendation";
import type { ServiceRecommendationOutput } from "@/ai/flows/service-recommendation";
import { Loader2, ArrowRight } from "lucide-react"; 
import { useToast } from "@/hooks/use-toast";
import Lottie from "lottie-react";
import { WistiaPlayer } from "@/components/common/WistiaPlayer"; // Keep this import, though WistiaPlayer itself has issues
import { motion } from "framer-motion";

const MIN_CHARS_PER_QUESTION = 20;
const MAX_CHARS_PER_QUESTION = 1000;
const LOCAL_STORAGE_KEY = "questionnaireAnswers";
const DEBOUNCE_DELAY = 500; // ms

const questions: QuestionDefinition[] = [
  {
    id: "mindClarification",
    label: "Let’s get you clarity.",
    prompt: "What’s on your mind that could use clarity?",
    placeholder: "e.g., I'm struggling with defining my target audience and reaching them effectively.",
    tipText: "Be specific. The more detailed you are, the better we can assist you.",
    wistiaVideoId: "9jc0yq6vre",
  },
  {
    id: "situationContext",
    label: "Context creates clarity.",
    prompt: "What’s the situation around this issue?",
    placeholder: "e.g., We're a startup in the SaaS space, launched 6 months ago, facing slow user adoption.",
    tipText: "Consider relevant background, recent changes, or contributing factors.",
    wistiaVideoId: "enkg52axky", // CORRECTED
  },
  {
    id: "issueOrigin",
    label: "The root reveals the answer.",
    prompt: "What do you think is really causing this issue?",
    placeholder: "e.g., Perhaps our value proposition isn't clear, or we're targeting the wrong channels.",
    tipText: "Think about underlying causes, not just symptoms. What’s your hypothesis?",
    wistiaVideoId: "5qgx9ki87v", 
  },
  {
    id: "triedSolutions",
    label: "What have you already tried?",
    prompt: "Share what you’ve done so far, even if it didn’t work.",
    placeholder: "e.g., We've tried Facebook ads, content marketing, and cold outreach with limited success.",
    tipText: "List any strategies, tools, or approaches you've implemented and their outcomes.",
    wistiaVideoId: "cj7xetrqsp",
  },
  {
    id: "desiredOutcome",
    label: "What does success look like?",
    prompt: "Describe the outcome you’re hoping for.",
    placeholder: "e.g., We want to increase user sign-ups by 50% in the next quarter and improve retention.",
    tipText: "Be as concrete as possible. What measurable results are you aiming for?",
    wistiaVideoId: "8coq79vf6p",
  },
  {
    id: "urgentPart",
    label: "If we had to focus on one part first…",
    prompt: "Which part feels the most urgent or impactful right now?",
    placeholder: "e.g., Generating more qualified leads is the most pressing issue for us.",
    tipText: "Prioritize. What one area, if improved, would provide the greatest leverage?",
    wistiaVideoId: "5mi0o3wya0",
  },
  {
    id: "additionalContext",
    label: "What else should we know?",
    prompt: "Is there anything else you feel is important?",
    placeholder: "e.g., We have a limited budget for the next 3 months, or specific competitor actions.",
    tipText: "Include any constraints, opportunities, or other details that might be relevant.",
    wistiaVideoId: "druloh0qqh", // CORRECTED based on your list
  },
];

// ... rest of the QuestionnaireForm.tsx component ...
const initialAnswers: QuestionnaireAnswers = questions.reduce((acc, q) => ({ ...acc, [q.id]: "" }), {} as QuestionnaireAnswers);

const contentAppearVariants = {
  hidden: { opacity: 0, transition: { duration: 0.4, ease: "easeOut" } },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeIn", delay: 0.2 } }  
};

function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
}

export function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const [isLoading, setIsLoading] = useState(false); 
  const [recommendation, setRecommendation] = useState<ServiceRecommendationOutput | null>(null); 
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiData, setConfettiData] = useState<object | null>(null);
  const [showTextAndCTA, setShowTextAndCTA] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedAnswers) {
        const parsedAnswers = JSON.parse(savedAnswers);
        const validAnswers = questions.reduce((acc, q) => {
          acc[q.id] = parsedAnswers[q.id] || "";
          return acc;
        }, {} as QuestionnaireAnswers);
        setAnswers(validAnswers);
      }
    } catch (error) {
      console.error("Failed to load answers from localStorage:", error);
    }
    setIsLoaded(true);
  }, []);

  const debouncedSaveAnswers = useCallback(
    debounce((currentAnswers: QuestionnaireAnswers) => {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentAnswers));
      } catch (error) {
        console.error("Failed to save answers to localStorage:", error);
      }
    }, DEBOUNCE_DELAY),
    []
  );

  useEffect(() => {
    if (isLoaded && Object.keys(answers).length > 0 && answers !== initialAnswers) {
      debouncedSaveAnswers(answers);
    }
  }, [answers, debouncedSaveAnswers, isLoaded]);

  useEffect(() => {
    fetch("/confetti.json")
      .then((response) => response.json())
      .then((data) => setConfettiData(data))
      .catch((error) => console.error("Error loading confetti animation:", error));
  }, []);

  useEffect(() => {
    if (recommendation && confettiData) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowTextAndCTA(true);
      }, 2000); 
      return () => clearTimeout(timer);
    } else {
      setShowTextAndCTA(false);
      setShowConfetti(false);
    }
  }, [recommendation, confettiData]);
  
  const currentQuestion = questions[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : "";
  const isMinCharMet = currentAnswer.length >= MIN_CHARS_PER_QUESTION;
  const isLastQuestion = currentStep === questions.length - 1;

  const handleAnswerChange = (id: keyof QuestionnaireAnswers, value: string) => {
    if (value.length <= MAX_CHARS_PER_QUESTION) {
      setAnswers((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleNextStep = () => { 
    if (!isLastQuestion) setCurrentStep(currentStep + 1); 
  };

  const handleSubmitAnswers = async () => {
    setIsLoading(true); 
    setRecommendation(null); 
    setShowConfetti(false); 
    setShowTextAndCTA(false);
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
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (error) {
        console.error("Failed to remove answers from localStorage:", error);
      }
    } catch (error) { 
      console.error("Error getting recommendation:", error); 
      toast({ title: "Error", description: "Failed to get service recommendation. Please try again.", variant: "destructive", });
    } finally { 
      setIsLoading(false); 
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, [currentStep, recommendation]);

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground">Loading questionnaire...</p>
      </div>
    );
  }

  if (isLoading && !recommendation) { 
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground">Finding the best solution for you...</p>
      </div>
    );
  }

  if (recommendation) {
    const videoIdForCongratsPage = "m9mpjtevml";
    return (
      <div className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height,80px))] py-8 md:py-12 px-4">
        {showConfetti && confettiData && (
          <div className="absolute inset-0 z-[100] pointer-events-none flex justify-center items-center overflow-hidden">
            <Lottie 
              animationData={confettiData} 
              loop={false} 
              onComplete={() => setShowConfetti(false)} 
              style={{ width: '100%', height: '100%'}}
            />
          </div>
        )}
        <div className="text-center max-w-xl md:max-w-2xl w-full">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 tracking-tight"
            initial={{opacity: 0, y: -20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay: 0.2}}
          >
            Well Done. A Quick Word From Marshall.
          </motion.h1>
          <div className="w-full max-w-xl mx-auto aspect-video rounded-lg shadow-2xl overflow-hidden mb-8">
            <WistiaPlayer videoId={videoIdForCongratsPage} autoPlay={true} muted={true} /> 
          </div>
          <motion.div
            variants={contentAppearVariants}
            initial="hidden"
            animate={showTextAndCTA ? "visible" : "hidden"}
            className="space-y-4 mt-8"
          >
            <p className="text-md text-neutral-600 mb-2 max-w-lg mx-auto">
              You&apos;ve laid the groundwork for significant clarity.
            </p>
            <p className="text-lg text-neutral-700 mb-8 max-w-lg mx-auto leading-relaxed">
              As Marshall mentioned, the next step is simple. Choose the advisory tier below that best matches the speed and depth of insight you require right now.
            </p>
            <Button 
              size="lg"
              onClick={() => router.push('/services')} 
              className="bg-[#0370e3] hover:bg-blue-700 text-white shadow-lg hover:shadow-xl rounded-full px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-150 ease-out transform hover:scale-[1.03]"
            >
              Explore Advisory Tiers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center w-full py-6 md:py-10"> 
      <ClientOnlyQuestionCard
        question={currentQuestion}
        value={currentAnswer}
        onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
        stepNumber={currentStep + 1}
        totalSteps={questions.length}
        minCharLength={MIN_CHARS_PER_QUESTION}
        maxCharLength={MAX_CHARS_PER_QUESTION}
        onNext={handleNextStep}
        onSubmit={handleSubmitAnswers}
        isLastQuestion={isLastQuestion}
        isSubmitting={isLoading} 
        isMinCharMet={isMinCharMet}
      />
    </div>
  );
}
