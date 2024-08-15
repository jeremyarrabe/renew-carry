import ViewProducts from "@/components/ViewProducts";
import { getProducts } from "@/lib/services/products";
import { redirect } from "next/navigation";

const ProductsPage = async ({ searchParams }) => {
  console.log(searchParams);
  if (!searchParams.order) {
    redirect("/products?order=recently");
  } else {
    const productList = await getProducts();
    return (
      <>
        {JSON.stringify(searchParams)}
        <ViewProducts products={productList} />
      </>
    );
  }
};

export default ProductsPage;
