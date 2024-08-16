import CategoryHeader from "@/components/CategoryHeader";
import ProductFilterButton from "@/components/ProductFilterButton ";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/services/products";
import { notFound, redirect } from "next/navigation";
import { dictionary } from "@/helpers/categoryDictionary";
import { Suspense } from "react";
import ProductsLoadingSkeleton from "@/components/ProductsLoadingSkeleton";

const ProductsByCategoryPage = async ({ searchParams, params }) => {
  const { category } = params;
  if (!dictionary[category]) {
    return notFound();
  }

  const orderBy = searchParams.order || "recently";
  const categoryId = dictionary[category];

  return (
    <>
      <CategoryHeader currentCategory={category} />
      <div className="container m-auto flex justify-end gap-4 pt-6 text-maroon">
        <ProductFilterButton />
      </div>
      <Suspense
        fallback={<ProductsLoadingSkeleton />}
        key={JSON.stringify(searchParams)}
      >
        <ProductList orderBy={orderBy} category={categoryId} />
      </Suspense>
    </>
  );
};

export default ProductsByCategoryPage;
