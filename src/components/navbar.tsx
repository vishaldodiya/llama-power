import * as React from "react";
import "../assets/styles/navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <figure className="navbar__logo">
                <img src="./src/assets/images/llama.png" alt="Llama"/>
            </figure>
        </nav>
    );
}

export default Navbar;