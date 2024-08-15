import CategoryHeader from "@/components/CategoryHeader";
import ProductFilterButton from "@/components/ProductFilterButton ";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

const TestLoading = () => {
  return (
    <div className="h-screen w-screen bg-red-500">
      <p>LOADING ......</p>
    </div>
  );
};

const ProductsPage = async ({ searchParams }) => {
  const orderBy = searchParams.order || "recently";

  return (
    <>
      <CategoryHeader />
      <div className="container m-auto flex justify-end gap-4 pt-6 text-maroon">
        <ProductFilterButton />
      </div>
      <Suspense
        fallback={<p>Loading ...</p>}
        key={JSON.stringify(searchParams)}
      >
        <ProductList orderBy={orderBy} />
      </Suspense>
    </>
  );
};

export default ProductsPage;
