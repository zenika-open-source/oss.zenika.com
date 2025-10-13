import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  repoUrl: string;
  tags?: string[];
};

export type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  registrationUrl: string;
  location?: string;
};

export type Resource = {
  id: string;
  title: string;
  type: 'Blog Post' | 'Documentation' | 'Tool' | 'Video' | 'WhitePaper';
  description: string;
  link: string;
  icon: LucideIcon;
};

export type Contributor = {
  id: string;
  name: string;
  avatarUrl: string | null;
  imageHint: string;
  prCount: number;
  mrCount: number;
  totalContributions: number;
  githubHandle?: string;
  gitlabHandle?: string;
};
