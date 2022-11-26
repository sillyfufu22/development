import React from 'react';
import FoodItem from '../FoodItem/FoodItem.js';

export default function AllFood(props) {
  const { foods, onAdd } = props;
  return (
    <div className='oneFoodItem'>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} onAdd={onAdd}></FoodItem>
      ))}
    </div>
  );
}