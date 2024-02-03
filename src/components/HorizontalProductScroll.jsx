import React from 'react';
import CardProduct from './ui/CardProduct';
const arr = new Array(3);
const HorizontalProductScroll = () => {
  return (
    <div className="h-80 overflow-auto no-scrollbar">
      <div className="flex pt-6 gap-4">
        <CardProduct
          href={`/products/1`}
          src={
            'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          name={'Mal Backpag'}
          category={'Backpacks'}
          price={300}
        />
        <CardProduct
          href={`/products/1`}
          src={
            'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          name={'Mal Backpag'}
          category={'Backpacks'}
          price={300}
        />
      </div>
    </div>
  );
};

export default HorizontalProductScroll;
