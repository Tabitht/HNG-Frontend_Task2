import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Checkout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import pic1 from "../images/Rectangle 7.png";
import pic2 from "../images/Rectangle 1.png";
import icon1 from "../icons/Remove.png";
import icon2 from "../icons/Minus Sign (1).png";
import icon3 from "../icons/Add.png";
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

    const navigate = useNavigate();

            const handlebuttonClick = () => {
            navigate('./Payment');
        }
        const goBack = () => {
            navigate('/')
        }

    return(
        <div className="CheckoutPage">
            <Header />
            <Container>
                <Row>
                    <Col><img src={pic1} alt="Walnut"></img></Col>
                    <Col>
                        <p>Walnuts are a type of tree nut that is rich in nutrients and has a distinctive appearance and flavor.</p>
                        <p>walnuts are a delicious and nutritious snack that can be enjoyed on their own or used in a variety of recipes, from baked goods to savory dishes.</p>
                    </Col>
                    <Row>
                        <Col><img src={icon1} alt="Remove"></img></Col>
                        <Col>Remove</Col>
                        <Col><img src={icon2} alt="remove from cart"></img></Col>
                        <Col>1</Col>
                        <Col><img src={icon3} alt="Add to cart"></img></Col>
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
                    <button onClick={handlebuttonClick}>Checkout $50</button>
                </Row>
                <button onClick={goBack}>Go Back</button>
            </Container>
            <Footer />
        </div>
    )
}