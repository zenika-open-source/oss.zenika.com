import { EventCard } from '@/components/cards/event-card';
import type { Event } from '@/types';
import { CalendarClock } from 'lucide-react';

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Zenika Open Source Summit 2024',
    date: 'October 26-28, 2024',
    description: 'Join us for our annual summit celebrating open source contributions, with keynotes from Zenika experts and industry leaders.',
    imageUrl: 'https://placehold.co/400x200.png',
    imageHint: 'conference tech',
    registrationUrl: '#',
    location: 'Paris, France & Online',
  },
  {
    id: '2',
    name: 'Workshop: Advanced Kubernetes Patterns',
    date: 'November 15, 2024',
    description: 'A hands-on workshop diving deep into advanced Kubernetes deployment strategies and management techniques.',
    imageUrl: 'https://placehold.co/400x200.png',
    imageHint: 'workshop code',
    registrationUrl: '#',
    location: 'Online',
  },
  {
    id: '3',
    name: 'AI Ethics in Open Source Panel',
    date: 'December 5, 2024',
    description: 'A thought-provoking panel discussion on the ethical implications of AI in open source projects.',
    imageUrl: 'https://placehold.co/400x200.png',
    imageHint: 'discussion panel',
    registrationUrl: '#',
    location: 'Online',
  },
];

export function EventsCalendar() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CalendarClock className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and conferences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
