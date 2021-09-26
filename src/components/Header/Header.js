import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <section>
                <nav className="main_menu">
                    <a href="/home"> Home </a>
                    <a href="/youtuber"> Youtuber </a>
                    <a href="/instagram"> Instagram </a>
                    <a href="/twitter"> Twitter </a>
                </nav>
                <div>
                    <div  className="title">
                        <h1 className="youtube_channels"> Buy Youtube Channels </h1>
                        <h4> Our Budget 50M </h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;