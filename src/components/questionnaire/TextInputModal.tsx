'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogOverlay
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface TextInputModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  prompt: string;
  currentValue: string;
  onValueChange: (value: string) => void; 
  placeholder: string;
  minCharLength: number;
  maxCharLength: number;
  // New props for ARIA and feedback text
  charText?: string; 
  textColorClass?: string;
  isInvalid?: boolean;
}

export function TextInputModal({
  isOpen,
  onOpenChange,
  prompt,
  currentValue,
  onValueChange,
  placeholder,
  minCharLength,
  maxCharLength,
  // Destructure new props
  charText: propagatedCharText,
  textColorClass: propagatedTextColorClass,
  isInvalid: propagatedIsInvalid,
}: TextInputModalProps) {
  const [internalValue, setInternalValue] = React.useState(currentValue);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null); // Ref for Textarea

  // Use a unique ID for aria-describedby, derived from prompt or a random element if needed
  const modalFeedbackId = `modal-feedback-${React.useId()}`;

  React.useEffect(() => {
    if (isOpen) { 
      setInternalValue(currentValue);
      // Focus textarea when modal opens and currentValue is loaded
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  }, [currentValue, isOpen]);

  const handleInternalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxCharLength) {
      setInternalValue(event.target.value);
    }
  };

  const handleDone = () => {
    onValueChange(internalValue);
    onOpenChange(false);
  };

  // Determine charText and textColorClass based on internalValue for live updates within the modal
  const charCount = internalValue.length;
  let liveCharText = "";
  let liveTextColorClass = "text-neutral-500";
  const isMinMet = charCount >= minCharLength;
  const liveIsInvalid = minCharLength > 0 && charCount > 0 && charCount < minCharLength;

  if (minCharLength > 0) {
    if (charCount < minCharLength) {
      liveTextColorClass = "text-[#ef4444]"; // Red
      if (charCount === 0 && !internalValue) {
        liveCharText = `Minimum ${minCharLength} characters`;
      } else {
        liveCharText = `${charCount} / ${minCharLength} (minimum needed)`;
      }
    } else if (charCount >= minCharLength && charCount <= maxCharLength) {
      liveTextColorClass = "text-[#74B9FF]"; // Primary Blue
      liveCharText = `${charCount} / ${maxCharLength} characters`;
    } else if (charCount > maxCharLength) {
      liveTextColorClass = "text-[#ef4444]"; // Red for exceeding max
      liveCharText = `${charCount} / ${maxCharLength} (limit exceeded)`;
    }
  } else {
    if (charCount <= maxCharLength) {
      liveCharText = `${charCount} / ${maxCharLength} characters`;
    } else {
      liveTextColorClass = "text-[#ef4444]";
      liveCharText = `${charCount} / ${maxCharLength} (limit exceeded)`;
    }
  }
  const showLiveCharText = liveCharText !== "";

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogOverlay /> 
      <DialogContent 
        className="sm:max-w-md w-[95vw] bg-white rounded-xl shadow-2xl p-0 flex flex-col max-h-[90vh] gap-0 border"
        onInteractOutside={(e) => e.preventDefault()} 
        // onOpenAutoFocus={(e) => e.preventDefault()} // Removed to allow autoFocus on textarea
      >
        <DialogHeader className="p-4 pb-3 border-b border-neutral-200 flex-shrink-0">
          <DialogTitle className="text-base font-semibold text-neutral-700 text-center leading-tight">{prompt}</DialogTitle>
        </DialogHeader>
        <div className="p-4 flex-grow overflow-y-auto min-h-[200px] flex flex-col">
          <Textarea
            ref={textareaRef} // Assign ref
            value={internalValue}
            onChange={handleInternalChange}
            placeholder={placeholder}
            rows={10} 
            className="resize-none text-base w-full h-full flex-grow"
            maxLength={maxCharLength + 5}
            aria-label={prompt} // Good for accessibility
            aria-invalid={liveIsInvalid} // Use liveIsInvalid based on internalValue
            aria-describedby={liveIsInvalid ? modalFeedbackId : undefined}
            // autoFocus // autoFocus is handled by useEffect for better control
          />
          {showLiveCharText && (
            <p 
              id={modalFeedbackId} 
              className={`text-xs text-center mt-2 flex-shrink-0 ${liveTextColorClass}`}
              aria-live="polite"
            >
              {liveCharText}
            </p>
          )}
        </div>
        <DialogFooter className="p-4 pt-3 border-t border-neutral-200 flex-shrink-0">
          <Button 
            onClick={handleDone} 
            disabled={!isMinMet || charCount > maxCharLength}
            className="w-full bg-[#0370e3] hover:bg-blue-700 text-white rounded-full py-3 text-base"
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
