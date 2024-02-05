'use client';
import { useToggle } from '@/hooks/useToggle';
import { FunnelIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const [visibile, toggleVisibility] = useToggle();
  return (
    <div>
      <div className="flex overflow-auto mt-4">
        <Link href="#" className="text-xl py-2 px-4 shrink-0 font-medium rounded-lg">
          Backpack
        </Link>
        <Link href="#" className="text-xl py-2 px-4 shrink-0 font-medium rounded-lg">
          Handbag
        </Link>
        <Link href="#" className="text-xl py-2 px-4  shrink-0 font-medium rounded-lg">
          Shoulder Bag
        </Link>
        <Link href="#" className="text-xl  py-2 px-4 shrink-0  font-medium rounded-lg">
          Tote
        </Link>
        <Link href="#" className="text-xl  py-2 px-4 shrink-0   font-medium rounded-lg">
          Hiking Bag
        </Link>
        <Link href="#" className="text-xl  py-2 px-4 shrink-0 font-medium rounded-lg">
          Sling Bag
        </Link>
        <Link href="#" className="text-xl  py-2 px-4 shrink-0 font-medium rounded-lg">
          Laptop Bag
        </Link>
      </div>
      <div className="min-h-96 flex mt-3 px-4 flex-col">
        <div className="flex justify-between items-center ">
          <p className="text-lg opacity-85">10 Results</p>
          <button
            className="px-5 py-2 bg-darkGreen flex rounded-full text-white gap-2 items-center"
            onClick={() => toggleVisibility()}
          >
            Filter <FunnelIcon className="h-5 w-5 cursor-pointer " />
          </button>
        </div>

        <div className="flex flex-wrap mt-2 justify-between">
          <div className="flex flex-col  min-h-52 w-1/2 p-1">
            <div className="relative h-full w-full">
              <Image
                href={`/products/1`}
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <p className="font-medium">Mal Backpack</p>
              <p className="opacity-95">Backpacks</p>
              <p className="font-bold">$300.00</p>
            </div>
          </div>
          <div className="flex flex-col  min-h-52 w-1/2 p-1">
            <div className="relative h-full w-full">
              <Image
                href={`/products/1`}
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <p className="font-medium">Mal Backpack</p>
              <p className="opacity-95">Backpacks</p>
              <p className="font-bold">$300.00</p>
            </div>
          </div>
          <div className="flex flex-col  min-h-52 w-1/2 p-1">
            <div className="relative h-full w-full">
              <Image
                href={`/products/1`}
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <p className="font-medium">Mal Backpack</p>
              <p className="opacity-95">Backpacks</p>
              <p className="font-bold">$300.00</p>
            </div>
          </div>
          <div className="flex flex-col  min-h-52 w-1/2 p-1">
            <div className="relative h-full w-full">
              <Image
                href={`/products/1`}
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg "
              />
            </div>
            <div>
              <p className="font-medium">Mal Backpack</p>
              <p className="opacity-95">Backpacks</p>
              <p className="font-bold">$300.00</p>
            </div>
          </div>
        </div>
      </div>
      {visibile && <Filter handleToggle={toggleVisibility} />}
    </div>
  );
};

const Filter = ({ handleToggle }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-yellowishGray p-6">
      <h2 className="text-3xl">Filter</h2>
      <button onClick={() => handleToggle()}>Close</button>
      <div className="py-6 border-b-2 border-black">
        <p>Sort By</p>
        <form className="mt-6 px-3">
          <div className="mt-2">
            <input type="radio" id="newest" name="filter" value="newest" />
            <label for="newest">Newest</label>
          </div>
          <div className="mt-2">
            <input type="radio" id="high-low" name="filter" value="high-low" />
            <label for="high-low">Price: High-Low</label>
          </div>
          <div className="mt-2">
            <input type="radio" id="low-high" name="filter" value="low-high" />
            <label for="low-high">Price: Low-High</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
