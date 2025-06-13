"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignupSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription for:', email);
    toast({
        title: "Subscribed!",
        description: `Thanks for subscribing, ${email}! Keep an eye on your inbox.`,
        variant: "default",
        className: "bg-primary text-primary-foreground border-primary",
      });
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-6 md:p-10 shadow-xl bg-background">
          <CardHeader className="text-center">
             <MailCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Join the Movement!
            </CardTitle>
            <CardDescription className="text-lg text-foreground mt-2">
              Subscribe to our newsletter for the latest skill tips, job updates, and career insights delivered directly to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow text-base"
                aria-label="Email for newsletter"
              />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
