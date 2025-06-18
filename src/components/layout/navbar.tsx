import { Zap } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EE2238] to-[#BF1D67] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              ZenithForge
            </span>
          </Link>
          {/* Navigation links can be added here if needed */}
        </div>
      </div>
    </nav>
  );
}
