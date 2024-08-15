import CategoryHeader from "@/components/CategoryHeader";
import ProductFilterButton from "@/components/ProductFilterButton ";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/services/products";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

const ProductsPage = async ({ searchParams }) => {
  if (!searchParams.order) {
    redirect("/products?order=recently");
  } else {
    const productList = await getProducts(null, searchParams.order);
    return (
      <>
        <CategoryHeader />
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
  }
};

export default ProductsPage;
