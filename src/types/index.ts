export interface JobRecord {
  id: string;
  title: string;
  company: string;
  location: string;
  industry: string;
  skillLevel: 'Entry-Level' | 'Mid-Level' | 'Senior-Level' | 'Any';
  description: string;
  postedDate: string;
  applyLink?: string;
}

export interface SuccessStoryRecord {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint?: string;
}
