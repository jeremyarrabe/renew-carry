import { useState } from 'react';

export const useToggle = (initial) => {
  const [visible, setVisibility] = useState(initial || false);

  const toggle = () => setVisibility((prev) => !prev);

  return { visible, toggle };
};
