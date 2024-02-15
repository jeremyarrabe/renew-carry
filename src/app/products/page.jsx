import AllProducts from '@/components/AllProducts';
import Filter from '@/components/Filter';
import { getProducts } from '@/lib/services/products';

import { Categories, Products } from '@/server/models';

import Link from 'next/link';

const ProductsPage = async () => {
  const productList = await getProducts();

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
          <p className="text-lg opacity-85">{productList.length} Results Found</p>
          <Filter />
        </div>
        <div className="flex flex-wrap mt-2 justify-between pb-5">
          {<AllProducts productList={productList} />}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
