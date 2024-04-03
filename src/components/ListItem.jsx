import React, { useState, useEffect } from 'react';
import apiService from './apiService';
import { Link } from 'react-router-dom';

function ListItem() {
  const [userInput, setUserInput] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await apiService.getFoods();
        setFoods(data);
      } catch (error) {}
    };

    fetchFoods();
  }, []);

  function onAdd(id) {
    const selectedFood = foods.find((el) => el.id === id);
    if (selectedFoods.some((el) => el.id === id)) {
      return;
    }
    setSelectedFoods([...selectedFoods, selectedFood]);
  }

  function onDelete(id) {
    setSelectedFoods(selectedFoods.filter((el) => el.id !== id));
  }

  const filterData = foods.filter((item) =>
    item.desc.toLowerCase().includes(userInput.toLowerCase())
  );

  return (
    <>
      <table className="table">
        <div className="container mt-5">
          <div className="selected-foods mb-4">
            <h2>Selected Foods</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Kcal</th>
                  <th scope="col">Protein (g)</th>
                  <th scope="col">Fat (g)</th>
                  <th scope="col">Carbs (g)</th>
                </tr>
              </thead>
              <tbody>
                {selectedFoods.map((food) => (
                  <tr key={food.id}>
                    <td>{food.desc}</td>
                    <td>{food.kcal}</td>
                    <td>{food.protein}</td>
                    <td>{food.fat}</td>
                    <td>{food.carbs}</td>
                    <td>
                      <button onClick={() => onDelete(food.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <hr />
          <div className="search-section">
            <div className="input-group mb-3 search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search foods..."
                aria-label="Search foods"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Kcal</th>
                  <th scope="col">Protein (g)</th>
                  <th scope="col">Fat (g)</th>
                  <th scope="col">Carbs (g)</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((food) => (
                  <tr key={food.id}>
                    <td>{food.desc}</td>
                    <td>{food.kcal}</td>
                    <td>{food.protein}</td>
                    <td>{food.fat}</td>
                    <td>{food.carbs}</td>
                    <td>
                      <button onClick={() => onAdd(food.id)}>Add Food</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/add-item">Create Food</Link>
          </div>
        </div>
      </table>
    </>
  );
}

export default ListItem;
