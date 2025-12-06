
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
      'A modern fake on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Cherry/Cherry-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(0, 72%, 51%)',
  },
  {
    name: 'GRAPE',
    subtitle: 'SODA',
    description:
      'A modern functional soda brand inspired by classic flavors.but made with better ingredients.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Grape/Grape-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(270, 72%, 61%)',
  },
  {
    name: 'LEMON',
    subtitle: 'SODA',
    description:
      'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Lemon/Lime-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(60, 72%, 51%)',
  },
  {
    name: 'ORANGE',
    subtitle: 'SODA',
    description:
      'Vibrant and sun-kissed citrus juice with a naturally sweet orange burst and a smooth, refreshing finish.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Orange/Orange-1080p-ezgif.com-video-to-webp-converter.webp',
    accentColor: 'hsl(30, 92%, 51%)',
  },
];
