import Image from 'next/image';
import { Button } from '@/components/ui/button';
import imageData from '@/lib/placeholder-images.json';

export default function AboutSection() {
  const aboutImage = imageData.placeholderImages.find(
    (img) => img.id === 'about-image'
  );

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">
              Our Story
            </h2>
            <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-6 text-balance">
              A New Kind of Soda
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Olipop was born from a desire to create a delicious, refreshing soda that's actually good for you. We took the classic flavors you love and reimagined them with plant-based fiber, prebiotics, and a fraction of the sugar. It's soda, but smarter.
            </p>
            <Button size="lg" className="rounded-full px-8">Learn More</Button>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <div className="relative w-full max-w-sm">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={800}
                  className="rounded-xl shadow-2xl object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
