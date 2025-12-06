import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';

const reviews = [
  {
    name: 'Sarah L.',
    avatarId: 'review-avatar-1',
    rating: 5,
    text: "I'm obsessed! Olipop is my go-to afternoon drink. The Cherry Cola is nostalgic but so much better for you. I can't get enough.",
  },
  {
    name: 'Mike R.',
    avatarId: 'review-avatar-2',
    rating: 4.5,
    text: 'A great alternative to regular soda. Tastes amazing and I love the gut health benefits. The Grape flavor is a must-try.',
  },
  {
    name: 'Jessica P.',
    avatarId: 'review-avatar-3',
    rating: 5,
    text: "Finally, a soda I don't feel guilty about drinking. All the flavors are fantastic and it's become a staple in my fridge.",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400" />);
    }
  }
  return stars;
};

export default function ReviewsSection() {
  const avatars = imageData.placeholderImages;

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">
            Social Proof
          </h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary text-balance">
            What Our Fans Are Saying
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const avatar = avatars.find(a => a.id === review.avatarId);
            return (
              <Card key={index} className="bg-background/50 p-6 flex flex-col items-center text-center">
                <CardContent className="p-0 flex flex-col items-center">
                  {avatar && (
                    <Image
                      src={avatar.imageUrl}
                      alt={avatar.description}
                      width={80}
                      height={80}
                      className="rounded-full mb-4 border-2 border-primary/20"
                      data-ai-hint={avatar.imageHint}
                    />
                  )}
                  <h4 className="font-bold text-lg text-primary">{review.name}</h4>
                  <div className="flex my-2">{renderStars(review.rating)}</div>
                  <blockquote className="mt-2 text-muted-foreground text-balance">
                    "{review.text}"
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
