import type { QuestionDefinition } from "@/types";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Loader2, Edit3 } from "lucide-react";
import * as React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { TextInputModal } from "./TextInputModal";
import { WistiaPlayer } from "@/components/common/WistiaPlayer";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: QuestionDefinition;
  value: string;
  onChange: (value: string) => void;
  stepNumber: number;
  totalSteps: number;
  minCharLength?: number;
  maxCharLength?: number;
  onNext: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  isSubmitting: boolean;
  isMinCharMet: boolean;
}

const MotionButton = motion(Button);
const MotionCard = motion(Card); // Create a motion-wrapped version of Card

export function QuestionCard({
  question,
  value,
  onChange,
  stepNumber,
  totalSteps,
  minCharLength = 0,
  maxCharLength = 1000,
  onNext,
  onSubmit,
  isLastQuestion,
  isSubmitting,
  isMinCharMet,
}: QuestionCardProps) {
  const progressValue = totalSteps > 0 ? (stepNumber / totalSteps) * 100 : 0;
  const isMobile = useIsMobile();
  const [isTextModalOpen, setIsTextModalOpen] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const charCount = value.length;
  const controls = useAnimation();

  const isInvalid = minCharLength > 0 && charCount > 0 && charCount < minCharLength;
  const charFeedbackId = `char-feedback-${question.id}`;

  let charText = "";
  let textColorClass = "text-neutral-500";

  if (minCharLength > 0) {
    if (charCount < minCharLength) {
      textColorClass = "text-[#ef4444]";
      if (charCount === 0 && !value) {
        charText = `Minimum ${minCharLength} characters`;
      } else {
        charText = `${charCount} / ${minCharLength} (minimum needed)`;
      }
    } else if (charCount >= minCharLength && charCount <= maxCharLength) {
      textColorClass = "text-[#74B9FF]";
      charText = `${charCount} / ${maxCharLength} characters`;
    } else if (charCount > maxCharLength) {
      textColorClass = "text-[#ef4444]";
      charText = `${charCount} / ${maxCharLength} (limit exceeded)`;
    }
  } else {
    if (charCount <= maxCharLength) {
      charText = `${charCount} / ${maxCharLength} characters`;
      textColorClass = "text-neutral-500";
    } else {
      textColorClass = "text-[#ef4444]";
      charText = `${charCount} / ${maxCharLength} (limit exceeded)`;
    }
  }
  
  const showCharTextElement = charText !== "";

  const handleActionClick = () => {
    if (!isMinCharMet && !isSubmitting && minCharLength > 0) {
      controls.start({
        x: [-4, 4, -4, 4, 0],
        transition: { duration: 0.2, ease: "easeInOut" },
      });
      return;
    }
    if (isSubmitting) return;
    if (!isMinCharMet && minCharLength > 0) return;
    
    if (isLastQuestion) {
      onSubmit();
    } else {
      onNext();
    }
  };

  const textPreview = value ? (value.length > 100 ? value.substring(0, 97) + "..." : value) : <span className="text-neutral-400">{question.placeholder || "Tap to answer..."}</span>;

  const videoVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
    visible: { opacity: 1, height: "auto", marginTop: "0.5rem", marginBottom: "0.5rem", transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  };
  
  // Define shadow value for animation (corresponds to shadow-xl)
  const finalBoxShadow = "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)";

  return (
    <>
      <MotionCard // Changed to MotionCard
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col" // Existing classes
        initial={{ opacity: 0, y: 20, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} // Initial animation state
        animate={{ opacity: 1, y: 0, boxShadow: finalBoxShadow }} // Animate to final state
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} // Animation transition
      >
        <div className="h-1 bg-gradient-to-r from-[#74B9FF] to-[#B284BE]"></div>
        <CardHeader className="text-center pb-3 md:pb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Step {stepNumber} of {totalSteps}</p>
          <img
            src="/ALP Logo transparent.png"
            alt="ALP Logo"
            className="mx-auto md:w-56 h-auto mb-4 md:mb-6"
            style={isMobile ? { width: '8rem', height: 'auto' } : {}}
          />
          <CardTitle
            className="text-xl md:text-2xl lg:text-3xl tracking-normal md:tracking-wide"
            style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.07)' }}
          >
            {question.label}
          </CardTitle>
          {question.supportingText && (
            <CardDescription className="text-sm pt-2 text-center max-w-prose mx-auto mt-2">
              {question.supportingText}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4 px-4 md:px-8 pb-6 md:pb-8 flex-grow">
          {question.wistiaVideoId && (
            <div className="flex items-center justify-center mb-3">
              <label htmlFor={`video-toggle-${question.id}`} className="flex items-center space-x-2 cursor-pointer">
                <span className="text-sm font-medium text-neutral-700">Toggle on for Video</span>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    id={`video-toggle-${question.id}`} 
                    className="sr-only peer" 
                    checked={showVideo}
                    onChange={() => setShowVideo(!showVideo)}
                    aria-label="Toggle video explanation"
                  />
                  <div className="w-12 h-7 bg-gray-200 peer-checked:bg-[#B284BE] rounded-full transition"></div>
                  <div className="absolute top-0.5 left-0.5 peer-checked:translate-x-[20px] w-6 h-6 bg-white rounded-full shadow transition"></div>
                </div>
              </label>
            </div>
          )}
          <AnimatePresence initial={false}>
            {showVideo && question.wistiaVideoId && (
              <motion.div
                key="wistia-video-container"
                variants={videoVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <WistiaPlayer videoId={question.wistiaVideoId} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-1.5">
            <Label htmlFor={isMobile ? undefined : question.id} className="text-base font-medium text-center block">
              {question.prompt}
            </Label>
            {showCharTextElement && !isMobile && (
              <p 
                id={charFeedbackId} 
                className={`text-xs text-center mb-1 ${textColorClass}`}
                aria-live="polite"
              >
                {charText}
              </p>
            )}
            {isMobile ? (
              <div
                className="min-h-[100px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-neutral-600 cursor-pointer hover:border-primary transition-colors flex items-center justify-between"
                onClick={() => setIsTextModalOpen(true)}
              >
                <span className="truncate flex-grow mr-2">{textPreview}</span>
                <Edit3 className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
            ) : (
              <Textarea
                id={question.id}
                value={value}
                onChange={(e) => {
                  if (e.target.value.length <= maxCharLength) {
                    onChange(e.target.value);
                  }
                }}
                placeholder={question.placeholder}
                rows={5}
                className="resize-none text-base w-full"
                aria-label={question.prompt}
                aria-invalid={isInvalid} 
                aria-describedby={isInvalid ? charFeedbackId : undefined} 
                maxLength={maxCharLength + 5}
              />
            )}
            {question.tipText && !isMobile && (
              <p className="text-xs text-neutral-500 mt-2 text-center">
                <strong>Tip:</strong> {question.tipText}
              </p>
            )}
            {showCharTextElement && isMobile && (
              <p 
                className={`text-xs text-center mt-1 ${textColorClass}`}
                aria-live="polite" 
              >
                Tap above to edit. {charText}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center p-4 md:p-6 pt-3 md:pt-4 space-y-3 md:space-y-4">
          <MotionButton 
            onClick={handleActionClick}
            disabled={isSubmitting || (!isMinCharMet && minCharLength > 0)} 
            size="lg"
            animate={controls} 
            className={cn(
              "w-full max-w-xs bg-gradient-to-r from-[#74B9FF] to-[#B284BE] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-150 ease-out transform hover:scale-[1.03] hover:-translate-y-0.5",
              "disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0",
              "px-6 py-3 text-sm h-auto min-h-[2.75rem] sm:px-8 sm:text-base font-semibold"
            )}
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : isLastQuestion ? (
              <Send className="mr-2 h-5 w-5" />
            ) : (
              <ArrowRight className="mr-2 h-5 w-5" />
            )}
            {isSubmitting ? 'Processing...' : (isLastQuestion ? 'Get My Recommendation' : 'Progress')}
          </MotionButton>
          
          <div className="w-full h-1 bg-[#e5e7eb] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#74B9FF] to-[#B284BE] transition-all duration-500 ease-out"
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        </CardFooter>
      </MotionCard> 

      {isMobile && (
        <TextInputModal
          isOpen={isTextModalOpen}
          onOpenChange={setIsTextModalOpen}
          prompt={question.prompt}
          currentValue={value}
          onValueChange={onChange} 
          placeholder={question.placeholder} 
          minCharLength={minCharLength}
          maxCharLength={maxCharLength}
          charText={charText} 
          textColorClass={textColorClass} 
          isInvalid={isInvalid} 
        />
      )}
    </>
  );
}
