import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Sparkles, Zap, Bot } from 'lucide-react';

const ingredients = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    name: 'Prebiotics',
    description: 'Plant-based fiber that feeds the good bacteria in your gut.',
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    name: 'Botanicals',
    description: 'Real ingredients like cherry, ginger, and lemon for authentic flavor.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    name: 'Low Sugar',
    description: 'Just 2-5g of sugar per can, with no artificial sweeteners.',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    name: 'Functional',
    description: '9g of fiber in every can to support digestive health.',
  },
];

export default function IngredientsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">
            What's Inside
          </h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary text-balance">
            Good for Your Gut, Great on Taste
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <Card key={index} className="bg-background/50 border-border hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                  {item.icon}
                </div>
                <CardTitle className="font-bold text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
