import './FilterFoodType.css'

const FilterFoodType = (props) => {
    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value);
    }

    return (
        <div className="filter-area">
            <select name="type" onChange={onFilterValueChanged}>
                <option value="all">Filter Diet (All)</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="meat">Meat</option>
            </select>
        </div>
    );
}

export default FilterFoodType;