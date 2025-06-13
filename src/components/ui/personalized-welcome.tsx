"use client";

import { useEffect, useState } from 'react';
import { generatePersonalizedWelcomeMessage, type PersonalizedWelcomeOutput } from '@/ai/flows/personalized-welcome';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertCircle, CheckCircle } from 'lucide-react';

export function PersonalizedWelcome() {
  const [welcome, setWelcome] = useState<PersonalizedWelcomeOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWelcomeMessage() {
      try {
        // In a real application, location would be dynamically inferred.
        // For this demo, we'll use a placeholder.
        const inferredLocation = "Nairobi, Kenya"; 
        const result = await generatePersonalizedWelcomeMessage({ location: inferredLocation });
        setWelcome(result);
      } catch (e) {
        console.error("Failed to generate personalized welcome:", e);
        setError("Could not load a personalized greeting at this time.");
      } finally {
        setLoading(false);
      }
    }

    fetchWelcomeMessage();
  }, []);

  if (loading) {
    return (
      <Alert className="mb-4 bg-secondary/50 border-secondary">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-headline">Just a moment...</AlertTitle>
        <AlertDescription>Crafting a special welcome for you.</AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle className="font-headline">Oops!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (welcome) {
    return (
      <Alert className="mb-4 bg-primary/10 border-primary/50 text-primary-foreground">
         <CheckCircle className="h-4 w-4 text-primary" />
        <AlertTitle className="font-headline text-primary">Hello there!</AlertTitle>
        <AlertDescription className="text-primary/90">{welcome.message}</AlertDescription>
      </Alert>
    );
  }

  return null;
}
