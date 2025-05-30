'use client';

import React, { useState } from 'react';
import { ServiceCard, type ServiceTier } from '@/components/services/ServiceCard';
import { services as servicesDataFromConfig } from '@/config/services'; 
import Image from 'next/image';
import { Send as SendIcon } from "lucide-react"; 
import { cn } from '@/lib/utils';

const servicesData: ServiceTier[] = servicesDataFromConfig.map(s => ({
  ...s,
  isMostPopular: s.id === 'embedded-response', 
  isElite: s.id === 'direct-consulting',
  actionText: s.id === 'direct-consulting' ? "Book on Calendly" : "Select Tier",
}));

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const yourEmailAddress = "info@altitudelogicpressure.com"; 

  const handleSelectService = (serviceId: string) => {
    if (serviceId === 'direct-consulting') {
      setSelectedServiceId(selectedServiceId === serviceId ? null : serviceId);
      return; 
    }
    if (selectedServiceId === serviceId) {
      setSelectedServiceId(null);
    } else {
      setSelectedServiceId(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <section className="mb-10 md:mb-12 pt-4 md:pt-0">
        <div className="max-w-md sm:max-w-lg mx-auto bg-white rounded-lg shadow-2xl">
          <Image 
            src="/alp + stripe.png" 
            alt="a|p securely powered by Stripe" 
            width={500} 
            height={125} 
            layout="responsive" 
            className="rounded-lg" 
            priority 
          />
        </div>
      </section>

      <header className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-4 tracking-tight pt-6 md:pt-0">
          Choose Your Path to Clarity
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          Select the a|p Advisory tier that aligns with your current strategic needs. Each is designed for precision, speed, and actionable insight.
        </p>
      </header>

      {/* Flexbox container for service cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-[1400px] mx-auto items-stretch">
        {servicesData.map(service => (
          // Wrapper div for each card to control flex item width
          // w-full for mobile (1 column)
          // md:w-[calc(50%-theme(spacing.4))] -> 2 columns with md:gap-8 (2rem, so 1rem per side)
          // xl:w-[calc(25%-theme(spacing.6))] -> 4 columns with md:gap-8 (2rem, so 1.5rem per 3 gaps / 4 items = complex)
          // Simpler: use flex-basis or Tailwind's fractionals if available or explicit percentages
          <div key={service.id} 
               className={cn(
                 "flex", // Added to ensure ServiceCard (which is flex flex-col) stretches properly
                 "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1.125rem)]",
                 "max-w-sm" // Max width for a single card to prevent it from getting too large on its own row
                )}
          >
            <ServiceCard 
              service={service} 
              isSelected={selectedServiceId === service.id}
              onSelect={() => handleSelectService(service.id)}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-16 md:mt-24 space-y-4">
        <div>
            <p className="text-neutral-600 mb-2">Need something more tailored or have questions?</p>
            <a 
              href={`mailto:${yourEmailAddress}?subject=Custom Engagement Inquiry`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium underline hover:no-underline transition-colors"
            >
              <SendIcon className="mr-2 h-4 w-4" />
              Discuss a Custom Engagement
            </a>
        </div>
        <div className="flex justify-center items-center space-x-6 pt-4 opacity-75">
            <Image src="/Stripe Logo.gif" alt="Stripe Logo" width={70} height={28} style={{ height: '28px', width: 'auto'}} /> 
            <Image src="/Calendly Logo.png" alt="Calendly Logo" width={100} height={28} style={{ height: '28px', width: 'auto'}}/>
        </div>
      </div>
    </div>
  );
}
