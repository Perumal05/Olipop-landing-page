
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
    subtitle: 'VINTAGE COLA',
    description:
      'A modern take on a classic cola with a perfect blend of sweet and tart cherry, full of nostalgic flavor.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Videos/Cherry.mp4',
    accentColor: 'hsl(0, 72%, 51%)',
  },
  {
    name: 'GRAPE',
    subtitle: 'CLASSIC GRAPE',
    description:
      'A modern functional soda inspired by classic grape flavor, but made with better ingredients for a refreshing taste.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Videos/Grape.mp4',
    accentColor: 'hsl(270, 72%, 61%)',
  },
  {
    name: 'LEMON',
    subtitle: 'REFRESHING LIME',
    description:
      'Bright and refreshing citrus soda with a natural lemon and lime spark and crisp, satisfying bubbles.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Videos/Lime.mp4',
    accentColor: 'hsl(80, 72%, 51%)',
  },
  {
    name: 'ORANGE',
    subtitle: 'SWEET SQUEEZE',
    description:
      'Vibrant and sun-kissed citrus juice with a naturally sweet orange burst and a smooth, refreshing finish.',
    videoUrl:
      'https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Videos/Orange.mp4',
    accentColor: 'hsl(30, 92%, 51%)',
  },
];
