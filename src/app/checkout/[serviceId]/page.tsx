'use client';

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/config/services";
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react"; // Removed ShieldCheck as it's not used
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.serviceId as string;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className={cn(
        "container mx-auto py-12 px-4 md:px-6 text-center flex flex-col items-center justify-center min-h-[calc(100vh-150px)] overflow-x-hidden",
        "max-w-full xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      )}>
        <h1 className="text-2xl font-semibold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">The service you are looking for could not be found.</p>
        <Button onClick={() => router.push("/services")}>Back to Services</Button>
      </div>
    );
  }

  const handleCompletePurchase = () => {
    if (service.stripePaymentLink) {
      window.location.href = service.stripePaymentLink;
    } else {
      alert("Payment link not available for this service yet.");
    }
  };

  return (
    <div className={cn(
      "container mx-auto py-8 md:py-12 px-4 md:px-6 overflow-x-hidden",
      "max-w-full xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
    )}>
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight">Confirm Your Selection</h1>
        <p className="text-lg text-neutral-600 mt-2">You are about to proceed with the following advisory service.</p>
      </div>

      <Card className="w-full shadow-xl">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
            {service.name}
          </CardTitle>
          {service.tagline && (
            <CardDescription className="text-sm text-neutral-500 pt-1">
              {service.tagline}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-neutral-700 mb-3">Description:</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
          </div>

          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-neutral-700 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t pt-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-800">
              Total: ${service.price}
            </p>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-center mb-6">
                <Image 
                    src="/alp + stripe.png" 
                    alt="a|p securely powered by Stripe" 
                    width={300} 
                    height={75}
                    layout="intrinsic"
                    className="rounded-md"
                />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-700 text-center">Secure Payment</h3>
            <div className="space-y-4 bg-neutral-50 p-6 rounded-lg shadow-sm">
                <p className="text-muted-foreground text-sm text-center">
                  a|p partners with Stripe for your payment security.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-[#0370e3] hover:bg-blue-700 text-white shadow-md text-base font-semibold py-3 rounded-full"
                  onClick={handleCompletePurchase}
                >
                    <CreditCard className="mr-2 h-5 w-5" /> Proceed to Secure Payment
                </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => router.back()} className="shadow-sm text-neutral-600 hover:text-neutral-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Removed temporary scroll div */}
    </div>
  );
}
