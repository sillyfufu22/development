import "./FoodItem.css";

export default function FoodItem({food, onAdd}) {
    
    return (
        <div>
            <img src={food.image} className="foodImage" height="300"/>
            <h1>{food.name}</h1>

            <div className="filterfields container">
                <div className="row">
                    <div className="col-6">
                        <h4 className="fw-bold">{food.cuisine}</h4>
                    </div>
                    <div className="col-6">
                        <h4 className="fw-bold">{food.type}</h4>
                    </div>
                </div>
            </div>

            <h4>{food.description}</h4>
            <h2>{food.price}</h2>
            <button className="addToCart" onClick={() => onAdd(food)}>Add to cart</button>
        </div>
    )
}