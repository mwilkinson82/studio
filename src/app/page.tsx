import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { AppLogo } from "@/components/core/AppLogo";

const services = [
  { name: "Insight Note", description: "Tactical Expert Response" },
  { name: "Strategic Memo", description: "Written Strategic Guidance" },
  { name: "Strategic Briefing", description: "Written + Loom Walkthrough" },
  { name: "Embedded Response", description: "Written + Loom + Follow-Up" },
  { name: "Direct Consulting", description: "1-on-1 with Marshall" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
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
             <Button asChild>
                <Link href="/questionnaire">Get Clarity Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/80 to-secondary">
                    Unlock Expert Insight. Achieve Total Clarity.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ClarityFlow provides tailored advisory services to help you navigate challenges, refine strategies, and achieve your goals with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="/questionnaire">
                      Start Your Clarity Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Abstract representation of clarity"
                data-ai-hint="abstract concept"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored Advisory Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From quick tactical responses to in-depth strategic guidance, find the perfect service to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Placeholder for more service details or features */}
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Expert Analysis</li>
                        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Actionable Insights</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-8">
                <Button size="lg" asChild variant="outline" className="shadow-sm hover:shadow-md transition-shadow">
                    <Link href="/questionnaire">
                      Find Your Perfect Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
             </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} ClarityFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
