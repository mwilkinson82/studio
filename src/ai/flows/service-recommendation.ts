// src/ai/flows/service-recommendation.ts
'use server';

/**
 * @fileOverview Recommends the best advisory service based on user responses to a questionnaire.
 *
 * - recommendService - A function that recommends an advisory service.
 * - ServiceRecommendationInput - The input type for the recommendService function.
 * - ServiceRecommendationOutput - The return type for the recommendService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceRecommendationInputSchema = z.object({
  clarity: z.string().describe('The user\'s main concern or challenge.'),
  context: z.string().describe('The situation surrounding the issue.'),
  rootCause: z.string().describe('The perceived root cause of the issue.'),
  previousAttempts: z.string().describe('Previous attempts to address the issue.'),
  successDefinition: z.string().describe('The desired outcome of the advisory service.'),
  urgentPart: z.string().describe('The most urgent or impactful part to focus on.'),
  additionalContext: z.string().describe('Any additional context or information.'),
});

export type ServiceRecommendationInput = z.infer<typeof ServiceRecommendationInputSchema>;

const ServiceRecommendationOutputSchema = z.object({
  serviceName: z.string().describe('The name of the recommended advisory service.'),
  justification: z.string().describe('The reasoning behind the service recommendation.'),
});

export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

export async function recommendService(input: ServiceRecommendationInput): Promise<ServiceRecommendationOutput> {
  return recommendServiceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `Based on the user's responses to the questionnaire, recommend the most appropriate advisory service from the following options:

- Insight Note – Tactical Expert Response: A single, focused response to your challenge. Clean, direct, and built for motion. Ideal for fast clarity and next steps without fluff.
- Strategic Memo – Written Strategic Guidance: A structured expert recommendation tailored to your issue. Prioritized, objective, and ready to implement.
- Strategic Briefing – Written + Loom Walkthrough: Includes your Advisory Memo plus a Loom video breaking down the logic and reasoning behind the strategy. For those who want nuance, depth, and fast execution clarity.
- Embedded Response – Written + Loom + Follow-Up: Includes your Strategic Briefing plus 3 days of private async refinement. Built for high-stakes pivots, evolving priorities, or rapid iteration.
- Direct Consulting with Marshall: Book a 1-on-1 with Marshall. Real-time, unfiltered advisory to close the gap, video conference call for 1 hour.

Consider the following user input:

Clarity: {{{clarity}}}
Context: {{{context}}}
Root Cause: {{{rootCause}}}
Previous Attempts: {{{previousAttempts}}}
Success Definition: {{{successDefinition}}}
Urgent Part: {{{urgentPart}}}
Additional Context: {{{additionalContext}}}

In addition to the service name, provide a brief justification for your recommendation.
`, // Changed from ``` to `
});

const recommendServiceFlow = ai.defineFlow(
  {
    name: 'recommendServiceFlow',
    inputSchema: ServiceRecommendationInputSchema,
    outputSchema: ServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
