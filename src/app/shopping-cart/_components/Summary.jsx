import { currencyFormat } from '@/helpers/currencyFormat';
import React from 'react';

const Summary = ({ price }) => {
  let totalPrice = +price;
  return (
    <div className="flex flex-col mt-4 font-medium gap-1 pb-6">
      <h3 className="text-2xl font-medium font-lora-cyrillic">Summary</h3>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p> {currencyFormat(totalPrice)}</p>
      </div>
      <div className="flex justify-between">
        <p>Estimated Delivery & Handling Fee</p>
        <p>{totalPrice !== 0 ? currencyFormat(10) : currencyFormat(0)}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Total</p>
        <p>{totalPrice !== 0 ? currencyFormat(totalPrice + 10) : currencyFormat(0)}</p>
      </div>
      <button className="bg-transparentpy-4 mt-4 text-black border py-4 border-darkGreen rounded-lg">
        Go to Checkout
      </button>
    </div>
  );
};

export default Summary;
