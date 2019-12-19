import React from 'react'
import {Col, Row, Image, Container} from 'react-bootstrap'
function Company(){
    return(

        <Container style={{marginTop:'auto'}}>
        <Row>
            <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
            </Col>
        </Row>
        </Container>
    )
}
export default Company