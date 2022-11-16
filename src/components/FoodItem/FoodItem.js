import "./FoodItem.css";

export default function FoodItem({prop1, updateClick}) {
    
    return (
        <div>
            <img src={prop1.image} className="foodImage" height="300"/>
            <h1>{prop1.name}</h1>
            <h4>{prop1.description}</h4>
            <h2>{prop1.price}</h2>
            <button onClick={() => updateClick(prop1.name, prop1.price)}>Add to cart</button>
        </div>
    )
}