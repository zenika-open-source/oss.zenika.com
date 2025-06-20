import { ProjectCard } from '@/components/cards/project-card';
import type { Project } from '@/types';
import { CodeXml } from 'lucide-react';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'NebulaFlow',
    description: 'An AI-powered workflow automation tool designed to streamline complex data processing pipelines.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'ai workflow',
    repoUrl: 'https://github.com/zenika-open-source/nebula-flow',
    tags: ['AI', 'Python', 'Kubernetes', 'Cloud'],
  },
  {
    id: '2',
    name: 'QuantumLeap UI',
    description: 'A modern, accessible component library for building next-generation user interfaces with ease.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'ui components',
    repoUrl: 'https://github.com/zenika-open-source/quantumleap-ui',
    tags: ['React', 'TypeScript', 'Storybook', 'Accessibility'],
  },
  {
    id: '3',
    name: 'ChronoGuard',
    description: 'A decentralized identity management system leveraging blockchain for enhanced security and privacy.',
    imageUrl: 'https://placehold.co/400x250.png',
    imageHint: 'blockchain security',
    repoUrl: 'https://github.com/zenika-open-source/chronoguard',
    tags: ['Blockchain', 'Go', 'Cryptography', 'Identity'],
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CodeXml className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover innovative open source projects crafted by the talented minds at Zenika.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
