import Image from 'next/image';
import Link from 'next/link';

const NewArrivals = () => {
  return (
    <div className="px-4 py-16 bg-white">
      <h2 className="text-4xl font-medium text-black">New Arrivals</h2>
      <div className="h-80 overflow-auto no-scrollbar">
        <div className="flex pt-6 gap-4">
          <Link href={'/products/1'} className="flex h-28 flex-col   ">
            <div className=" relative w-[230px] min-h-[230px] ">
              <Image
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex  justify-between">
              <div>
                <p className="font-bold text-base">Mal Backpack</p>
                <p className="text-sm">Backpack / Hiking</p>
              </div>
              <div className="font-bold text-base">
                <p>$300.00</p>
              </div>
            </div>
          </Link>

          <Link href={'/products/2'} className="flex h-28 flex-col">
            <div className=" relative w-[230px] min-h-[230px] ">
              <Image
                src={
                  'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex  justify-between">
              <div>
                <p className="font-bold text-base">Mal Backpack</p>
                <p className="text-sm">Backpack / Hiking</p>
              </div>
              <div className="font-bold text-base">
                <p>$300.00</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
