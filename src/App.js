import "./App.css";
import { useState } from "react";
import foodData from "./food-data.json";
import FoodItem from "./components/FoodItem/FoodItem.js";
import FilterFoodType from "./components/FilterFood/FilterFoodType.js";
import FilterFoodCuisine from "./components/FilterFood/FilterFoodCuisine";
import CartItem from "./components/CartItem/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
foodData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [items, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [filterTypeValue, updateFoodType] = useState("All");
  const [filterCuisineValue, updateCuisineType] = useState("All");

  const filteredFoodList = foodData.filter((food) => {
    if(filterTypeValue === "vegan" && filterCuisineValue === "appetizer") { 
      return food.type === "vegan" && food.cuisine === "appetizer";
    } else if (filterTypeValue === "vegan" && filterCuisineValue === "main") {
      return food.type === "vegan" && food.cuisine === "main";
    } else if (filterTypeValue === "vegan" && filterCuisineValue === "dessert") {
      return food.type === "vegan" && food.cuisine === "dessert";
    } else if (filterTypeValue === "vegetarian" && filterCuisineValue === "appetizer") { 
      return food.type === "vegetarian" && food.cuisine === "appetizer";
    } else if (filterTypeValue === "vegetarian" && filterCuisineValue === "main") {
      return food.type === "vegetarian" && food.cuisine === "main";
    } else if (filterTypeValue === "vegetarian" && filterCuisineValue === "dessert") {
      return food.type === "vegetarian" && food.cuisine === "dessert";
    } else if (filterTypeValue === "meat" && filterCuisineValue === "appetizer") { 
      return food.type === "meat" && food.cuisine === "appetizer";
    } else if (filterTypeValue === "meat" && filterCuisineValue === "main") {
      return food.type === "meat" && food.cuisine === "main";
    } else if (filterTypeValue === "meat" && filterCuisineValue === "dessert") {
      return food.type === "meat" && food.cuisine === "dessert";
    } else if (filterTypeValue === "vegan") {
      return food.type === "vegan";
    } else if (filterTypeValue === "vegetarian") {
      return food.type === "vegetarian";
    } else if (filterTypeValue === "meat") {
      return food.type === "meat";
    } else if (filterTypeValue === "appetizer") {
      return food.cuisine === "appetizer";
    } else if (filterTypeValue === "main") {
      return food.cuisine === "main";
    } else if (filterTypeValue === "dessert") {
      return food.cuisine === "dessert";
    } else {
      return food;    
    }
  })
  
  const addToCart = (itemName, price) => {
    setItem([...items, itemName]);
    setTotal(total+price);
    console.log(items);
  }

  function onFilterTypeSelected(filterTypeValue){
    updateFoodType(filterTypeValue);
  }

  function onFilterCuisineSelected(filterCuisineValue){
    updateCuisineType(filterCuisineValue);
  }

  // const foodItems = filteredFoodList.map(item => (
  //   <FoodItem prop1={item} updateClick={addToCart}/>
  // ));

  return (
    <div className="App">

      <div className="header">
        <img src="images/logo2.jpg" class="rounded-circle" height="290"  alt="logo displaying the royal palace at Mandalay in black and white sketch"></img>
        <h1 className="logoName">Mandalay</h1>
      </div>

      

      <div class="container-fluid">
        <div class="row">
          <div className="foodItems" class="col-12 col-sm-12 col-md-8 col-lg-8">

          <div className="filters">
            <FilterFoodType filterValueSelected={onFilterTypeSelected}></FilterFoodType>
            <FilterFoodCuisine filterValueSelected={onFilterCuisineSelected}></FilterFoodCuisine>
          </div>

            {/* {foodData.map((item, index) => (
              <FoodItem prop1={item} prop2={index} updateClick={addToCart}/>
            ))} */}
            {/* <ul>{foodItems}</ul> */}

            {filteredFoodList.map(item => (
              <FoodItem prop1={item} updateClick={addToCart}/>
            ))}

            {/* {filteredFoodList} */}
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <h2>Cart</h2>
            {/* {items.map((item) => {
              return <p>{item.name}</p>
            })} */}
            {/* <div>
              {items.map(item => (
                <CartItem prop1={item}/>
              ))}
            </div> */}

            

            {items}
            <h2>Total cost: {total} </h2> 
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
