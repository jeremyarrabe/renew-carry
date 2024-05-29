import { getCategories } from '@/lib/services/categories';
import NavCategory from './NavCategory';
const NavCategoryComponent = async () => {
  const categories = await getCategories();
  return (
    <div className="md:px-20">
      <div className="flex overflow-auto mt-[100px] pb-2 ">
        {categories.map((category) => (
          <NavCategory key={category.id} category={category.category} />
        ))}
      </div>
    </div>
  );
};

export default NavCategoryComponent;
