import React, { useState } from 'react';
import Tables from './Table'; // Adjust the path as necessary
import {CustomSearchBar} from './SearchBar'; // Adjust the path as necessary
import apiService from './apiService'; // Adjust the path as necessary

export function Home() {
  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const addFoodToSelected = (id) => {
    const food = foods.find((f) => f.id === id);
    setSelectedFoods((prevSelectedFoods) => {
      if (prevSelectedFoods.some((f) => f.id === id)) {
        return prevSelectedFoods;
      }
      return [...prevSelectedFoods, food];
    });
  };

  const deleteSelectedFood = (id) => {
    setSelectedFoods((prevSelectedFoods) =>
      prevSelectedFoods.filter((f) => f.id !== id)
    );
  };

  const searchFoods = (searchValue) => {
    if (searchValue.length >= 2) {
      apiService.getFoods(searchValue) 
        .then((res) => {
          setFoods(res);
        })
        .catch((err) => {
          console.error('Error:', err);
        });
    } else {
      setFoods([]);
    }
  };

  return (
    <div className="p-4">
      <Tables
        isSelected
        foods={selectedFoods}
        handleDelete={deleteSelectedFood}
      />
      <CustomSearchBar onSearch={searchFoods} />
      <Tables
        foods={foods}
        handleSelection={addFoodToSelected}
      />
    </div>
  );
}

export default Home;