'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check, BadgeCheck, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface ServiceTier {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  price: number | string; 
  features: string[];
  actionText?: string;
  isMostPopular?: boolean;
  isComingSoon?: boolean;
  isElite?: boolean;
}

interface ServiceCardProps {
  service: ServiceTier;
  isSelected: boolean;
  onSelect: () => void; 
}

export function ServiceCard({ service, isSelected, onSelect }: ServiceCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    if (service.isComingSoon) return;
    onSelect(); 
  };

  const handleButtonAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    if (service.isComingSoon) return;
    
    if (!isSelected) {
      onSelect(); // If not selected, this click just selects the card.
      return;     // Do not proceed to navigation yet.
    }

    // If already selected (button now says "Proceed"), then perform navigation.
    if (service.id === 'direct-consulting') {
      window.location.href = 'https://calendly.com/marshallwilkinson/60min';
    } else {
      router.push(`/checkout/${service.id}`);
    }
  };

  const featureIconColor = service.isElite ? "text-sky-400" : "text-green-500";
  const FeatureIcon = Check;

  const neumorphicDebossedStyle = {
    color: service.isElite ? 'hsl(0 0% 30%)' : 'hsl(0 0% 96%)',
    textShadow: service.isElite 
      ? `-1px -1px 2px rgba(0,0,0,0.6), 1px 1px 2px rgba(255,255,255,0.08)` 
      : `-1px -1px 2px rgba(0,0,0,0.06), 1px 1px 2px rgba(255,255,255,0.6)`,
  };

  return (
    <Card 
      onClick={handleCardClick}
      className={cn(
        "flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer overflow-hidden",
        "border-2", 
        isSelected 
          ? "border-[#0370e3] shadow-xl" 
          : service.isMostPopular 
            ? "border-[#0370e3]/80 bg-[#0370e3]/5 hover:border-[#0370e3]"
            : "border-neutral-200 hover:border-neutral-300",
        service.isElite && "text-white hover:border-[#74B9FF]/70",
        service.isElite && !isSelected && "bg-neutral-800 border-neutral-700 hover:border-[#74B9FF]/70 shadow-lg hover:shadow-xl",
        service.isElite && isSelected && "bg-neutral-900 border-[#74B9FF] shadow-xl",
        service.isComingSoon ? "opacity-60 grayscale pointer-events-none shadow-md" : ""
      )}
    >
      <CardHeader className="pb-4 pt-6 items-center relative text-center">
        {isSelected && (
            <BadgeCheck className={cn("absolute top-4 right-4 h-7 w-7", service.isElite ? "text-white" : "text-blue-600")} />
        )}
        {service.isMostPopular && !isSelected && (
          <div className="mb-3">
            <span className={cn(
                "text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg",
                service.isElite ? "bg-white text-neutral-800" : "bg-[#0370e3] text-white" 
              )}>
              Most Popular
            </span>
          </div>
        )}
        <CardTitle className={cn(
          "text-2xl md:text-3xl font-bold tracking-tight pt-4", 
          service.isElite ? "text-white" : "text-neutral-800"
        )}>
          {service.name}
        </CardTitle>
        
        {service.tagline && (
          <CardDescription className={cn("text-sm mt-2 min-h-[20px]", service.isElite ? "text-neutral-300" : "text-neutral-500")}>
            {service.tagline}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between space-y-4 px-6 pb-6">
        <div className="space-y-4">
            <p className={cn("text-4xl font-extrabold text-center py-2 break-words", service.isElite ? "text-white" : "text-neutral-900")}>
            {typeof service.price === 'number' ? `$${service.price}` : service.price}
            {service.name !== "Direct Consulting" && typeof service.price === 'number' && (
                <span className={cn("text-sm font-normal", service.isElite ? "text-neutral-400" : "text-neutral-500")} ></span>
            )}
            </p>
            <p className={cn("text-sm leading-relaxed min-h-[70px] text-center break-words", service.isElite ? "text-neutral-200" : "text-neutral-600")}>
            {service.description}
            </p>
            <ul className="space-y-2 pt-2 text-center mx-auto max-w-xs">
            {service.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-left">
                <FeatureIcon className={cn("h-5 w-5 mr-2 mt-0.5 flex-shrink-0", featureIconColor)} />
                <span className={cn("break-words", service.isElite ? "text-neutral-100" : "text-neutral-700")}>{feature}</span>
                </li>
            ))}
            </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex flex-col items-center">
        <Button 
          onClick={handleButtonAction} 
          disabled={service.isComingSoon}
          size="lg" 
          style={isSelected ? { backgroundColor: '#22c55e', color: 'white' } : {}}
          className={cn(
            "w-full py-3 text-base font-medium rounded-full transition-all duration-150 ease-out transform hover:scale-[1.02] shadow-md hover:shadow-lg mb-4",
            !isSelected && (service.isElite 
                    ? "bg-white hover:bg-neutral-200 text-neutral-900 border border-neutral-300"
                    : service.isMostPopular 
                        ? "bg-[#0370e3] hover:bg-blue-700 text-white" 
                        : "bg-[#0370e3] hover:bg-blue-700 text-white"),
            service.isComingSoon && "!bg-neutral-200 !text-neutral-400 !border-neutral-300 cursor-not-allowed"
          )}
        >
          {isSelected ? "Proceed" : (service.isComingSoon ? "Coming Soon" : (service.actionText || "Select Tier"))}
        </Button>

        <div className="mt-2 select-none">
          <span 
            className="text-2xl font-semibold opacity-90"
            style={neumorphicDebossedStyle}
          >
            a|p
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
