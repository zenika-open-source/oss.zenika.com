import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ContributionStats } from '@/components/sections/contribution-stats';
import { EventsCalendar } from '@/components/sections/events-calendar';
import { FeaturedVideos } from '@/components/sections/featured-videos';
import { ResourceHub } from '@/components/sections/resource-hub';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <ContributionStats />
        <EventsCalendar />
        <FeaturedVideos />
        <ResourceHub />
      </main>
      <Footer />
    </div>
  );
}
