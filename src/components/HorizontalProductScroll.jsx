import Image from 'next/image';
import Link from 'next/link';

const HorizontalProductScroll = () => {
  return (
    <div className="h-80 overflow-auto no-scrollbar">
      <div className="flex pt-6 gap-4">
        <Link href={`/products/1`} className="flex h-28 flex-col   ">
          <div className={' relative w-[230px] min-h-[230px]'}>
            <Image
              src={
                'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex  justify-between">
            <div>
              <p className="font-bold text-base">Mal Backpack</p>
              <p className="text-sm">Backpacks</p>
            </div>
            <div className="font-bold text-base">
              <p>$300</p>
            </div>
          </div>
        </Link>
        <Link href={`/products/1`} className="flex h-28 flex-col   ">
          <div className={' relative w-[230px] min-h-[230px]'}>
            <Image
              src={
                'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex  justify-between">
            <div>
              <p className="font-bold text-base">Mal Backpack</p>
              <p className="text-sm">Backpacks</p>
            </div>
            <div className="font-bold text-base">
              <p>$300</p>
            </div>
          </div>
        </Link>
        <Link href={`/products/1`} className="flex h-28 flex-col   ">
          <div className={' relative w-[230px] min-h-[230px]'}>
            <Image
              src={
                'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt=""
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex  justify-between">
            <div>
              <p className="font-bold text-base">Mal Backpack</p>
              <p className="text-sm">Backpacks</p>
            </div>
            <div className="font-bold text-base">
              <p>$300</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalProductScroll;
