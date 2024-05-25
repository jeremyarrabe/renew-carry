import { getCategories } from '@/lib/services/categories';
import NavCategory from './NavCategory';
const NavCategoryComponent = async () => {
  const categories = await getCategories();
  return (
    <div className="flex overflow-auto mt-[100px] pb-2">
      {categories.map((category) => (
        <NavCategory key={category.id} category={category.category} />
      ))}
    </div>
  );
};

export default NavCategoryComponent;
