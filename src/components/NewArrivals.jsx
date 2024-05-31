import Image from 'next/image';
import Link from 'next/link';
import HorizontalProductScroll from './HorizontalProductScroll';

const NewArrivals = () => {
  return (
    <div className="px-4 py-16 bg-yellowishGray md:px-20 lg:px-32">
      <h2 className="text-4xl font-medium  font-lora-cyrillic  md:text-5xl text-black">
        New Arrivals
      </h2>
      <HorizontalProductScroll />
    </div>
  );
};

export default NewArrivals;
