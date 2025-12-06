export interface DrinkVariant {
  name: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  accentColor: string;
}

export const drinkVariants: DrinkVariant[] = [
  {
    name: 'CHERRY',
    subtitle: 'SODA',
    description:
      'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    videoUrl:
      'https://storage.googleapis.com/static-assets-ch/olipop/cherry.webp',
    accentColor: 'hsl(0, 72%, 51%)',
  },
  {
    name: 'GRAPE',
    subtitle: 'SODA',
    description:
      'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    videoUrl:
      'https://storage.googleapis.com/static-assets-ch/olipop/grape.webp',
    accentColor: 'hsl(270, 72%, 61%)',
  },
  {
    name: 'LEMON',
    subtitle: 'SODA',
    description:
      'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    videoUrl:
      'https://storage.googleapis.com/static-assets-ch/olipop/lemon.webp',
    accentColor: 'hsl(60, 72%, 51%)',
  },
  {
    name: 'ORANGE',
    subtitle: 'SODA',
    description:
      'Vibrant and sun-kissed citrus juice with a naturally sweet orange burst and a smooth, refreshing finish.',
    videoUrl:
      'https://storage.googleapis.com/static-assets-ch/olipop/orange.webp',
    accentColor: 'hsl(30, 92%, 51%)',
  },
];
