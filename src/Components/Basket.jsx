import { useEffect, useState } from "react";

export default function Basket({ itemsInBasket }) {
    return (
        <div className="basket-wrapper">
            <div className="basket-left">
                <h3>Items in Basket</h3>
                <div>
                    <div>
                        {itemsInBasket.length !== 0 ? (
                            itemsInBasket.map(item => (
                                <BasketItem key={item[0].id} item={item[0]} quantity={item[1]} />
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
            <div className="basket-right">
                <h3>Checkout</h3>
                <form action="#">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName"/>
                    </div>
                </form>
            </div>
            <Total itemsInBasket={itemsInBasket}/>
        </div>
    )
}

function BasketItem({ item, quantity }) {
    const [count, setCount] = useState(quantity);

    const handleDecrement = () => {
        if (count != 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="basket-item-wrapper">
            <div className="product-img" style={{backgroundImage: `url(${item.image})`}} id="basket-img"></div>
            <div className="basket-main">
                <h3>{item.title}</h3>
                <span>
                    <h5>✓ In Stock</h5>
                    <p className="price">£{item.price}</p>
                </span>
                <div className="price-add-wrapper">
                    <div className="add-wrapper">
                        <button id="minus-btn" onClick={handleDecrement}>-</button>
                        <div type="text" className="quantity">{count}</div>
                        <button id="plus-btn" onClick={() => setCount((count) => count + 1)}>+</button>
                    </div>
                    <button className="add">Update</button>
                    <button className="remove">Remove</button>
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