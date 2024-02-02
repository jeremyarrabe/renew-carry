import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const loraCyrillic = Lora({
  subsets: ['cyrillic'],
  style: ['italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora-cyrillic',
});
const loraRegular = Lora({
  subsets: ['latin'],
  variable: '--font-lora-regular',
  weight: ['400', '500', '600', '700'],
});
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${loraCyrillic.variable} ${loraRegular.variable} bg-yellowishGray font-lora-regular`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
