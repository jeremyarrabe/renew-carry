import { useState } from 'react';

export const useToggle = () => {
  const [visible, setVisibility] = useState();

  const toggle = (initial) => {
    setVisibility((prev) => (initial ? initial : !prev));
  };

  return { visible, toggle };
};
