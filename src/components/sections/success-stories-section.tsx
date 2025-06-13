import Image from 'next/image';
import { mockSuccessStories } from '@/lib/mock-data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react'; // Using Star for testimonial rating visual

export function SuccessStoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Inspirational Success Stories
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Hear from members of our community who have transformed their careers with Sabido Africa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSuccessStories.map(story => (
            <Card key={story.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              <CardHeader className="relative p-0">
                <div className="absolute top-4 right-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <p className="text-foreground/80 italic text-center mb-6 text-lg">&ldquo;{story.quote}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex flex-col items-center border-t pt-6">
                <Avatar className="w-20 h-20 mb-3 border-2 border-primary">
                  <AvatarImage src={story.imageUrl} alt={story.name} data-ai-hint={story.dataAiHint} />
                  <AvatarFallback>{story.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h4 className="font-headline text-xl font-semibold text-primary">{story.name}</h4>
                <p className="text-sm text-muted-foreground">{story.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
