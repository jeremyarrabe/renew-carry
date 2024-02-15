import { Products, Categories } from '@/server/models';
import Product from './Product';

const AllProducts = async ({ productList }) => {
  return (
    <>
      {productList.map((product) => {
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
    </>
  );
};

export default AllProducts;
