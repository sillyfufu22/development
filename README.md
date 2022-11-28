# Development

### Link to Deployed Website
`https://sillyfufu22.github.io/development` 

### Goal and Value of the Application
The goal of this website is to order Burmese food online with features such as filtering for food diet (vegan, vegetarian, etc.) and course (main dish, appetizer, etc.) and sorting for price. Users can also browse the website to learn more about Burmese cuisine by exploring food items. On the website, food items are displayed and a short description is also provided to give more information about the dish. There is also a shopping cart on the right side of the page to keep track of items ordered along with their quantity and price. The total price is also given at the bottom. Users can add or remove items on the shopping cart list.

### Usability Principles Considered
Visibility:
To keep track of the order status and for ease of viewing, the shopping cart has a large display on the right side of the page along with critical information such as item name, quantity, price, and the total price.

Efficiency:
To easily add or remove items on the order, the shopping cart provides the function of adding or removing items for each individual item.

Consistency:
To make the design and information consistent, the web page uses a uniform color scheme along with a uniform layout for each food item. All 12 food items have the same image height, same font styling for each field, and the same add to cart button. To make buttons recognizable, all buttons are designed similarly.

Customisability:
To suit the page to each user's needs, there are options to filter for food diet to accomodate everyone. There is also a filter option for filtering food courses. There is also a sort button to sort for price.  

### Organization of Components
Components are broken down into sub-components (if necessary) and all are located in specific folders under the main folder "components" in the src. For example, src -> FoodItem -> FoodItem.js. There are also css files accompanying each component in their own folder. These components are then imported into App.js. 

Filter:
There are two filter buttons so there are two components: FilterFoodType and FilterFoodCuisine
These components can be found in src -> FilterFood

Sort:
There is one sort button so there is a sort component: SortItem.
This component can be found in src -> SortItem

To display all the food items, I use the component "AllFood" which uses the component "FoodItem". 
FoodItem is a component for each individual food item such as "Bean Fritters" and includes the food image, name, filtering categories, description, price, and an add to cart button. 
AllFood maps the JSON data into each individual food item components.

Shopping Cart:
The shopping cart uses the component "Basket" which displays added food items along with the quantity and price. There is also a total price display. Users also have the option to add or remove food orders here.

### How Data is Passed Down Through Components
Filter:
When users select a filter value (e.g: vegan), the filter components (e.g: FilterFoodType) will update the state (e.g: filterTypeValue) accordingly by calling the corresponding function (e.g: onFilterTypeSelected). This state (e.g: filterTypeValue) is then used to correctly filter for food items in the function "filteredFoodList" which is then displayed in the component "AllFood".

Sort:
Similarly, when users select a sort value (e.g: high - low), the sort component "SortItem" will update the state "sortPrice" accordingly by calling the function "onSortPriceSelected". This state is then used to correctly sort food items which is provided by the state "filteredFoodList". 

Add to cart:
Each food item has an add to cart button. When clicked, the function "onAdd" is called and this function updates the state "cartItems" accordingly. cartItems is then displayed in the component "Basket".

Shopping cart add/remove:
The add function in the shopping cart behaves similarly to the above Add to cart section. For removing food items, when the remove button is clicked, the function "onRemove" is called and this function updates the state "cartItems" accordingly. cartItems is then displayed in the component "Basket".

Total Price:
The total price is calculated in the component "Basket" which uses the dynamic state "cartItems" to calculate for total price using quantity and item price. 

### How the User Triggers State Changes
User can trigger state changes for the following states:
- cartItems: displays shopping cart
- filterTypeValue: filter value
- filterCuisineValue: filter value
- sortPrice: sort value
- filteredFoodList: displays food items 
- totalPrice: the total price of the shopping cart

When user selects a filter option, say "vegan", the component "FilterFoodtype" has an onChange function "onFilterValueChanged" which updates the state "filterTypeValue" using another function "onFilterTypeSelected".

When user selects a sort option, say "high - low", the component "SortItem" has an onChange function "onSortPriceChanged" which updates the state "sortPrice" using another function "onSortPriceSelected".

The action of filtering and sorting then triggers another state change for the state "filteredFoodList" which is displayed in component "AllFood".

When user clicks on the Add to Cart button, the onClick function "onAdd" is called which updates the state "cartItems" accordingly. The state "cartItems" is displayed in component "Basket".

The shopping cart displays added food items and allows for adding or removing food items. Adding food items work similarly to the add to cart button and triggers the same state changes as described above. When the user clicks on the remove button, the onClick function "onRemove" is called which updates the state "cartItems" accordingly. 

The action of adding or removing food items then triggers another state change for the state "totalPrice" in the component "Basket". 
