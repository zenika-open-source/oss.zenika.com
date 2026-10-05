import { ExternalLink, Github, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { SponsoredPerson } from '@/types';

interface SponsorCardProps {
  person: SponsoredPerson;
}

export function SponsorCard({ person }: SponsorCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-border/60 hover:border-primary/40 group">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all flex-shrink-0">
            <Image
              src={person.avatarUrl}
              alt={person.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-xl font-bold truncate">
              {person.name}
            </CardTitle>
            <Link
              href={person.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-muted-foreground hover:text-primary transition-colors mt-0.5"
            >
              <Github className="h-3.5 w-3.5 mr-1" />@{person.githubHandle}
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 uppercase tracking-wider mb-1.5">
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>Sponsored Project</span>
          </div>
          <Link
            href={person.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            {person.projectName}
            <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Link>
          <CardDescription className="mt-2 text-sm text-foreground/70 leading-relaxed">
            {person.description}
          </CardDescription>
        </div>

        {person.tags && person.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {person.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal bg-secondary/60 text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 gap-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Link
            href={person.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Project
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:bg-accent"
          title={`View ${person.name}'s GitHub profile`}
        >
          <Link
            href={person.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
