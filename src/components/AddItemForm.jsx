import React, { useState } from 'react';
import apiService from './apiService.js';
import { useNavigate, Link } from 'react-router-dom';

const AddItemForm = () => {
  const navigate = useNavigate();
  const [foodData, setFoodData] = useState({
    desc: '',
    kcal: '',
    protein: '',
    fat: '',
    carbs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiService.addFood(foodData).then(() => {
      navigate('/');
    });

    setFoodData({
      desc: '',
      kcal: '',
      protein: '',
      fat: '',
      carbs: '',
    });
  };

  return (
    <>
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="desc"
            value={foodData.desc}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>kcal:</label>
          <input
            type="number"
            name="kcal"
            value={foodData.kcal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Protein (g):</label>
          <input
            type="number"
            name="protein"
            value={foodData.protein}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fat (g):</label>
          <input
            type="number"
            name="fat"
            value={foodData.fat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Carbs (g):</label>
          <input
            type="number"
            name="carbs"
            value={foodData.carbs}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Food</button>
        <Link to="/">Back</Link>
      </form>
    </>
  );
};

export default AddItemForm;
