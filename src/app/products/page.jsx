import CategoryHeader from "@/components/CategoryHeader";
import ProductFilterButton from "@/components/ProductFilterButton ";
import ProductList from "@/components/ProductList";
import ProductsLoadingSkeleton from "@/components/ProductsLoadingSkeleton";
import { Suspense } from "react";

const AllProductsPage = async ({ searchParams }) => {
  const orderBy = searchParams.order || "recently";

  return (
    <>
      <CategoryHeader />
      <div className="container m-auto flex justify-end gap-4 pt-6 text-textColor">
        <ProductFilterButton />
      </div>

      <Suspense
        fallback={<ProductsLoadingSkeleton />}
        key={JSON.stringify(searchParams)}
      >
        <ProductList orderBy={orderBy} />
      </Suspense>
    </>
  );
};

export default AllProductsPage;
