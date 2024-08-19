import Accordion from "@/components/Accordion";
import Categories from "@/components/Categories";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";

export default async function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <NewArrivals />
      <Accordion />
      <Categories />
    </main>
  );
}
