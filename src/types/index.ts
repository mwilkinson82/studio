export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
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
}

export interface Message {
  id: string;
  sender: "user" | "advisor";
  content: string;
  timestamp: Date;
  isDocument?: boolean;
  documentName?: string;
  documentUrl?: string; // Placeholder for download link
}

export interface Purchase {
  id: string;
  serviceName: string;
  date: string;
  price: number;
  status: "Delivered" | "In Progress" | "Pending";
}
