import * as React from "react";
import Container from "./container";
import Navbar from "./navbar";
import "../assets/styles/homepage.scss";

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container></Container>
        </>
    );
}

export default Homepage;