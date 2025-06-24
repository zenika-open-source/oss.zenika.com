import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ContributionStats } from '@/components/sections/contribution-stats';
import { ResourceHub } from '@/components/sections/resource-hub';
import { WhitePaper } from '@/components/sections/white-paper';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <WhitePaper/>
        <ContributionStats />
        <ResourceHub />
      </main>
      <Footer />
    </div>
  );
}
