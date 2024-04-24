import { useState } from 'react';

export const useToggle = () => {
  const [visible, setVisibility] = useState(false);

  const toggle = (initial) => {
    console.log(initial);
    setVisibility((prev) => (initial ? initial : !prev));
  };

  return { visible, toggle };
};
