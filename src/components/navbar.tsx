import * as React from "react";
import "../includes/navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <figure className="navbar__logo">
                <img src="./src/assets/llama.png" alt="Llama"/>
            </figure>
        </nav>
    );
}

export default Navbar;