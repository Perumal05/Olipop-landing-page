import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Icons = {
  OlipopLogo: (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
    <Image
      src="https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Logos/Olipop-Refreshing-Beverage-Logo-PNG.png"
      alt="Olipop Logo"
      width={130}
      height={30}
      {...props}
    />
  ),
  Twitter,
  Instagram,
  Facebook,
};
