import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const nutritionData = [
    { label: 'Total Fat', value: '0g', percent: '0%' },
    { label: 'Sodium', value: '35mg', percent: '2%' },
    { label: 'Total Carbohydrate', value: '13g', percent: '5%' },
    { label: 'Dietary Fiber', value: '9g', percent: '32%' },
    { label: 'Total Sugars', value: '4g' },
    { label: 'Includes 0g Added Sugars', value: '', percent: '0%', indent: true},
    { label: 'Protein', value: '0g' },
];

export default function NutritionSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">
            The Details
          </h2>
          <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary text-balance">
            Nutrition Facts
          </h3>
        </div>
        <Card className="w-full max-w-md bg-white text-black p-2 rounded-lg">
          <CardContent className="p-4 font-sans">
            <h4 className="text-lg font-semibold">Serving Size 1 can (12 fl oz)</h4>
            <Separator className="my-2 bg-gray-200" />
            <div className="flex justify-between font-bold">
                <span>Amount per serving</span>
            </div>
            <div className="flex justify-between items-baseline">
                <h5 className="text-4xl font-extrabold">Calories</h5>
                <p className="text-5xl font-extrabold">40</p>
            </div>
            <Separator className="my-1 h-2 bg-black" />
            <div className="flex justify-end font-bold text-sm mb-1">% Daily Value*</div>
            
            {nutritionData.map((item, index) => (
                <React.Fragment key={index}>
                    <Separator className="my-1 bg-gray-200" />
                    <div className="flex justify-between items-center">
                        <p className={item.indent ? 'pl-4' : ''}>
                            <span className="font-bold">{item.label}</span> {item.value}
                        </p>
                        {item.percent && <span className="font-bold">{item.percent}</span>}
                    </div>
                </React.Fragment>
            ))}

            <Separator className="my-1 h-2 bg-black" />
            <p className="text-xs mt-4 text-gray-600">
                *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
