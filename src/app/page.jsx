import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";
import { auth } from "@clerk/nextjs";
import { Navigation } from "swiper/modules";

export default async function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <NewArrivals />
      <Categories />
    </main>
  );
}
