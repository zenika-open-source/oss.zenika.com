import { ResourceCard } from '@/components/cards/resource-card';
import type { Resource } from '@/types';
import { Youtube, PlaySquare, LucideIcon } from 'lucide-react';

const mockWhitePaper: Resource[] = [
  {
    id: '1',
    link: 'https://github.com/zenika-open-source/open-source-white-paper/blob/master/en/01-getting-started.md',
    title: 'Chapter 1: Getting started',
    type: 'WhitePaper',
    description: '',
    icon: Youtube
  },
  {
    id: '2',
    link: 'https://github.com/zenika-open-source/open-source-white-paper/blob/master/en/02-preparing-your-project-being-open-sourced.md',
    title: 'Chapter 2: Preparing your project being open sourced',
    type: 'WhitePaper',
    description: '',
    icon: Youtube
  },
  {
    id: '3',
    link: 'string',
    title: 'Chapter 3: Promotion',
    type: 'WhitePaper',
    description: '',
    icon: Youtube
  },
  {
    id: '4',
    link: 'https://github.com/zenika-open-source/open-source-white-paper/blob/master/fr/04-licences.md',
    title: 'Chapter 4: Licenses',
    type: 'WhitePaper',
    description: '',
    icon: Youtube
  }
];

export function WhitePaper() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PlaySquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              White Paper
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              White paper about Open Source by Zenika.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockWhitePaper.map((whitePaper) => (
            <ResourceCard key={whitePaper.id} resource={whitePaper} />
          ))}
        </div>
      </div>
    </section>
  );
}