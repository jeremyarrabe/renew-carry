import Link from 'next/link';
import { getCategories } from '@/lib/services/categories';
import NavCategory from './NavCategory';
const NavCategoryComponent = async () => {
  const categories = await getCategories();
  return (
    <div className="flex overflow-auto mt-4 pb-2">
      {categories.map((category) => (
        <NavCategory key={category.id} category={category.category} />
      ))}
    </div>
  );
};

export default NavCategoryComponent;
