import { Github, Gitlab, Users } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Contributor } from '@/types';

type HacktoberfestData = [
  string,
  {
    name: string;
    agency: string;
    github: {
      handle: string;
      nbContributions: number;
    };
    gitlab: {
      handle: string;
      nbContributions: number;
    };
  },
][];

async function getHacktoberfestData(): Promise<HacktoberfestData> {
  try {
    const response = await fetch(
      'https://europe-west1-github-insights-247314.cloudfunctions.net/hacktoberfest',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Hacktoberfest data:', error);
    return [];
  }
}

function transformToContributors(data: HacktoberfestData): Contributor[] {
  return data.map(([id, contributor]) => ({
    id,
    name: contributor.name,
    avatarUrl: `https://github.com/${contributor.github.handle}.png?size=40`,
    imageHint: 'avatar person',
    prCount: contributor.github.nbContributions,
    mrCount: contributor.gitlab.nbContributions,
    totalContributions:
      contributor.github.nbContributions + contributor.gitlab.nbContributions,
    githubHandle: contributor.github.handle,
    gitlabHandle: contributor.gitlab.handle,
  }));
}

const getContributors = async (): Promise<Contributor[]> => {
  const data = await getHacktoberfestData();
  const contributors = transformToContributors(data);

  return contributors.sort(
    (a, b) => b.totalContributions - a.totalContributions,
  );
};

// Revalidate every 30 minutes (1800 seconds)
export const revalidate = 1800;

export default async function ContributorsPage() {
  const contributors = await getContributors();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 pt-16">
          <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              Contributors
            </span>
          </h1>
        </div>

        <div className="overflow-x-auto bg-card p-4 sm:p-6 rounded-lg shadow-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contributor</TableHead>
                <TableHead className="text-center hidden sm:table-cell">
                  PRs
                </TableHead>
                <TableHead className="text-center hidden sm:table-cell">
                  MRs
                </TableHead>
                <TableHead className="text-right">
                  Total Contributions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contributors.map((contributor) => (
                <TableRow key={contributor.id} className="hover:bg-muted/50">
                  <TableCell className="align-middle">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={contributor.avatarUrl}
                          alt={contributor.name}
                          data-ai-hint={contributor.imageHint}
                        />
                        <AvatarFallback>
                          {contributor.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-base">
                            {contributor.name}
                          </span>
                          <div className="flex gap-1">
                            {contributor.githubHandle && (
                              <a
                                href={`https://github.com/${contributor.githubHandle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                                title={`GitHub: ${contributor.githubHandle}`}
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                            {contributor.gitlabHandle && (
                              <a
                                href={`https://gitlab.com/${contributor.gitlabHandle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                                title={`GitLab: ${contributor.gitlabHandle}`}
                              >
                                <Gitlab className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center align-middle hidden sm:table-cell">
                    {contributor.prCount}
                  </TableCell>
                  <TableCell className="text-center align-middle hidden sm:table-cell">
                    {contributor.mrCount}
                  </TableCell>
                  <TableCell className="text-right font-bold text-lg text-primary align-middle">
                    {contributor.totalContributions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
