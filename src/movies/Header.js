import React from 'react'
import logo from '../image/logo arkademy-01.9c1222ba.png'
import logoLogin from '../image/login.jpg' 
import {Col, Row, Navbar, Nav, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
function Header() {
    return( 
    <>
        <Row>      
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Col md="auto">
        <Navbar.Brand href="/">
        <img
                alt=""
                src={logo}
                height="30"
                className="d-inline-block align-top"
        />{' '} Hiring Chanel App
        </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Col  >
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text style={{backgroundColor:'#DADADA'}}id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                style={{backgroundColor:"#DADADA"}}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </InputGroup>

        </Col>
        <Col md="auto">
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/engineer?page=1">Engineer</Nav.Link>
            <Nav.Link href="/company">Company</Nav.Link>
            </Nav>
            <Col md="auto">
            <a href="/login">
            <img
                    alt=""
                    src={logoLogin}
                    height="25"
                    className="d-inline-block align-top"
                /> login
            </a>
            </Col>
        </Navbar.Collapse>
        </Col>
        </Navbar>
        </Row>
    </>
    )
}

export default Header 