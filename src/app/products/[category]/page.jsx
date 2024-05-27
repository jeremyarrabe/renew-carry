import ProductsByCategory from './_components/ProductsByCategory';

const CategoryPage = async ({ params }) => {
  const { category } = params;

  return <ProductsByCategory category={category} />;
};

export default CategoryPage;
