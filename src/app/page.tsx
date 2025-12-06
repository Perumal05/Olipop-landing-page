
'use client';

import * as React from 'react';
import { drinkVariants, type DrinkVariant } from '@/lib/drink-variants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import IngredientsSection from '@/components/sections/ingredients-section';
import NutritionSection from '@/components/sections/nutrition-section';
import ReviewsSection from '@/components/sections/reviews-section';
import FaqSection from '@/components/sections/faq-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import LoadingScreen from '@/components/loading-screen';

const sections = [
  'product',
  'ingredients',
  'nutrition',
  'reviews',
  'faq',
  'contact',
];

export default function Home() {
  const [variantIndex, setVariantIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const currentVariant: DrinkVariant = drinkVariants[variantIndex];

  React.useEffect(() => {
    // Simulate initial asset loading
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      setLoadingProgress(Math.min(progress, 100));
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Preload next and previous variant images
  React.useEffect(() => {
    if (!isLoading) {
      const nextIndex = (variantIndex + 1) % drinkVariants.length;
      const prevIndex = (variantIndex - 1 + drinkVariants.length) % drinkVariants.length;
      
      const nextVariantImage = new Image();
      nextVariantImage.src = drinkVariants[nextIndex].videoUrl;
      
      const prevVariantImage = new Image();
      prevVariantImage.src = drinkVariants[prevIndex].videoUrl;
    }
  }, [isLoading, variantIndex]);


  const handleVariantChange = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    // Corresponds to fade-out animation duration
    setTimeout(() => {
      setVariantIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % drinkVariants.length;
        } else {
          return (
            (prevIndex - 1 + drinkVariants.length) % drinkVariants.length
          );
        }
      });
      // Small delay to allow state to update before fade-in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100); 
    }, 350); 
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} progress={loadingProgress} />
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Header sections={sections} activeSection={activeSection} />
        <main>
          <HeroSection
            variant={currentVariant}
            variantIndex={variantIndex}
            onVariantChange={handleVariantChange}
            isTransitioning={isTransitioning}
          />
          <div id="product" className="scroll-mt-20">
            <AboutSection />
          </div>
          <div id="ingredients" className="scroll-mt-20">
            <IngredientsSection />
          </div>
          <div id="nutrition" className="scroll-mt-20">
            <NutritionSection />
          </div>
          <div id="reviews" className="scroll-mt-20">
            <ReviewsSection />
          </div>
          <div id="faq" className="scroll-mt-20">
            <FaqSection />
          </div>
          <div id="contact" className="scroll-mt-20">
            <FinalCtaSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
