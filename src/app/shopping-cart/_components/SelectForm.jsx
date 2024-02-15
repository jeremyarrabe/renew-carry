'use client';
import React from 'react';
import { updateQuantity } from '../_actions';

const SelectForm = ({ defaultValue, userId, productId }) => {
  const onQuantityChange = async (quantity) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('quantity', quantity);
    await updateQuantity(formData);
  };

  return (
    <form
      className="flex text-base items-center"
      onChange={(e) => onQuantityChange(e.target.value)}
    >
      <label htmlFor="quantity">Quantity</label>
      <select
        id="quantity"
        name="quantity"
        className="px-4 bg-yellowishGray py-2 "
        defaultValue={defaultValue}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </form>
  );
};

export default SelectForm;
