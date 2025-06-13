import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { BenefitHighlightsSection } from '@/components/sections/benefit-highlights-section';
import { JobListingsSection } from '@/components/sections/job-listings-section';
import { SuccessStoriesSection } from '@/components/sections/success-stories-section';
import { NewsletterSignupSection } from '@/components/sections/newsletter-signup-section';

export default function SabidoLaunchpadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BenefitHighlightsSection />
        <JobListingsSection />
        <SuccessStoriesSection />
        <NewsletterSignupSection />
      </main>
      <Footer />
    </div>
  );
}
