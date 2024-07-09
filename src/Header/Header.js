import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css"
import icon1 from "./icons/Component 1.png"
import icon2 from "./icons/Hazelnut.png"

export default function Header() {
    return(
        <div>
            <Container>
                <Row className="Row1">
                    <Col><img src={icon2} alt="Nutify icon"></img><span className="nutify">Nutify</span></Col>
                    <Col className="search">
                        <button>search products</button>
                    </Col>
                    <Col className="call">call us 24/7 +2348167208978</Col>
                    <Col><img src={icon1} alt="Shopping cart info"></img></Col>
                </Row>
                <Row className="Row2">
                    <Col>Home</Col>
                    <Col>contact us</Col>
                    <Col>Pricing</Col>
                </Row>
            </Container>
    </div>
    )
}