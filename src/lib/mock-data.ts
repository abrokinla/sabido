import type { JobRecord, SuccessStoryRecord } from '@/types';

export const mockJobs: JobRecord[] = [
  {
    id: '1',
    title: 'Digital Marketing Specialist',
    company: 'Tech Solutions Ltd.',
    location: 'Nairobi, Kenya',
    industry: 'Technology',
    skillLevel: 'Mid-Level',
    description: 'Lead digital marketing campaigns and drive online presence. Proven experience in SEO, SEM, and social media marketing required.',
    postedDate: '2024-07-28',
    applyLink: '#',
  },
  {
    id: '2',
    title: 'Junior Software Developer',
    company: 'Innovate Africa Inc.',
    location: 'Lagos, Nigeria',
    industry: 'Software',
    skillLevel: 'Entry-Level',
    description: 'Join a dynamic team to build cutting-edge web applications. Basic knowledge of JavaScript, HTML, and CSS is a plus.',
    postedDate: '2024-07-27',
    applyLink: '#',
  },
  {
    id: '3',
    title: 'Content Creator & Manager',
    company: 'Media Bloom Agency',
    location: 'Accra, Ghana',
    industry: 'Media',
    skillLevel: 'Mid-Level',
    description: 'Create engaging content across multiple platforms. Strong writing and video editing skills needed.',
    postedDate: '2024-07-26',
    applyLink: '#',
  },
  {
    id: '4',
    title: 'Data Analyst',
    company: 'Fintech Group SA',
    location: 'Johannesburg, South Africa',
    industry: 'Finance',
    skillLevel: 'Senior-Level',
    description: 'Analyze large datasets to provide actionable insights. Expertise in SQL, Python, and data visualization tools required.',
    postedDate: '2024-07-25',
    applyLink: '#',
  },
];

export const mockSuccessStories: SuccessStoryRecord[] = [
  {
    id: '1',
    quote: "Sabido Africa helped me land my dream job in tech! The resources and mentorship were invaluable.",
    name: 'Aisha K.',
    role: 'Software Developer, Nairobi',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional portrait african woman',
  },
  {
    id: '2',
    quote: "The skill tips and job updates from Sabido opened doors I never thought possible. Highly recommend!",
    name: 'John O.',
    role: 'Digital Marketer, Lagos',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional portrait african man',
  },
  {
    id: '3',
    quote: "Thanks to Sabido, I upskilled and found a remote job that offers stability and growth. Truly life-changing!",
    name: 'Fatima Z.',
    role: 'Graphic Designer, Remote',
    imageUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional portrait woman hijab',
  },
];

export const industries = ['All', 'Technology', 'Software', 'Media', 'Finance', 'Healthcare', 'Education'];
export const skillLevels: JobRecord['skillLevel'][] = ['Any', 'Entry-Level', 'Mid-Level', 'Senior-Level'];
