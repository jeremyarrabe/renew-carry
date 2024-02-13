import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Lora } from 'next/font/google';

import './globals.css';

const loraCyrillic = Lora({
  subsets: ['cyrillic'],
  style: ['italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora-cyrillic',
  display: 'swap',
  adjustFontFallback: false,
});
const loraRegular = Lora({
  subsets: ['latin'],
  variable: '--font-lora-regular',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${loraCyrillic.variable} ${loraRegular.variable} bg-yellowishGray font-lora-regular flex flex-col min-h-svh `}
      >
        <Navigation />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
