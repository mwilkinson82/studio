// src/ai/flows/clarity-summary.ts
'use server';
/**
 * @fileOverview Summarizes user needs and goals from the questionnaire.
 *
 * - summarizeClarity - A function that summarizes the user's needs and goals.
 * - ClaritySummaryInput - The input type for the summarizeClarity function.
 * - ClaritySummaryOutput - The return type for the summarizeClarity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClaritySummaryInputSchema = z.object({
  mindClarification: z.string().describe('What\s on your mind that could use clarity?'),
  situationContext: z.string().describe('What\s the situation around this issue?'),
  issueOrigin: z.string().describe('What do you think is really causing this issue?'),
  triedSolutions: z.string().describe('What have you already tried to resolve this?'),
  desiredOutcome: z.string().describe('Describe the outcome you’re hoping for.'),
  urgentPart: z.string().describe('Which part feels the most urgent or impactful right now?'),
  additionalContext: z.string().describe('Any additional context that might be helpful.'),
});

export type ClaritySummaryInput = z.infer<typeof ClaritySummaryInputSchema>;

const ClaritySummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the user’s needs and goals.'),
});

export type ClaritySummaryOutput = z.infer<typeof ClaritySummaryOutputSchema>;

export async function summarizeClarity(input: ClaritySummaryInput): Promise<ClaritySummaryOutput> {
  return claritySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'claritySummaryPrompt',
  input: {schema: ClaritySummaryInputSchema},
  output: {schema: ClaritySummaryOutputSchema},
  prompt: `Summarize the user's needs and goals based on the following questionnaire responses:

1.  What’s on your mind that could use clarity?: {{{mindClarification}}}
2.  What’s the situation around this issue?: {{{situationContext}}}
3.  What do you think is really causing this issue?: {{{issueOrigin}}}
4.  What have you already tried to resolve this?: {{{triedSolutions}}}
5.  Describe the outcome you’re hoping for: {{{desiredOutcome}}}
6.  Which part feels the most urgent or impactful right now?: {{{urgentPart}}}
7.  Any additional context that might be helpful: {{{additionalContext}}}

Provide a concise summary that captures the essence of their needs and desired outcomes in under 200 words.
`,
});

const claritySummaryFlow = ai.defineFlow(
  {
    name: 'claritySummaryFlow',
    inputSchema: ClaritySummaryInputSchema,
    outputSchema: ClaritySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
