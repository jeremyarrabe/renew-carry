import Categories from "@/components/Categories";
import FAQList from "@/components/FAQ";

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
      <FAQList />
      <Categories />
    </main>
  );
}
