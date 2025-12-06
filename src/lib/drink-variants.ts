
export interface DrinkVariant {
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  accentColor: string;
}

export const drinkVariants: DrinkVariant[] = [
  {
    name: 'Cherry',
    subtitle: 'Soda',
    description:
      'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    imageUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Cherry/Cherry-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(0, 72%, 51%)',
  },
  {
    name: 'Grape',
    subtitle: 'Soda',
    description:
      'A modern functional soda brand inspired by classic flavors, but made with better ingredients.',
    imageUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Grape/Grape-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(270, 72%, 61%)',
  },
  {
    name: 'Lemon',
    subtitle: 'Soda',
    description:
      'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    imageUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Lemon/Lime-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(80, 72%, 51%)',
  },
  {
    name: 'Orange',
    subtitle: 'Soda',
    description:
      'Vibrant and sun-kissed citrus juice with a naturally sweet orange burst and a smooth, refreshing finish.',
    imageUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Orange/Orange-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(30, 92%, 51%)',
  },
];
