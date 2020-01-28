import * as React from "react";
import "../assets/styles/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/vishaldodiya/llama-power">
                <figure>
                    <img src="./src/assets/images/github.png" alt="Github Repository"/>
                </figure>
            </a>
        </footer>
    );
}

export default Footer;