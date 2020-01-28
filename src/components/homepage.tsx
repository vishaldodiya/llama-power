import * as React from "react";
import Container from "./container";
import Navbar from "./navbar";
import Footer from "./footer";
import "../assets/styles/homepage.scss";

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container></Container>
            <Footer></Footer>
        </>
    );
}

export default Homepage;