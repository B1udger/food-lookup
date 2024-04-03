import React from 'react';
import { Button, Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ foods, handleDelete }) => {
  const calculateTotalValue = (foods, key) => {
    return foods.reduce((sum, food) => sum + (parseFloat(food[key]) || 0), 0).toFixed(2);
  };

  return (
    <div>
      <BootstrapTable striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>KCal</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fat</th>
            <th>Fiber</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.calories}</td>
              <td>{food.protein}</td>
              <td>{food.carbs}</td>
              <td>{food.fat}</td>
              <td>{food.fiber}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(food.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr className="table-secondary">
            <td>Total</td>
            <td>{calculateTotalValue(foods, 'calories')}</td>
            <td>{calculateTotalValue(foods, 'protein')}</td>
            <td>{calculateTotalValue(foods, 'carbs')}</td>
            <td>{calculateTotalValue(foods, 'fat')}</td>
            <td>{calculateTotalValue(foods, 'fiber')}</td>
            <td></td> {/* Empty cell for delete column */}
          </tr>
        </tbody>
      </BootstrapTable>
    </div>
  );
};

export default Table;
