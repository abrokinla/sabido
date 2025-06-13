"use client";

import { useState, useMemo } from 'react';
import type { JobRecord } from '@/types';
import { mockJobs, industries, skillLevels } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Briefcase, MapPin, Search, CalendarDays, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function JobListingsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [skillLevelFilter, setSkillLevelFilter] = useState<JobRecord['skillLevel']>('Any');

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                               job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === '' || job.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesIndustry = industryFilter === 'All' || job.industry === industryFilter;
      const matchesSkillLevel = skillLevelFilter === 'Any' || job.skillLevel === skillLevelFilter;
      return matchesSearchTerm && matchesLocation && matchesIndustry && matchesSkillLevel;
    });
  }, [searchTerm, locationFilter, industryFilter, skillLevelFilter]);

  return (
    <section id="job-listings" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Curated Job Opportunities
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Find your next career move with our regularly updated job listings from across Africa.
          </p>
        </div>

        <Card className="mb-12 p-6 shadow-lg bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <Label htmlFor="search-term" className="text-sm font-medium">Search Jobs</Label>
              <div className="relative">
                <Input
                  id="search-term"
                  type="text"
                  placeholder="Keywords, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <Label htmlFor="location-filter" className="text-sm font-medium">Location</Label>
               <div className="relative">
                <Input
                  id="location-filter"
                  type="text"
                  placeholder="e.g., Nairobi, Lagos"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10"
                />
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <Label htmlFor="industry-filter" className="text-sm font-medium">Industry</Label>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger id="industry-filter">
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="skill-level-filter" className="text-sm font-medium">Skill Level</Label>
              <Select value={skillLevelFilter} onValueChange={(value) => setSkillLevelFilter(value as JobRecord['skillLevel'])}>
                <SelectTrigger id="skill-level-filter">
                  <SelectValue placeholder="Select Skill Level" />
                </SelectTrigger>
                <SelectContent>
                  {skillLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <Card key={job.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-background">
                <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
                   <Image src="https://placehold.co/400x200.png" alt={job.title} layout="fill" objectFit="cover" data-ai-hint="office work" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{job.title}</CardTitle>
                  <CardDescription className="text-foreground/90 font-semibold">{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2" /> {job.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase size={16} className="mr-2" /> {job.industry} - {job.skillLevel}
                  </div>
                   <div className="flex items-center text-muted-foreground">
                    <CalendarDays size={16} className="mr-2" /> Posted: {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                  <p className="text-foreground/80 pt-2 line-clamp-3">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <a href={job.applyLink || '#'} target="_blank" rel="noopener noreferrer">
                      Apply Now <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground py-10">No jobs match your current filters. Try adjusting your search!</p>
        )}
      </div>
    </section>
  );
}
