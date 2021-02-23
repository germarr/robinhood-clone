import React from 'react'
import "./Header.css"
import Logo from "./robinhood.svg"

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header__logo">
                <img src={Logo} width={25} alt=""/>
            </div>
            <div className="header__search">
                <div className="header__searchContainer">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__menuItems">
              <a href="https://google.com/">Free Stocks</a>
              <a href="https://google.com/">Portfolio</a>
              <a href="https://google.com/">Cash</a>
              <a href="https://google.com/">Messages</a>
              <a href="https://google.com/">Account</a>  
            </div>
        </div>
    )
}

export default Header
