import CategoryHeader from "@/components/CategoryHeader";
import ProductFilterButton from "@/components/ProductFilterButton ";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/services/products";
import { notFound, redirect } from "next/navigation";
import { dictionary } from "@/helpers/categoryDictionary";

const CategoryPage = async ({ searchParams, params }) => {
  const { category } = params;

  if (!dictionary[category]) {
    return notFound();
  }

  if (!searchParams.order) {
    redirect(`/products/${category}?order=recently`);
  }
  const productList = await getProducts(
    dictionary[category],
    searchParams.order,
  );
  return (
    <>
      <CategoryHeader currentCategory={category} />
      <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
        <div className="flex items-center justify-end gap-4 pb-4 pt-6">
          <p className="text-lg">
            <span className="font-medium">{productList.length}</span>{" "}
            <span className="text-sm font-light">items</span>
          </p>
          <div className="hidden gap-4 text-maroon md:flex">
            <ProductFilterButton />
          </div>
        </div>
        <ProductList products={productList} />
      </div>
    </>
  );
};

export default CategoryPage;
