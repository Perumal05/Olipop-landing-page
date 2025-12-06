export interface DrinkVariant {
  name: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  accentColor: string;
}

// NOTE: The user provided animated .webp files. The requested scroll-scrubbing animation
// is only reliably achievable with video files (.mp4, .webm).
// These placeholder video URLs are used to build the functionality.
// To use the original assets, they must be converted to a video format.

export const drinkVariants: DrinkVariant[] = [
  {
    name: 'CHERRY',
    subtitle: 'SODA',
    description:
      'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    videoUrl:
      'https://videos.pexels.com/video-files/3849926/3849926-hd_1080_1920_25fps.mp4', // Abstract red liquid
    accentColor: 'hsl(0, 72%, 51%)',
  },
  {
    name: 'GRAPE',
    subtitle: 'SODA',
    description:
      'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    videoUrl:
      'https://videos.pexels.com/video-files/7562722/7562722-hd_1080_1920_25fps.mp4', // Abstract purple liquid
    accentColor: 'hsl(270, 72%, 61%)',
  },
  {
    name: 'LEMON',
    subtitle: 'SODA',
    description:
      'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    videoUrl:
      'https://videos.pexels.com/video-files/4442658/4442658-hd_1080_1920_25fps.mp4', // Abstract yellow/green liquid
    accentColor: 'hsl(60, 72%, 51%)',
  },
  {
    name: 'ORANGE',
    subtitle: 'SODA',
    description:
      'Vibrant and sun-kissed citrus juice with a naturally sweet orange burst and a smooth, refreshing finish.',
    videoUrl:
      'https://videos.pexels.com/video-files/8009139/8009139-hd_1080_1920_25fps.mp4', // Abstract orange liquid
    accentColor: 'hsl(30, 92%, 51%)',
  },
];
