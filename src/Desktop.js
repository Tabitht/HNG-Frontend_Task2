import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import "./Desktop.css"
import pic1 from "./images/HERO.png";
import pic2 from "./images/Frame 2.png";
import pic3 from "./images/Ellipse 1.png";
import pic4 from "./images/Ellipse 2.png";
import pic5 from "./images/Rectangle 6.png";
import pic6 from "./images/Rectangle 7.png";
import pic7 from "./images/Rectangle 8.png";
import pic8 from "./images/Rectangle 9.png";
import pic9 from "./images/Frame 16.png";
import pic10 from "./images/Rectangle 2.png";
import pic11 from "./images/Group 18.png";
import pic12 from "./images/Rectangle 1.png";
import pic13 from "./images/Group 20.png";
import pic14 from "./images/Rectangle 3.png";
import pic15 from "./images/Rectangle 4.png";
//import pic16 from "./images/";
//import pic11 from "./images/Ellipse 2.png";

export default function Desktop() {
    return (
    <div className="destopHomePage">
        <Header />
        <Container>
            <Row>
                <Col>
                    <img src={pic1} alt="Nutify image" className="nutifyImage"></img>
                </Col>
            </Row>
            <Row className="Row3">
                <Col><img src={pic2} alt="display products" className="products"></img></Col>
                <Col><img src={pic3} alt="display Products" className="products"></img></Col>
                <Col><img src={pic4} alt="display Products" className="products"></img></Col>
            </Row>
            <Container className="mini">
                <Row className="rowOne">
                    <Col><img src={pic5} alt="grid Products" className="gridProducts"></img></Col>
                    <Col><img src={pic6} alt="grid Products" className="gridProducts"></img></Col>
                </Row>
                <Row className="rowTwo">
                    <Col><img src={pic7} alt="grid Products" className="gridProducts"></img></Col>
                    <Col><img src={pic8} alt="grid Products" className="gridProducts"></img></Col>
                </Row>
                <Row className="rowThree">
                    <Col><img src={pic9} alt="grid Products" className="mainProducts"></img></Col>
                </Row>

            </Container>
                <Row>
                    <Col><img src={pic10} alt="list Products" className="listProducts"></img></Col>
                    <Col><img src={pic11} alt="list Products" className="listProducts"></img></Col>
                </Row>
                <Row>
                    <Col><img src={pic12} alt="list Products" className="listProducts"></img></Col>
                    <Col><img src={pic13} alt="list Products" className="listProducts"></img></Col>
                </Row>
                <Row>
                    <Col><img src={pic14} alt="list Products" className="listProducts"></img></Col>
                    <Col><img src={pic15} alt="list Products" className="listProducts"></img></Col>
                </Row>
        </Container>
    </div>
    )
}