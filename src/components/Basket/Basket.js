import { useEffect } from "react";
import "./Basket.css";

export default function Basket(props) {
    
    const {onAdd, onRemove, cartItems} = props;

    // useEffect(()=> {
    //     console.log('cart items',cartItems);
    // },[cartItems])
   
    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    return (
        <div className="cartItems">
            <div className="emptyCart">{cartItems.length === 0 && <div>Cart is empty!</div>}</div>
            {cartItems.map((item) => (
                <div className="oneCartItem" key={item.id}>
                    <h4 className="cartitemName">{item.name}</h4>
                    <div>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>{' '}
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                    </div>

                    <h4 className="text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                    </h4>
                </div>
            ))}

            {cartItems.length !== 0 && (
                <>
                    <hr/>
                    <div className="totalPrice row">
                        <h2>
                            <strong>Total Price</strong>
                        </h2>
                        <h2 className="text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </h2>
                    </div>
                    <div className="row">
                        <button className="checkout">Checkout</button>
                    </div>
                </>
            )}

        </div>
    )
}