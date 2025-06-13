import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, Briefcase, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary mb-4" />,
    title: 'Skill Tips',
    description: 'Access practical tips and resources to enhance your digital skills and stay ahead in the job market.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
    title: 'Job Updates',
    description: 'Receive daily and weekly updates on curated job opportunities relevant to your skills and location.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
    title: 'Career Growth',
    description: 'Get guidance on career development, learn from success stories, and plan your professional journey.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: 'Mentorship',
    description: 'Connect with experienced professionals for mentorship and guidance to navigate your career path.',
  },
];

export function BenefitHighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Why Join Sabido Africa?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We provide a comprehensive platform to help you upskill, connect with opportunities, and achieve career stability.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                {benefit.icon}
                <CardTitle className="font-headline text-2xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
