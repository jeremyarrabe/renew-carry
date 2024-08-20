import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Lora, Comfortaa, Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const loraCyrillic = Lora({
  subsets: ["cyrillic"],
  style: ["italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora-cyrillic",
  display: "swap",
  adjustFontFallback: false,
});
const loraRegular = Lora({
  subsets: ["latin"],
  variable: "--font-lora-regular",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa-regular",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-regular",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    template: "%s | RenewCarry",
    default: "RenewCarry",
  },
  description:
    "Elevate your style sustainably with RenewCarry's modern bag collection. Crafted with care, each piece combines timeless style with eco-friendly materials. Discover the beauty of sustainability. Shop now!",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${loraCyrillic.variable} ${loraRegular.variable} ${comfortaa.variable} ${inter.variable} flex flex-col bg-backgroundColor font-inter-regular text-textColor`}
        >
          <Navigation />
          <div className="mt-[90px]">{children}</div>

          <Footer />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
