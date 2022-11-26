import './FilterFoodType.css'

const FilterFoodCuisine = (props) => {
    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
        <div className="filter-area">
            <select name="type" onChange={onFilterValueChanged}>
                <option value="all">Filter Course (All)</option>
                <option value="appetizer">Appetizer</option>
                <option value="main">Main Course</option>
                <option value="dessert">Dessert</option>
            </select>
        </div>
    );
}

export default FilterFoodCuisine;