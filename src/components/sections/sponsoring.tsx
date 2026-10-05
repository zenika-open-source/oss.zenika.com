import { HeartHandshake } from 'lucide-react';
import { SponsorCard } from '@/components/cards/sponsor-card';
import type { SponsoredPerson } from '@/types';

const sponsoredPeople: SponsoredPerson[] = [
  {
    id: '1',
    name: 'Aurélie Vache',
    avatarUrl: '/sponsoring/aurelie-vache.png',
    githubUrl: 'https://github.com/scraly',
    githubHandle: 'scraly',
    projectName: 'developers.events',
    projectUrl: 'https://developers.events/',
    description:
      'A directory to discover tech conferences, meetups, and developer events in France and around the globe.',
    tags: ['Events', 'Meetups', 'Community'],
  },
  {
    id: '2',
    name: 'Benjamin Petetot',
    avatarUrl: '/sponsoring/benjamin-petetot.png',
    githubUrl: 'https://github.com/bpetetot',
    githubHandle: 'bpetetot',
    projectName: 'Conference Hall',
    projectUrl: 'https://conference-hall.io/',
    description:
      'An open-source Call for Papers (CFP) platform simplifying proposal submissions and event organization.',
    tags: ['CFP', 'Conferences', 'Open Source'],
  },
  {
    id: '3',
    name: 'Hugo Gresse',
    avatarUrl: '/sponsoring/hugo-gresse.png',
    githubUrl: 'https://github.com/HugoGresse',
    githubHandle: 'HugoGresse',
    projectName: 'OpenFeedback',
    projectUrl: 'https://openfeedback.io/',
    description:
      'An open-source solution providing instant and actionable feedback for conference sessions and tech talks.',
    tags: ['Feedback', 'Speakers', 'Open Source'],
  },
];

export function Sponsoring() {
  return (
    <section id="sponsoring" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HeartHandshake className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
              Sponsoring
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Supporting open source also means empowering the individuals behind
            great community initiatives. Meet the creators and projects Zenika
            is proud to sponsor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsoredPeople.map((person) => (
            <SponsorCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
