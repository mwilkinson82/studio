import { QuestionnaireForm } from "@/components/questionnaire/QuestionnaireForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/core/AppLogo";

export default function QuestionnairePage() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <AppLogo className="h-8 w-8 text-primary" />
            <span className="font-bold sm:inline-block text-xl">
              ClarityFlow
            </span>
          </Link>
           <nav className="flex flex-1 items-center space-x-4">
            {/* Future nav items if needed */}
          </nav>
          <div className="flex items-center space-x-2">
             <Button variant="ghost" asChild>
                <Link href="/profile">My Account</Link>
             </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        <QuestionnaireForm />
      </div>
    </>
  );
}
