export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  stripePaymentLink?: string; 
  isMostPopular?: boolean; 
  isElite?: boolean;
  actionText?: string;
  featureStyle?: "standard" | "premium";
  isComingSoon?: boolean;
}

export interface QuestionnaireAnswers {
  mindClarification: string;
  situationContext: string;
  issueOrigin: string;
  triedSolutions: string;
  desiredOutcome: string;
  urgentPart: string;
  additionalContext: string;
}

export interface QuestionDefinition {
  id: keyof QuestionnaireAnswers;
  label: string;
  prompt: string;
  placeholder: string;
  supportingText?: string;
  wistiaVideoId?: string;
  tipText?: string; // Added tipText
}

export interface Message {
  id: string;
  sender: "user" | "advisor";
  content: string;
  timestamp: Date;
  isDocument?: boolean;
  documentName?: string;
  documentUrl?: string; 
}

export interface Purchase {
  id: string;
  serviceName: string;
  date: string;
  price: number;
  status: "Delivered" | "In Progress" | "Pending";
}
