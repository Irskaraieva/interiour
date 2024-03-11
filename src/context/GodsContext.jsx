import React, { createContext, useContext, useState, useEffect } from 'react';
import { goods } from "../helpers/Goods";

const GoodsContext = createContext();

export const GoodsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [hasGoods, setHasGoods] = useState(goods);
  const [searchValue, setSearchValue] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [value, setValue] = useState([100, 1200]);
  const [ minPrice, maxPrice ] = value;

  useEffect(() => {
   
    const filterGoods = () => {
      let filteredGoods = [...goods];

      if (selectedCategory !== 'All Products') {
        filteredGoods = filteredGoods.filter(item =>
          item.type.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (checkedItems.length > 0) {
        filteredGoods = filteredGoods.filter(item =>
          checkedItems.includes(item.brand)
        );
      }

      // if (searchValue.trim() !== '') {
      //   filteredGoods = filteredGoods.filter(item =>
      //     item.name.toLowerCase().includes(searchValue.toLowerCase())
      //   );
      // }

      if (minPrice && maxPrice) {
        filteredGoods = filteredGoods.filter(item =>
          item.price >= minPrice && item.price <= maxPrice
        );
      }

      setHasGoods(filteredGoods);
    };

    filterGoods();

  }, [selectedCategory, checkedItems, minPrice, maxPrice]);

  useEffect(() => {
    const filterByName = () => {
      if (searchValue.trim() !== '') {
        const filteredByNameArray = goods.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );        
        setFilteredByName(filteredByNameArray);        
      } else {
        setFilteredByName([]);
      }
    };

    filterByName();
  }, [searchValue]);

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
      maxPrice,
      searchValue,
      setSearchValue,
      filteredByName,
      setFilteredByName
      }}>
      {children}
    </GoodsContext.Provider>
  );
};

export const useGoods = () => {
  return useContext(GoodsContext);
};