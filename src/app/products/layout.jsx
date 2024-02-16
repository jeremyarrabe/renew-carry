import { getCategories } from '@/lib/services/categories';
import CategoryNavigation from './_components/CategoryNavigation';

export default async function ProductsLayout({ children }) {
  const categories = await getCategories();
  return (
    <>
      <CategoryNavigation categories={categories} />
      {children}
    </>
  );
}
