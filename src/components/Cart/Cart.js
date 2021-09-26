import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const youtuber of cart) {
        total = total + youtuber.income
    }
    
    return (
        <div className="cart">  
            <h4 style={{borderBottom: '1px solid #ddd', padding: '5px'}}> Total Added {cart.length} </h4>
            <h5> Total cost: ${total} </h5>
            <div className="confirm_btn">
                <button className="custom_confirm fw-bolder"> Confirm </button>
            </div>
        </div>
    );
};

export default Cart;