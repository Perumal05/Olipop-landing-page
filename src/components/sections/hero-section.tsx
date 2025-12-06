
'use client';
import * as React from 'react';
import { DrinkVariant } from '@/lib/drink-variants';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ArrowUp, ArrowDown, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
      <div className="sticky top-0 left-0 w-full h-screen">
        <Image
          src={variant.videoUrl}
          alt={`${variant.name} ${variant.subtitle}`}
          fill
          priority
          className="w-full h-full object-cover"
          key={variant.videoUrl}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center text-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            {/* Left Side Content */}
            <div
              className={cn(
                'w-full md:w-1/2 lg:w-2/5 space-y-6',
                isTransitioning ? 'content-fade-out' : 'content-fade-in'
              )}
              style={{textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}
            >
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
                style={{ color: variant.accentColor }}
              >
                {variant.name}
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight -mt-4">
                {variant.subtitle}
              </h2>
              <p className="max-w-md text-lg text-primary/80 text-balance">
                {variant.description}
              </p>
              <div className="flex space-x-4 pt-4">
                <Button variant="default" size="lg" className="rounded-full px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Variant Navigation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-primary pr-4 md:pr-8">
          <div
            className="text-8xl md:text-9xl font-black transition-colors duration-300"
            style={{ color: variant.accentColor }}
          >
            0{variantIndex + 1}
          </div>
          <div className="flex flex-col items-center space-y-4 ml-4">
            <button onClick={() => onVariantChange('prev')} className="group">
              <span className="text-sm uppercase tracking-widest">PREV</span>
              <ArrowUp className="h-6 w-6 mx-auto transition-transform group-hover:-translate-y-1" />
            </button>
            <div className="h-16 w-px bg-primary/50"></div>
            <button onClick={() => onVariantChange('next')} className="group">
              <ArrowDown className="h-6 w-6 mx-auto transition-transform group-hover:translate-y-1" />
              <span className="text-sm uppercase tracking-widest">NEXT</span>
            </button>
          </div>
        </div>

        {/* Bottom Social Icons */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-6 text-primary">
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
      </div>
    </section>
  );
}
