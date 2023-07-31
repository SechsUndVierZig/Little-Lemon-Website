import React from "react";
import littleLemon_logo from "../images/littlelemon_logo.png";
const Nav = () => {
    return(
        <nav>
            <img src={littleLemon_logo} alt="Little Lemon Logo"/>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;