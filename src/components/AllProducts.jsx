import { Products } from '@/server/models';
import Product from './Product';

const AllProducts = async () => {
  const productList = await Products.findAll();
  return (
    <>
      {productList.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default AllProducts;
