import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import WhyChooseUs from '@/components/WhyChooseUs';

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
