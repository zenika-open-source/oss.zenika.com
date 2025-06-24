import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import type { Resource } from '@/types';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = resource.icon;
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Icon className="h-6 w-6 mr-3 text-accent" />
          <CardTitle className="text-xl">{resource.title}</CardTitle>
        </div>
        {resource.type !== "WhitePaper" && (
          <Badge variant="outline" className="w-fit border-primary text-primary">{resource.type}</Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{resource.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-accent hover:text-accent/80 p-0">
          <Link href={resource.link} target="_blank" rel="noopener noreferrer">
            Access Resource
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
