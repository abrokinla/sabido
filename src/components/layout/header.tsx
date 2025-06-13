import Link from 'next/link';
import { Cloud, Lightbulb } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center group text-primary hover:opacity-90 transition-opacity">
          <div className="flex items-center mr-2">
            <Cloud className="h-9 w-9 sm:h-10 sm:w-10 text-primary transition-colors duration-300 group-hover:text-primary/80" />
            <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-accent transition-colors duration-300 group-hover:text-accent/80 -ml-6 sm:-ml-7 mb-1 sm:mb-1" />
          </div>
          <span className="text-2xl sm:text-3xl font-headline font-bold">
            Sabido <span className="text-accent">Launchpad</span>
          </span>
        </Link>
        <div className="mt-2 sm:mt-0 w-full sm:w-auto max-w-md">
           {/* PersonalizedWelcome will be shown on the hero section for better visibility */}
        </div>
      </div>
    </header>
  );
}
