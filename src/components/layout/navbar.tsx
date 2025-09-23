import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/zenika-opensource-logo.png"
              alt="Open source by Zenika Logo"
              width={32}
              height={32}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Open source by Zenika
            </span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/contributors">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Contributors</span>
              </Button>
            </Link>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
