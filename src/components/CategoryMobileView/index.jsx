import { getCategories } from "@/lib/services/categories";
import NavCategory from "./NavCategory";
const NavCategoryComponent = async () => {
  const categories = await getCategories();
  return (
    <div className="container m-auto">
      <div className="mt-9 flex gap-7 overflow-auto">
        {categories.map((category) => (
          <NavCategory key={category.id} category={category.category} />
        ))}
      </div>
    </div>
  );
};

export default NavCategoryComponent;
