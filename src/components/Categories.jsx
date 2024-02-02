import React from 'react';

const Categories = () => {
  return (
    <div className=" bg-darkGreen mt-16 px-4 py-7">
      <h2 className="text-3xl font-medium text-white">Shop by category</h2>

      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Backpack</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Handbad</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Shoulder Bag</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Tote</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Hiking Bag</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Sling Bag</button>
        <button className="text-xl py-2 px-5 bg-white font-medium rounded-lg">Laptop Bag</button>
      </div>
    </div>
  );
};

export default Categories;
