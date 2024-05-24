import { currencyFormat } from '@/helpers/currencyFormat';
import { getNewArrivals } from '@/lib/services/products';
import Image from 'next/image';
import Link from 'next/link';

const HorizontalProductScroll = async () => {
  const newArrival = await getNewArrivals();

  return (
    <div className="h-80 overflow-auto no-scrollbar">
      <div className="flex pt-6 gap-4">
        {newArrival &&
          newArrival.map((product) => (
            <Link key={product.id} href={`/item/${product.id}`} className="flex h-28 flex-col   ">
              <div className={' relative w-[230px] min-h-[230px]'}>
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                  sizes="100%"
                  priority
                />
              </div>
              <div className="flex  justify-between">
                <div>
                  <p className="font-bold text-base">{product.title}</p>
                  <p className="text-sm capitalize">{product.categoryDetails.category}</p>
                </div>
                <div className="font-bold text-base">
                  <p>{currencyFormat(product.price)}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HorizontalProductScroll;
