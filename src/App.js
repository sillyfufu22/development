import "./App.css";
import { useState, useEffect } from "react";
import foodData from "./food-data.json";
import AllFood from "./components/AllFood/AllFood.js";
import FilterFoodType from "./components/FilterFood/FilterFoodType.js";
import FilterFoodCuisine from "./components/FilterFood/FilterFoodCuisine";
import SortItem from "./components/SortItem/SortItem";
import Basket from "./components/Basket/Basket";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
foodData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [filterTypeValue, updateFoodType] = useState("All");
  const [filterCuisineValue, updateCuisineType] = useState("All");
  const [sortPrice, updateSortPrice] = useState("All");

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
    } else if (filterCuisineValue === "appetizer") {
      return food.cuisine === "appetizer";
    } else if (filterCuisineValue === "main") {
      return food.cuisine === "main";
    } else if (filterCuisineValue === "dessert") {
      return food.cuisine === "dessert";
    } else {
      return food;    
    }
  })

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  function onFilterTypeSelected(filterTypeValue){
    updateFoodType(filterTypeValue);
  }

  function onFilterCuisineSelected(filterCuisineValue){
    updateCuisineType(filterCuisineValue);
  }

  function onSortPriceSelected(sortPriceValue){
    updateSortPrice(sortPriceValue);
  }

  filteredFoodList.sort((a,b) => {
    if (sortPrice === "highlow") {
      if (a.price < b.price) return 1;
      else if (a.price > b.price) return -1;
      else return 0;
    } else if (sortPrice === "lowhigh") {
      if (a.price > b.price) return 1;
      else if (a.price < b.price) return -1;
      else return 0;
    } else return 0;
  })

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
            
            <div className="sort">
              <SortItem sortPriceSelected={onSortPriceSelected}></SortItem>
            </div>

            <AllFood foods={filteredFoodList} onAdd={onAdd}></AllFood>
          </div>

          <div className="cartSection" class="col-12 col-md-4 col-lg-4">
            <h1 className="cart">Cart</h1>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
