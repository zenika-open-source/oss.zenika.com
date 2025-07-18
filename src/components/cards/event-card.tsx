import { CalendarDays, MapPin, Ticket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {event.imageUrl && (
        <div className="relative w-full h-48 rounded-t-md overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={event.imageHint || 'event banner'}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{event.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <CalendarDays className="mr-2 h-4 w-4 text-accent" />
          <span>{event.date}</span>
        </div>
        {event.location && (
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <MapPin className="mr-2 h-4 w-4 text-accent" />
            <span>{event.location}</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{event.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="default"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Link
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ticket className="mr-2 h-4 w-4" />
            Register / Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
