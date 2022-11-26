import '../FilterFood/FilterFoodType.css'
import { useState, useEffect } from "react";

const SortItem = (props) => {
    function onSortPriceChanged(event) {
        props.sortPriceSelected(event.target.value);
        
        console.log(event.target.value);
    }

    return (
        <div className="filter-area">
            <select name="sort" onChange={onSortPriceChanged}>
                <option value="all">Sort Price (All)</option>
                <option value="highlow">High - Low</option>
                <option value="lowhigh">Low - High</option>
            </select>
        </div>
    );
}

export default SortItem;