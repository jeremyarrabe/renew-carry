'use client';

import { useState } from 'react';

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
      const items = window.localStorage.getItem(key);
      if (items) {
        const items = JSON.parse(localStorage.getItem(key));
        const newItems = [...items, ...value];
        localStorage.setItem(key, JSON.stringify(newItems));
        console.log(`added new item with key ${key}`);
        setLocalStorageItems(newItems);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
        const currentItem = window.localStorage.getItem(key);
        setLocalStorageItems(currentItem);
        console.log(`create new item with key ${key}`);
      }
    } catch (error) {
      console.log(error);
      setLocalStorageItems([]);
    }
  };

  return { localStorageItems, addItems, getItems, deleteItems };
};
