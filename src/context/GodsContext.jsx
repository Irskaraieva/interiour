import React, { createContext, useContext, useState } from 'react';
import { goods } from "../helpers/Goods";

const GoodsContext = createContext();

export const GoodsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [hasGoods, setHasGoods] = useState(goods);
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <GoodsContext.Provider value={{
      selectedCategory,
      setSelectedCategory,
      hasGoods,
      setHasGoods,
      goods,
      checkedItems,
      setCheckedItems
      }}>
      {children}
    </GoodsContext.Provider>
  );
};

export const useGoods = () => {
  return useContext(GoodsContext);
};