
'use client';
import * as React from 'react';
import Image from 'next/image';
import { DrinkVariant } from '@/lib/drink-variants';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ArrowUp, ArrowDown, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  variant: DrinkVariant;
  variantIndex: number;
  onVariantChange: (direction: 'next' | 'prev') => void;
  isTransitioning: boolean;
}

export default function HeroSection({
  variant,
  variantIndex,
  onVariantChange,
  isTransitioning,
}: HeroSectionProps) {
  
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          key={variant.imageUrl}
          src={variant.imageUrl}
          alt={`${variant.name} soda background`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          {/* Left Side Content */}
          <div
            className={cn(
              'w-full md:w-1/2 lg:w-2/5 space-y-4 md:space-y-6 text-center md:text-left',
              isTransitioning ? 'content-fade-out' : 'content-fade-in'
            )}
            style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}
          >
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
              style={{ color: variant.accentColor }}
            >
              {variant.name}
            </h1>
            <h2 className="font-headline text-xl md:text-3xl font-semibold uppercase tracking-widest text-primary/90 -mt-2 md:-mt-4">
              {variant.subtitle}
            </h2>
            <p className="max-w-md text-base md:text-lg text-primary/80 text-balance mx-auto md:mx-0">
              {variant.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <Button size="lg" className="rounded-full px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Variant Navigation */}
      <div className="absolute right-4 bottom-28 md:right-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 flex items-center text-primary md:pr-4 lg:pr-8 z-20">
        <div
          className="text-6xl md:text-8xl lg:text-9xl font-black transition-colors duration-300"
          style={{ color: variant.accentColor }}
        >
          0{variantIndex + 1}
        </div>
        <div className="flex flex-col items-center space-y-2 md:space-y-4 ml-2 md:ml-4">
          <button onClick={() => onVariantChange('prev')} className="group">
            <span className="hidden md:inline text-sm uppercase tracking-widest">PREV</span>
            <ArrowUp className="h-6 w-6 mx-auto transition-transform group-hover:-translate-y-1" />
          </button>
          <div className="h-12 md:h-16 w-px bg-primary/50"></div>
          <button onClick={() => onVariantChange('next')} className="group">
            <ArrowDown className="h-6 w-6 mx-auto transition-transform group-hover:translate-y-1" />
            <span className="hidden md:inline text-sm uppercase tracking-widest">NEXT</span>
          </button>
        </div>
      </div>

      {/* Bottom Social Icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-6 text-primary z-20">
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Icons.Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Icons.Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <Icons.Facebook className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
