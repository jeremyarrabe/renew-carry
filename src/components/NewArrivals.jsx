import Image from 'next/image';
import Link from 'next/link';
import HorizontalProductScroll from './HorizontalProductScroll';

const NewArrivals = () => {
  return (
    <div className="px-4 py-16 bg-yellowishGray">
      <h2 className="text-4xl font-medium text-black">New Arrivals</h2>
      <HorizontalProductScroll />
    </div>
  );
};

export default NewArrivals;
