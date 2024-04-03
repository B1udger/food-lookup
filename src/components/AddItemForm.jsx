import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import apiService from './apiService';
import { useNavigate } from 'react-router-dom';


export function AddItemForm() {
  const navigate = useNavigate();
  const [food, setFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    fiber: '',
  });

  const validate = (food) => {
    const errors = {};
    if (food.calories < 0)
      errors.calories = 'Calories must be a positive number!';
    if (food.protein < 0) errors.protein = 'Protein must be a positive number!';
    if (food.carbs < 0)
      errors.carbs = 'Carbohydrates must be a positive number!';
    if (food.fat < 0) errors.fat = 'Fat must be a positive number!';
    if (food.fiber < 0) errors.fiber = 'Fiber must be a positive number!';

    return errors;
  };

  const onInputChange = (e) => {
    setFood((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFoodSubmit = (e) => {
    const currFieldErrs = validate(food);
    e.preventDefault();

    if (Object.keys(currFieldErrs).length) return;

    apiService.addFood(food)
      .then(() => navigate('/'))
      .catch(() => alert('Failed to create food item. Please try again.'));
  };

  return (
    <div>
      <h2 className="mt-4">Add new food</h2>

      <Form
        onSubmit={onFoodSubmit}
        className="food-form border rounded mt-3 mb-4 mx-auto p-3"
      >
        <Form.Group className="mb-3 mt-1 mx-auto" controlId="formBasicName">
          <FloatingLabel controlId="floatingInput1" label="Name" className="mb-1">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={food.name}
              onChange={onInputChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        {/* Other form groups... */}

        <Button variant="primary" type="submit" className="mb-1">
          Add Food
        </Button>
      </Form>
    </div>
  );
}
