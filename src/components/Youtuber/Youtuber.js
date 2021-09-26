import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Youtuber.css'

const Youtuber = (props) => {
    const {name, grade, img, income, rank, subs, uploads, views} = props.youtuber;

    // icon 
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="col">
                <div className="card h-100 youtubers">
                    <img src={img} className="card-img-top youtuber_img mx-auto w-50 mt-2 rounded-circle" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title youtuber_name"> Name: {name} </h6>
                        <div className="card-text mt-3">
                            <p className="custom_style mb-1"> Rank: {rank} </p>
                            <h6 className="custom_style mb-1"> Grade: {grade} </h6>
                            <p className="custom_style mb-1"> Videos Uploads: {uploads} </p>
                            <p className="custom_style mb-1"> Subscribes: {subs} </p>
                            <p className="custom_style mb-1"> Total Views: {views} </p>
                            <h5 className="custom_style mb-1"> Income: <span className="fw-bolder"> ${income} </span> </h5>

                            <div className="social_icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer text-center d-block custom_color">
                        <button
                            onClick={() => props.handleAddToCart(props.youtuber)} 
                            className="custom_btn fw-bolder"
                            > {shoppingCart} Buy Channels  </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Youtuber;
