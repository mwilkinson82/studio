import { QuestionnaireForm } from "@/components/questionnaire/QuestionnaireForm";

export default function QuestionnairePage() {
  return (
    <div 
      className="container mx-auto py-8 px-4 md:px-6 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center"
      // style={{ border: '3px dashed green' }} // Removed green dashed border
    >
      <QuestionnaireForm />
    </div>
  );
}
