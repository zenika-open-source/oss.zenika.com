import { CodeXml } from 'lucide-react';
import { ProjectCard } from '@/components/cards/project-card';
import type { Project } from '@/types';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Promote open source project',
    description: '📄 How to promote my open source project?',
    imageUrl: '/promote-opensource.jpeg',
    imageHint: 'ai workflow',
    repoUrl:
      'https://github.com/zenika-open-source/promote-open-source-project',
    tags: ['opensource', 'promotion'],
  },
  {
    id: '2',
    name: 'Awesome Remote',
    description: '😎 Awesome lists about remote work.',
    imageUrl: '/awesome-remote.jpeg',
    imageHint: 'ui components',
    repoUrl: 'https://github.com/zenika-open-source/awesome-remote-work',
    tags: ['awesome', 'remote'],
  },
  {
    id: '3',
    name: 'The Duck Gallery',
    description:
      'A fun project to propose an easy and fun way to make your first contribution on an open source project.',
    imageUrl: '/the-duck-gallery.png',
    imageHint: 'blockchain security',
    repoUrl: 'https://github.com/zenika-open-source/the-duck-gallery',
    tags: ['opensource', 'Beginner', 'Fun', 'Duck', 'Zenikanard'],
  },
  {
    id: '4',
    name: 'Code-moi un mouton',
    description:
      'A starter project to animate workshops in school to teach the children some basics in programmation.',
    imageUrl: '/code-moi-mouton.jpeg',
    imageHint: 'blockchain security',
    repoUrl: 'https://github.com/zenika-open-source/code-moi-un-mouton',
    tags: ['School', 'Scratch'],
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
            Discover innovative open source projects crafted by the talented
            minds at Zenika.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
