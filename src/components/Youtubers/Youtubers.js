import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Youtuber from '../Youtuber/Youtuber';
import './Youtubers.css'

const Youtubers = () => {
    const [youtubers, setYoutubers] = useState([]);
    const [cart, setCart] = useState([]);
    // useEffect 
    useEffect( () => {
        fetch('./youtuberlist.json')
        .then(res => res.json())
        .then(data => setYoutubers(data))
    }, []);

    // handle add to cart
    const handleAddToCart = youtuber => {
        const newCart = [...cart, youtuber];
        setCart(newCart);
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            youtubers.map(youtuber => <Youtuber
                                key={youtuber.id}
                                youtuber={youtuber}
                                handleAddToCart={handleAddToCart}
                            ></Youtuber>)
                        }
                    </div>
                </div>
                <div className="col-md-3 position-fixed end-0">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Youtubers;