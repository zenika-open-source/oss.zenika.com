import { ResourceCard } from '@/components/cards/resource-card';
import type { Resource } from '@/types';
import { BookOpen, FileText, Wrench, Youtube, LibraryBig } from 'lucide-react';

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Zenika Open Source – Bilan Hacktoberfest 2024',
    type: 'Blog Post',
    description: 'Throughout the year, Zenika\'s employees are active in the open-source world, whether through contributions to projects like Quarkus, GitLab, Vitamin, R2DevOps, Remotion, and many others, or as project maintainers',
    link: 'https://blog.zenika.com/2024/11/14/zenika-open-source-bilan-hacktoberfest-2024/',
    icon: FileText,
  },
  {
    id: '2',
    title: 'L’Hacktoberfest 2023 vu par Zenika',
    type: 'Blog Post',
    description: 'For this 2023 edition of Hacktoberfest, Zenika\'s employees once again rallied to promote open source and guide new people, whether from Zenika or not, into the world of open source.',
    link: 'https://blog.zenika.com/2023/12/01/lhacktoberfest-2023-vu-par-zenika/',
    icon: BookOpen,
  },
  {
    id: '3',
    title: 'Bilan Hacktoberfest 2022',
    type: 'Blog Post',
    description: 'For Hacktoberfest 2022, Zenika was active, as is often the case! In addition to 197 open-source contributions, Zenika also organized three events during October.',
    link: 'https://blog.zenika.com/2022/11/22/bilan-hacktoberfest-2022/',
    icon: Wrench,
  },
  {
    id: '4',
    title: 'Find an issue (🇫🇷)',
    type: 'Video',
    description: '',
    link: 'https://www.youtube.com/shorts/NgOZV-4gl2A',
    icon: Youtube,
  },
  {
    id: '5',
    title: 'Zenika Open Source - Make a good code review (🇫🇷)',
    type: 'Video',
    description: '',
    link: 'https://youtube.com/shorts/btNiCc4MHF4',
    icon: Youtube,
  },
  {
    id: '6',
    title: 'Zenika Open Source - Create a GitHub account (🇫🇷)',
    type: 'Video',
    description: '',
    link: 'https://youtube.com/shorts/sMMu8j81X8Q',
    icon: Youtube,
  },
  {
    id: '7',
    title: '3 advices to contribute in open source 🌐 (🇫🇷)',
    type: 'Video',
    description: '',
    link: 'https://youtube.com/shorts/K4Bfh6q_D3s',
    icon: Youtube,
  }
];

export function ResourceHub() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LibraryBig className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
             <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our curated collection of blog posts, documentation, tools, and videos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {mockResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
