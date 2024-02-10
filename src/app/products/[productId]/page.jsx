'use client';
import HorizontalProductScroll from '@/components/HorizontalProductScroll';
import Product from '@/components/Product';
import { productList } from '@/lib/data';

const ProductId = ({ params }) => {
  const { productId } = params;

  const [getProduct] = productList.filter((product) => product.id === parseInt(productId));

  return (
    <div className="flex flex-col px-4">
      <Product
        id={getProduct.id}
        title={getProduct.title}
        category={getProduct.category}
        price={getProduct.price}
        src={getProduct.src}
        description={getProduct.description}
        dimensions={getProduct.dimensions}
      />
      <div className="mt-16">
        <h2 className="text-3xl font-medium text-center">You may also like</h2>
        <HorizontalProductScroll />
      </div>
    </div>
  );
};

export default ProductId;
