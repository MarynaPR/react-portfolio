import React from 'react'
import coverImg from '../../assets/images/self.jpg';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';


function Header(props) {
    return (
        <header className="header">
            <Row className="h2-header">
                <Col xs={8} md={3}>
                    <Image src={coverImg} roundedCircle />
                </Col>
                <h2>maryna pryadka</h2>


            </Row>
            {props.children}
        </header>
    )
}

export default Header
