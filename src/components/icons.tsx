import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Icons = {
  OlipopLogo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      fill="currentColor"
      {...props}
    >
      <text
        x="0"
        y="15"
        fontFamily="sans-serif"
        fontSize="18"
        fontWeight="bold"
        letterSpacing="0.1em"
      >
        OLIPOP
      </text>
    </svg>
  ),
  Twitter,
  Instagram,
  Facebook,
};
