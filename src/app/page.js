import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import NewArrivals from '@/components/NewArrivals';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="flex flex-col h-[calc(100svh-100px)]  ">
      <Hero />
      <Categories />
      <NewArrivals />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
