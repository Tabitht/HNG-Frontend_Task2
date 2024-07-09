import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Checkout.css"
import pic1 from "../images/Rectangle 7.png"
import pic2 from "../images/Rectangle 1.png"
import icon1 from "../icons/Remove.png"
import icon2 from "../icons/Group 13.png"

export default function Checkout() {
    return(
        <div>
            <Container>
                <Row>
                    <Col><img src={pic1} alt="Walnut"></img></Col>
                    <Col>
                        <p>Walnuts are a type of tree nut that is rich in nutrients and has a distinctive appearance and flavor.</p>
                        <p>walnuts are a delicious and nutritious snack that can be enjoyed on their own or used in a variety of recipes, from baked goods to savory dishes.</p>
                    </Col>
                    <Row>
                        <Col><img src={icon1} alt="Remove"></img></Col>
                        <Col><img src={icon2} alt="Add to cart"></img></Col>
                    </Row>
                </Row>
                <Row>
                    <Col><img src={pic2} alt="Chia Seed"></img></Col>
                    <Col>
                        <p>Chia seeds are a type of edible seed that comes from the plant Salvia hispanica, native to Central America and Mexico.</p>
                        <p>They have been a staple food in many cultures for centuries, and are highly valued for their nutritional and health benefits.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>sub Total</Col>
                    <Col>$50</Col>
                </Row>
                <Row>
                    <button>Checkout $50</button>
                </Row>
                <button>Go Back</button>
            </Container>
        </div>
    )
}