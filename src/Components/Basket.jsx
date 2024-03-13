import { useEffect, useState } from "react";

import Form from "./Form";

import checkoutIcon from "../assets/checkout.svg";
import cartIcon from "../assets/checkout-cart.svg";

export default function Basket({ itemsInBasket }) {
    return (
        <div className="basket-wrapper">
            <div>
                <div className="basket-left">
                    <div className="basket-card-title">
                        <img src={cartIcon} alt="" />
                        <h3>Items in Basket</h3>
                    </div>
                    <div className="basket-all-wrapper">
                        <div>
                            {itemsInBasket.length !== 0 ? (
                                itemsInBasket.map(item => (
                                    <BasketItem key={item[0].id} data={item} />
                                ))
                                ) : (
                                    <div className="basket-item-wrapper">
                                        <p>Nothing in basket</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="pattern"></div>
                    </div>
                </div>
                <Total itemsInBasket={itemsInBasket}/>
            </div>
            <div className="basket-right">
                <div className="basket-card-title">
                    <img src={checkoutIcon} alt="" />
                    <h3>Checkout</h3>
                </div>
                <Form />
            </div>
        </div>
    )
}

function BasketItem({ data }) {
    const [count, setCount] = useState(data[1]);

    const handleDecrement = () => {
        if (count != 1) {
            setCount(count - 1);
        }
    };

    const updateQuantity = () => {
        // for (let i = 0; i < itemsInBasket.length; i++) {
        //     if (itemsInBasket[i][0].id == data.id) {
        //         itemsInBasket[i][1] = count;
        //         return;
        //     }
        // }
    }

    const removeItem = () => {

    }

    return (
        <div className="basket-item-wrapper">
            <div className="product-img" style={{backgroundImage: `url(${data[0].image})`}} id="basket-img"></div>
            <div className="basket-main">
                <h3>{data[0].title}</h3>
                <span>
                    <h5>✓ In Stock</h5>
                    <p className="price">£{data[0].price}</p>
                </span>
                <div className="price-add-wrapper">
                    <div className="add-wrapper">
                        <button id="minus-btn" onClick={handleDecrement}>-</button>
                        <div type="text" className="quantity">{count}</div>
                        <button id="plus-btn" onClick={() => setCount((count) => count + 1)}>+</button>
                    </div>
                    <button onClick={updateQuantity}>Update</button>
                    <button className="remove" onClick={removeItem}>Remove</button>
                </div>
            </div>
        </div>
    )
}

function Total({ itemsInBasket }) {
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        const calculateTotal = () => {
            let price = 0;
            for(let i = 0; i < itemsInBasket.length; i++) {
                price += itemsInBasket[i][0].price * itemsInBasket[i][1];
            }
            // toFixed here to ensure no floating point errors (only to 2 decimal places)
            setTotalPrice(price.toFixed(2));
        }
        if (itemsInBasket.length > 0) calculateTotal();
    }, [itemsInBasket])

    return (
        <div className="basket-total">
            <h2>Total Price: £{totalPrice}</h2>
        </div>
    )
}