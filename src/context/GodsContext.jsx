import React, { createContext, useContext, useState } from 'react';
import { goods } from "../helpers/Goods";

const GoodsContext = createContext();

export const GoodsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [hasGoods, setHasGoods] = useState(goods);
  const [checkedItems, setCheckedItems] = useState([]);
  const [value, setValue] = useState([100, 1200]);
  const [ minPrice, maxPrice ] = value;
  console.log(value);
  console.log(minPrice, maxPrice);

  return (
    <GoodsContext.Provider value={{
      selectedCategory,
      setSelectedCategory,
      hasGoods,
      setHasGoods,
      goods,
      checkedItems,
      setCheckedItems,
      value,
      setValue,
      minPrice,
      maxPrice
      }}>
      {children}
    </GoodsContext.Provider>
  );
};

export const useGoods = () => {
  return useContext(GoodsContext);
};