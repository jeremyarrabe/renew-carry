import React from 'react';
import CardProduct from './CardProduct';
const arr = new Array(5);
const CardWrapper = ({ products }) => {
  return (
    <div className="h-80 overflow-auto no-scrollbar">
      <CardProduct
        src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name={'Mal Backpack'}
        category={'Backpacks'}
        price={300}
      />
      <CardProduct
        src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name={'Mal Backpack'}
        category={'Backpacks'}
        price={300}
      />
      <CardProduct
        src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name={'Mal Backpack'}
        category={'Backpacks'}
        price={300}
      />
    </div>
  );
};

export default CardWrapper;
