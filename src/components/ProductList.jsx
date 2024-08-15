import CategoryHeader from "./CategoryHeader";
import Product from "./Product";
import ProductFilterButton from "./ProductFilterButton ";

const ProductList = ({ products, currentCategory }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
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
    </>
  );
};

export default ProductList;
