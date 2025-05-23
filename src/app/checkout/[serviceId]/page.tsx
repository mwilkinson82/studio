"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/config/services";
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AppLogo } from "@/components/core/AppLogo";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.serviceId as string;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Service not found</h1>
        <Button onClick={() => router.push("/")}>Go to Homepage</Button>
      </div>
    );
  }

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
        </div>
      </header>
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-3xl">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-3xl">Confirm Your Purchase</CardTitle>
          <CardDescription>You're about to purchase the "{service.name}" service.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src={`https://placehold.co/600x400.png?text=${encodeURIComponent(service.name)}`}
                alt={service.name}
                data-ai-hint="service product"
                width={600}
                height={400}
                className="rounded-lg shadow-md aspect-video object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <p className="text-sm text-muted-foreground">{service.tagline}</p>
              <p className="text-3xl font-bold text-primary">${service.price.toLocaleString()}</p>
              <p className="text-muted-foreground">{service.description}</p>
              <ul className="space-y-1 text-sm">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Payment Details (Placeholder)</h3>
            <div className="space-y-4">
                <p className="text-muted-foreground">
                    This is a placeholder checkout page. In a real application, you would integrate a payment gateway here.
                </p>
                <Button size="lg" className="w-full shadow-md" onClick={() => alert(`Simulating purchase of ${service.name} for $${service.price}`)}>
                    <CreditCard className="mr-2 h-5 w-5" /> Complete Purchase
                </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => router.back()} className="shadow-sm">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
