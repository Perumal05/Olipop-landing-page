import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Olipop?',
    answer:
      "Olipop is a new kind of soda that's delicious, refreshing, and actually good for you. It has prebiotics, plant fiber, and botanicals for a healthy and tasty drink.",
  },
  {
    question: 'How much sugar is in Olipop?',
    answer:
      'Each can of Olipop contains 2-5 grams of sugar, which is significantly less than traditional sodas. We use natural sweeteners and do not add any artificial ones.',
  },
  {
    question: 'What are prebiotics and why are they in my soda?',
    answer:
      'Prebiotics are a type of dietary fiber that feed the good bacteria in your gut. We added them to Olipop to support digestive health and make your soda a functional beverage.',
  },
  {
    question: 'Is Olipop vegan and gluten-free?',
    answer:
      'Yes! All of our products are vegan, gluten-free, Paleo-friendly, and Keto-friendly. We use only high-quality, plant-based ingredients.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">
            Have Questions?
          </h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary text-balance">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
