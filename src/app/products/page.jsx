import ViewProducts from "@/components/ViewProducts";
import { getProducts } from "@/lib/services/products";

const ProductsPage = async () => {
  const productList = await getProducts();
  return <ViewProducts products={productList} />;
};

export default ProductsPage;
