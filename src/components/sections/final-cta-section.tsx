import Image from 'next/image';
import { Button } from '@/components/ui/button';
import imageData from '@/lib/placeholder-images.json';

export default function FinalCtaSection() {
  const ctaImage = imageData.placeholderImages.find(
    (img) => img.id === 'cta-grape-can'
  );

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:order-last">
            {ctaImage && (
              <div className="relative w-full max-w-sm">
                 <Image
                  src={ctaImage.imageUrl}
                  alt={ctaImage.description}
                  width={600}
                  height={600}
                  className="rounded-full shadow-2xl object-cover"
                  data-ai-hint={ctaImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-6 text-balance">
              Ready to Taste the Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Join thousands of happy customers and make the switch to a healthier, tastier soda. Your gut will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-8">Shop All Flavors</Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">Find a Store</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
