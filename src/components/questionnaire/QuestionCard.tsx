// src/components/questionnaire/QuestionCard.tsx
import type { QuestionDefinition } from "@/types";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Loader2, Edit3 } from "lucide-react";
import * as React from 'react';
// Image import removed
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
  const progressPercent = totalSteps > 0 ? (stepNumber / totalSteps) * 100 : 0;
  const isMobile = useIsMobile();
  const [isTextModalOpen, setIsTextModalOpen] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const charCount = value.length;
  const controls = useAnimation();

  const isInvalidMin = minCharLength > 0 && charCount > 0 && charCount < minCharLength;
  const isInvalidMax = charCount > maxCharLength;
  const charFeedbackId = `char-feedback-${question.id}`;

  let charText = "";
  let textColorClass = "text-gray-500";

  if (minCharLength > 0) {
    if (charCount === 0 && !value) {
      charText = `Minimum ${minCharLength} characters`;
      textColorClass = "text-red-500";
    } else if (charCount < minCharLength) {
      charText = `${charCount} / ${minCharLength} (minimum needed)`;
      textColorClass = "text-red-500";
    } else if (charCount >= minCharLength && charCount <= maxCharLength) {
      charText = `${charCount} / ${maxCharLength} characters`;
      textColorClass = "text-blue-600";
    } else if (charCount > maxCharLength) {
      charText = `${charCount} / ${maxCharLength} (limit exceeded)`;
      textColorClass = "text-red-500";
    }
  } else {
    if (charCount <= maxCharLength) {
      charText = `${charCount} / ${maxCharLength} characters`;
      textColorClass = "text-gray-500";
    } else {
      charText = `${charCount} / ${maxCharLength} (limit exceeded)`;
      textColorClass = "text-red-500";
    }
  }
  
  const showCharTextElement = charText !== "";

  const handleActionClick = () => {
    if (!isMinCharMet && !isSubmitting && minCharLength > 0 && charCount < minCharLength) {
      controls.start({
        x: [-5, 5, -5, 5, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      });
      return;
    }
    if (isSubmitting) return;
    
    if (isLastQuestion) {
      onSubmit();
    } else {
      onNext();
    }
  };

  const textPreview = value ? (value.length > 100 ? value.substring(0, 97) + "..." : value) : <span className="text-gray-400">{question.placeholder || "Tap to answer..."}</span>;

  const videoVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } },
    visible: { opacity: 1, height: "auto", marginTop: "0.5rem", marginBottom: "0.5rem", transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <>
      <motion.div 
        className="mx-auto w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-lg p-8 relative flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-sm text-gray-500 text-right mb-4">
          STEP {stepNumber} OF {totalSteps}
        </div>

        <div className="flex justify-center mb-6">
          <div className="text-5xl md:text-6xl font-bold text-gray-700">
            <span className="text-blue-600">a</span>|<span className="text-purple-600">p</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          {question.label}
        </h2>
        
        {question.wistiaVideoId && (
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-gray-600">Toggle on for Video</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showVideo}
                onChange={() => setShowVideo(prev => !prev)}
                className="sr-only peer"
              />
              <div // Track
                className={`w-12 h-6 rounded-full transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-green-300 ${showVideo ? 'bg-green-500' : 'bg-gray-300'}`}
              />
              <div // Thumb
                className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${showVideo ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </label>
          </div>
        )}

        <AnimatePresence initial={false}>
          {(() => {
            if (question.wistiaVideoId) {
              console.log('[QuestionCard] Video Toggle Info:', {
                showVideoState: showVideo,
                wistiaVideoIdFromQuestion: question.wistiaVideoId,
                shouldRenderVideo: showVideo && question.wistiaVideoId,
              });
            }
            
            if (showVideo && question.wistiaVideoId) {
              return (
                <motion.div
                  key="wistia-video-container"
                  variants={videoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mb-6 rounded-xl overflow-hidden shadow-md"
                >
                  <WistiaPlayer videoId={question.wistiaVideoId} />
                </motion.div>
              );
            }
            return null;
          })()}
        </AnimatePresence>
        
        <p className="text-center text-gray-700 mb-2 text-base md:text-lg">{question.prompt}</p>
        
        {showCharTextElement && !isMobile && (
             <p 
                id={charFeedbackId} 
                className={`text-center text-sm mb-2 ${textColorClass}`}
                aria-live="polite"
              >
                {charText}
            </p>
        )}

        <div className="mb-2">
            {isMobile ? (
              <div
                className="min-h-[80px] w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 cursor-pointer hover:border-blue-500 transition-colors flex items-center justify-between"
                onClick={() => setIsTextModalOpen(true)}
              >
                <span className="truncate flex-grow mr-2">{textPreview}</span>
                <Edit3 className="h-5 w-5 text-blue-500 flex-shrink-0" />
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
                rows={4}
                className="w-full h-32 border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-base"
                aria-label={question.prompt}
                aria-invalid={isInvalidMin || isInvalidMax} 
                aria-describedby={isInvalidMin || isInvalidMax ? charFeedbackId : undefined} 
                maxLength={maxCharLength + 10}
              />
            )}
        </div>
        
        {showCharTextElement && isMobile && (
            <p 
                className={`text-center text-sm mb-2 ${textColorClass}`}
                aria-live="polite" 
              >
                Tap above to edit. {charText}
            </p>
        )}

        {question.tipText && !isMobile && (
            <p className="text-center text-sm text-gray-500 mb-6">
                <strong>Tip:</strong> {question.tipText}
            </p>
        )}

        <MotionButton
            onClick={handleActionClick}
            disabled={isSubmitting || (!isMinCharMet && minCharLength > 0 && charCount < minCharLength)}
            size="lg"
            animate={controls}
            className={cn(
              "w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium transition-transform duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              "disabled:opacity-50",
              "text-base"
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

        <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }} 
            />
        </div>
      </motion.div>

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
          isInvalid={isInvalidMin || isInvalidMax} 
        />
      )}
    </>
  );
}
