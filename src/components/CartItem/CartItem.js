import "./CartItem.css";

export default function CartItem({prop1}) {
    
    return (
        <div>
            <h1>{prop1.name}</h1>
            <h2>{prop1.price}</h2>
        </div>
    )
}