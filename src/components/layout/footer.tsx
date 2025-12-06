import { Icons } from '@/components/icons';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = ['About', 'Contact', 'Privacy Policy', 'Terms of Service'];
  return (
    <footer className="bg-black text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="https://nfjwmtkxudpxalxhmonl.supabase.co/storage/v1/object/public/Olipop/Logos/OlipopVector.png"
              alt="Olipop Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm text-center md:text-left max-w-xs mt-4">
              A modern functional soda brand inspired by classic flavors but made with better ingredients.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icons.Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icons.Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icons.Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <nav className="flex flex-col items-center md:items-end space-y-2">
                {footerLinks.map(link => (
                    <a key={link} href="#" className="text-sm hover:text-primary transition-colors">
                        {link}
                    </a>
                ))}
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Olipop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
