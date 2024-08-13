import CategoryHeader from "./CategoryHeader";
import Filter from "./Filter";
import Product from "./Product";

const ViewProducts = ({ products, currentCategory }) => {
  return (
    <>
      <CategoryHeader currentCategory={currentCategory} />
      <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
        <div className="flex items-center justify-between gap-4 pb-4">
          <p className="text-lg opacity-85">
            <span className="font-medium">{products.length}</span> items
          </p>
          <button className="ml-auto rounded-lg border-[1px] px-4 py-2 text-lg font-bold uppercase tracking-wider">
            A→Z
          </button>
          <button className="text-lg font-bold uppercase tracking-wider">
            Recent
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
