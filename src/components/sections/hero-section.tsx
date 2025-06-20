import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center pt-16">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
        data-ai-hint="technology abstract"
        priority
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent">
            ZenithForge
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Empowering the future of technology with Open Source contributions by Zenika. Discover, learn, and collaborate.
        </p>
        <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
