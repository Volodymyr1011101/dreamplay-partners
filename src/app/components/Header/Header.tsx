'use client';
import type { NextComponentType, NextPageContext } from 'next';


const Header: NextComponentType<NextPageContext, {}> = () => {


    const handleActiveMenu = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav");
        const headerButtons = document.querySelector(".header-buttons");
            burger!.classList.toggle("active");
            nav!.classList.toggle("active-menu");
            headerButtons!.classList.toggle("active-menu-btn");
    }
    return (
        <header className="header">
            <div className="logo">
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#" className="nav-item">Advantages</a></li>
                    <li><a href="#" className="nav-item">Commissions</a></li>
                    <li><a href="#" className="nav-item">Our Brand</a></li>
                    <li><a href="#" className="nav-item">FAQ</a></li>
                    <li><a href="#" className="nav-item">Contacts</a></li>
                </ul>
                <div className="cta-btn">
                    <a href="#" className="register">Become our Partner</a>
                    <a href="#" className="login">Log In</a>
                </div>
            </nav>
            <div className="header-buttons">
                <a href="#" className="register">Become our Partner</a>
                <a href="#" className="login">Log In</a>
            </div>
            <div className="burger" onClick={() => handleActiveMenu()}>
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
            </div>
        </header>
    );
};

export default Header;
