import React, {Component} from 'react'
import logo from '../image/logo arkademy-01.9c1222ba.png'
import {Col, Row, Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons' 
import Search from "./components/Search";
export default class Header extends Component {

    getData = (data) =>{
        // this.props.getDataFromSearch(data)
    }
    fetchEngineer = (data) =>{
        this.props.getDataFromSearch(data)
    }

    render(){
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
        <Col >
            {
                (this.props.searchBar==='true') ?
                <Search getDataFromSearch={this.fetchEngineer} onChange={this.fetchEngineer}/> : null
            }
        </Col>
        <Col md="auto">
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/engineer?page=1">Engineer</Nav.Link>
            <Nav.Link href="/company?page=1">Company</Nav.Link>
            </Nav>
            <Col >
            <Nav.Link className="ml-2" href="/login"><FontAwesomeIcon icon={faUserCircle} size="lg" />
            {' '}{this.props.user}
            </Nav.Link>
            </Col>
        </Navbar.Collapse>
        </Col>
        </Navbar>
        </Row>
    </>
    )
}
}
