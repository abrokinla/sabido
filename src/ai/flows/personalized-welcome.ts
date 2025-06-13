'use server';

/**
 * @fileOverview Generates a personalized welcome message for new visitors based on their inferred location.
 *
 * - generatePersonalizedWelcomeMessage - A function that generates the personalized welcome message.
 * - PersonalizedWelcomeInput - The input type for the generatePersonalizedWelcomeMessage function.
 * - PersonalizedWelcomeOutput - The return type for the generatePersonalizedWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeInputSchema = z.object({
  location: z
    .string()
    .describe("The visitor's inferred location, e.g., 'Nairobi, Kenya'."),
});
export type PersonalizedWelcomeInput = z.infer<typeof PersonalizedWelcomeInputSchema>;

const PersonalizedWelcomeOutputSchema = z.object({
  message: z.string().describe('The personalized welcome message.'),
});
export type PersonalizedWelcomeOutput = z.infer<typeof PersonalizedWelcomeOutputSchema>;

export async function generatePersonalizedWelcomeMessage(
  input: PersonalizedWelcomeInput
): Promise<PersonalizedWelcomeOutput> {
  return personalizedWelcomeFlow(input);
}

const personalizedWelcomePrompt = ai.definePrompt({
  name: 'personalizedWelcomePrompt',
  input: {schema: PersonalizedWelcomeInputSchema},
  output: {schema: PersonalizedWelcomeOutputSchema},
  prompt: `You are a welcoming assistant for Sabido Africa, a digital empowerment community focused on equipping Africans with market-relevant digital skills and connecting them to job opportunities.

  Generate a personalized welcome message for a new visitor from {{location}}. The message should highlight relevant local job opportunities and success stories, and motivate the visitor to explore Sabido Africa further.

  The message should be concise and engaging, no more than two sentences.
  `,
});

const personalizedWelcomeFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeFlow',
    inputSchema: PersonalizedWelcomeInputSchema,
    outputSchema: PersonalizedWelcomeOutputSchema,
  },
  async input => {
    const {output} = await personalizedWelcomePrompt(input);
    return output!;
  }
);
