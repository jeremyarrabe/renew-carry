import { Suspense } from 'react';

import ProductsByCategory from './_components/ProductsByCategory';
import NavCategoryComponent from '@/components/CategoryMobileView';

const CategoryPage = async ({ params }) => {
  const { category } = params;

  return (
    <Suspense fallback={<ProductsLoading />}>
      <NavCategoryComponent />
      <ProductsByCategory category={category} />
    </Suspense>
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

export default CategoryPage;
