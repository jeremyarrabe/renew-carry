'use client';

import { useEffect, useState } from 'react';

export const useLocalStorage = (key) => {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  const getItems = () => {
    try {
      setLocalStorageItems(window.localStorage.getItem(key));
    } catch (error) {
      console.log(error);
      setLocalStorageItems([]);
    }
  };

  const deleteItems = () => {
    try {
      window.localStorage.clear(key);
      setLocalStorageItems([]);
    } catch (error) {
      console.log(error);
      setLocalStorageItems([]);
    }
  };

  const addItems = (value) => {
    try {
      // Get key in localstorage
      const cart = window.localStorage.getItem(key);
      // Check if the localstorage is alread set
      if (cart) {
        // If cart is more than 0 it means that there is multiple items in the cart so we pass it along else if its only one we force it to be an array so we can iterate over it
        const currentCart =
          JSON.parse(localStorage.getItem(key)).length > 0
            ? JSON.parse(localStorage.getItem(key))
            : [JSON.parse(localStorage.getItem(key))];

        const itemInCart = currentCart.find((item) => item.id === 1);
        // Check if item is alread in cart and just the quantity is needed to be updated
        if (itemInCart) {
          const updatedCart = currentCart.map((item) =>
            item.id === value.id ? { ...item, quantity: value.quantity } : item,
          );
          localStorage.setItem(key, JSON.stringify(updatedCart));
          setLocalStorageItems(updatedCart);
        } else {
          // append the new item with the current one and update it.
          const newCart = [...currentCart];
          newCart.push({
            id: value.id,
            title: value.title,
            price: value.price,
            category: value.category,
            quantity: value.quantity,
          });
          localStorage.setItem(key, JSON.stringify(newCart));
          setLocalStorageItems(newCart);
        }
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
        const currentItem = JSON.parse(window.localStorage.getItem(key));
        setLocalStorageItems(currentItem);
      }
    } catch (error) {
      console.log(error);
      setLocalStorageItems([]);
    }
  };

  useEffect(() => {
    const items = window.localStorage.getItem(key);
    if (items) {
      setLocalStorageItems(JSON.parse(items));
    }
  }, [key]);

  return { localStorageItems, addItems, getItems, deleteItems };
};

// const addItems = (value) => {
//   try {
//     const cart = window.localStorage.getItem(key);
//     if (cart) {
//       const parsedCart = JSON.parse(localStorage.getItem(key));
//       const checkIfInCart = parsedCart.find((item) => item.id === value.id);
//       // const newItems = [...items, ...value];
//       // console.log(a);
//       // localStorage.setItem(key, JSON.stringify(newItems));
//       // console.log(`added new item with key ${key}`);
//       // setLocalStorageItems(newItems);

//       if (checkIfInCart) {
//         console.log('yes');
//       } else {
//         console.log('no');
//       }
//     } else {
//       window.localStorage.setItem(key, JSON.stringify(value));
//       const currentItem = JSON.parse(window.localStorage.getItem(key));
//       setLocalStorageItems(currentItem);
//       console.log(`create new item with key ${key}`);
//     }
//   } catch (error) {
//     console.log(error);
//     setLocalStorageItems([]);
//   }
// };
