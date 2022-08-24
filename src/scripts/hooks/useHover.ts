import { useState } from 'react';

const useHover = <T>(): [T | null, (arg: T) => void, () => void] => {
  const [hoveredObj, setHoveredObj] = useState<T | null>(null);

  const handleMouseEnter = (hoveredObj: T): void => {
    setHoveredObj(hoveredObj);
  };

  const handleMouseLeave = (): void => {
    setHoveredObj(null);
  };

  return [hoveredObj, handleMouseEnter, handleMouseLeave];
};

export default useHover;
