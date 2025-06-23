import { Zap, Users } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Opensource by Zenika
            </span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" asChild className="px-2 sm:px-3">
              <Link href="/contributors" className="text-sm font-medium hover:text-primary">
                <Users className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Top Contributors</span>
              </Link>
            </Button>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
