import Accordion from "@/components/Accordion";
import ShopByCategory from "@/components/ShopByCategory";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import NewsLetter from "@/components/NewsLetter";
import WhyChooseUs from "@/components/WhyChooseUs";

export default async function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <NewArrivals />
      <Accordion />
      <NewsLetter />
      <ShopByCategory />
      <Footer />
    </main>
  );
}
