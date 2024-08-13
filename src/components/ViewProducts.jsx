import CategoryHeader from "./CategoryHeader";
import Filter from "./Filter";
import Product from "./Product";

const ViewProducts = ({ products, currentCategory }) => {
  return (
    <>
      <CategoryHeader currentCategory={currentCategory} />
      <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
        <p className="p-3 text-lg opacity-85">
          {products.length} Results Found
        </p>

        <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.categoryDetails.category}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
