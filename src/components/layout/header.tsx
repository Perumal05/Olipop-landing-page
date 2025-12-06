'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeaderProps {
  sections: string[];
  activeSection: string | null;
}

export default function Header({ sections, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center text-primary">
            <Image
              src="https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Logos/OlipopVector.png"
              alt="Olipop Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary',
                  activeSection === section
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
