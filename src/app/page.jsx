import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Navigation } from 'swiper/modules';

export default async function Home() {
  return (
    <main className="flex flex-col ">
      <Hero />
      <Categories />
      <NewArrivals />
      <WhyChooseUs />
    </main>
  );
}
