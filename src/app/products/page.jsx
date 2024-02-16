import ViewProducts from '@/components/ViewProducts';
import { getProducts } from '@/lib/services/products';
import { Suspense } from 'react';

const ProductsPage = async () => {
  const productList = await getProducts();

  return (
    <>
      <Suspense key={1} fallback={<ProductsLoading />}>
        <ViewProducts products={productList} />
      </Suspense>
    </>
  );
};

const ProductsLoading = () => {
  return (
    <div className="flex flex-wrap  justify-around pb-5 px-4 mt-3 ">
      {[...Array(4).keys()].map((i) => (
        <div
          key={i}
          className="flex flex-col  min-h-52 w-[48%]  bg-gray-300 animate-pulse mt-2 rounded-lg"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: '1s' }}
        ></div>
      ))}
    </div>
  );
};

export default ProductsPage;
