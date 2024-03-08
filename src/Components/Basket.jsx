import { useEffect, useState } from "react";

export default function Basket({ itemsInBasket }) {
    return (
        <div className="basket-wrapper">
            <div className="basket-left">
                {itemsInBasket.length !== 0 ? (
                    itemsInBasket.map(item => (
                        <BasketItem key={item.id} item={item} />
                    ))
                ) : (
                    <div className="basket-item-wrapper">
                        <p>Nothing in basket</p>
                    </div>
                )}
            </div>
            <div className="basket-right">
                <div className="basket-item-wrapper">
                    <div className="basket-title">
                        <h3>Checkout</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BasketItem({ item }) {

    return (
        <div className="basket-item-wrapper">
            <div className="basket-title">
                <h3>{item.title}</h3>
            </div>
            <div className="basket-main">
                <img src={item.image} alt="" />
                <div>{item.description}</div>
            </div>
        </div>
    )
}