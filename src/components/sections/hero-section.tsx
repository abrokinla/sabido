import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PersonalizedWelcome } from '@/components/ui/personalized-welcome';

export function HeroSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-6">
              <PersonalizedWelcome />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
              Welcome to Sabido Africa!
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8">
              We empower Africans with in-demand digital skills and connect them to job opportunities. Upskill. Connect. Stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md">
                <Link href="#job-listings">Explore Job Listings</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 font-semibold shadow-md">
                <Link href="#newsletter">Join Our Community</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Empowered African professionals working with technology"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="empowerment digital Africa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
