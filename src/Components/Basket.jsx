import { useEffect, useState } from "react";

import pattern from "../assets/pattern.jpg"

export default function Basket({ itemsInBasket }) {
    return (
        <div className="basket-wrapper">
            <div className="basket-left">
                <h3>Items in Basket</h3>
                <div>
                    <div>
                        {itemsInBasket.length !== 0 ? (
                            itemsInBasket.map(item => (
                                <BasketItem key={item.id} item={item} />
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
        </div>
    )
}

function BasketItem({ item }) {
    return (
        <div className="basket-item-wrapper">
            <img src={item.image} alt="" />
            <div className="basket-main">
                <h3>{item.title}</h3>
                <span>
                    <h5>✓ In Stock</h5>
                    <p className="price">£{item.price}</p>
                </span>
                <div className="price-add-wrapper">
                    <div className="add-wrapper">
                        <button id="minus-btn">-</button>
                        <div type="text" className="quantity">5</div>
                        <button id="plus-btn">+</button>
                    </div>
                    <button className="add">Update</button>
                    <button className="remove">Remove</button>
                </div>
            </div>
        </div>
    )
}