import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Payment.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import icon1 from "../icons/Group 22.png"
import icon2 from "../icons/Ellipse 9.png"
import pic1 from "../images/Rectangle 1.png"
import pic2 from "../images/Rectangle 7.png"



export default function Payment(){
    return(
        <div>
            <Header />
            <Container>
                <Row>
                    <Col><img src={icon2} alt="Shipping"></img><p>Shipping</p></Col>
                    <Col><img src={icon1} alt="Billing"></img><p>Billing</p></Col>
                    <Col><img src={icon2} alt="Confirmation"></img><p>Confirmation</p></Col>
                    <Col>
                        <Row><img src={pic2} alt="Confirmation"></img></Row>
                        <Row><img src={pic1} alt="Confirmation"></img></Row>
                    </Col>
                </Row>
                <Row>
                    <Col><img src={icon1} alt="Mastercard"></img>Mastercard</Col>
                    <Col><img src={icon2} alt="Visacard"></img>Visacard</Col>
                </Row>
                <Row>Payment Details</Row>
                <hr></hr>
                <Row>Enter Name on card</Row>
                <hr></hr>
                <Row>Card Number</Row>
                <hr></hr>
                <Row>
                    <Col>Expiration</Col>
                    <hr></hr>
                    <Col>CVV Code</Col>
                    <hr></hr>
                </Row>
                <Row>By Clicking ‘Confirm Payment’ I Agree To The Store Terms and Services</Row>
                <Row>
                    <Col>
                    <Link to="../HomepageBody/Desktop">
                    <button>Back</button>
                    </Link>
                    </Col>
                    <Col><button>Confirm Payment $50</button></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}