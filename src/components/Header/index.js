import React from 'react'
import coverImg from '../../assets/images/self.jpg';
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';


function Header(props) {
    return (
        <header className="header">
            <Col xs={8} md={2}>
                <Image src={coverImg} roundedCircle />
                <h2>maryna pryadka</h2>
            </Col>
            {/* <img src={coverImg} alt="self" style={{ border: '10px solid rgba(0,0,0,.05)', shape: "circular" }}></img> */}
            {props.children}
        </header>
    )
}

export default Header
