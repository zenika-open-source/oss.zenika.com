import { ResourceCard } from '@/components/cards/resource-card';
import type { Resource } from '@/types';
import { BookOpen, FileText, Wrench, Youtube, LibraryBig } from 'lucide-react';

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Zenika Open Source – Bilan Hacktoberfest 2024',
    type: 'Blog Post',
    description: 'An in-depth guide on leveraging Kestra for advanced Kubernetes orchestration and management.',
    link: 'https://blog.zenika.com/2024/11/14/zenika-open-source-bilan-hacktoberfest-2024/',
    icon: FileText,
  },
  {
    id: '2',
    title: 'Zenith CI/CD Platform Documentation',
    type: 'Documentation',
    description: 'Comprehensive documentation for our Zenith CI/CD platform, covering setup, configuration, and best practices.',
    link: '#',
    icon: BookOpen,
  },
  {
    id: '3',
    title: 'DevStream: Real-time Log Analyzer',
    type: 'Tool',
    description: 'An open source tool for real-time log analysis and monitoring, helping developers debug faster.',
    link: '#',
    icon: Wrench,
  },
  {
    id: '4',
    title: 'Intro to Open Source Contribution by Zenika',
    type: 'Video',
    description: 'A beginner-friendly video guide on how to start contributing to open source projects at Zenika and beyond.',
    link: '#',
    icon: Youtube,
  },
];

export function ResourceHub() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LibraryBig className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
             <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
              Resource Hub
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our curated collection of blog posts, documentation, tools, and videos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
