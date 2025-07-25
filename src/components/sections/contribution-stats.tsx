import { FolderGit2, GitCommit, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    id: '1',
    icon: Users,
    value: '50+',
    label: 'Zenika members contributor to Open Source',
  },
  {
    id: '2',
    icon: GitCommit,
    value: '100+',
    label: 'Contributions per year for all Zenika',
  },
  {
    id: '6',
    icon: FolderGit2,
    value: '100+',
    label: 'Projects Maintained',
  },
];

export function ContributionStats() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-[#BF1D67] bg-clip-text text-transparent">
              Our Contributions
            </span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Zenika's commitment to Open Source by the numbers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-3">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.id}
                className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <CardHeader className="pb-2">
                  <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit mb-3">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-title">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
