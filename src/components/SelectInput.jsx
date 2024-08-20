"use client";
import React from "react";

const SelectInput = ({ className }) => {
  return (
    <select
      id="quantity"
      name="quantity"
      defaultValue={1}
      onChange={(e) => console.log(e.target.value)}
      className={className}
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
  );
};

export default SelectInput;
