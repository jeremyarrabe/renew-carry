import ProductsByCategory from "./_components/ProductsByCategory";
import { unstable_noStore as noStore } from "next/cache";

const CategoryPage = async ({ params }) => {
  noStore();
  const { category } = params;

  return <ProductsByCategory category={category} />;
};

export default CategoryPage;
