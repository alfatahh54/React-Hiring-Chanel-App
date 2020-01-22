import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'

export default class SignUp extends Component {
    render(){
        return(
        <Form style={{borderRadius: '2%', justifyContent: 'center', backgroundColor: '#DADADA', width: '400px', height: '600px', marginTop:'150px', alignItems:'center', display: 'flex', flexDirection:'column'}}>
        <h2>Sign Up</h2>
        <Form.Group controlId="formBasicEmail" style={{ marginTop:'2em', width:'300px'}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ width:'300px'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" style={{ width:'300px'}}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" style={{ width:'300px'}}>
            <Form.Label>Role</Form.Label>
            <Form.Control as="select">
            <option>--Choose Role--</option>
            <option>Engineer</option>
            <option>Company</option>
            </Form.Control>
        </Form.Group>
        <Row>
        <Col>
        <Button variant="primary" type="submit">
            Signup
        </Button>
        </Col>
        <Col>or</Col>
        <Col>
        <Button variant="primary" href="/login">
            Login
        </Button>
        </Col>
        </Row>
        </Form>
        )
    }
}