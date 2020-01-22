import React from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'

export class Login extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
        <Form style={{borderRadius: '2%',backgroundColor: '#DADADA', width: '400px', height: '450px', justifyContent: 'center', marginTop:'200px', alignItems:'center', display: 'flex', flexDirection:'column'}}>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail" style={{ marginTop:'2em', width:'300px'}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ width:'300px'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Row>
        <Col>
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Col>
        <Col>or</Col>
        <Col>
        <Button variant="primary" href="/signup">
            SignUp
        </Button>
        </Col>
        </Row>
        </Form>
        )
    }
}
export default Login
