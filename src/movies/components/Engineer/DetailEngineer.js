import React, { Component } from 'react'
import {Image, Col, ListGroup, Row, ButtonToolbar, Button} from 'react-bootstrap'
import axios from 'axios'

class DetailEngineer extends Component {
    constructor() {
        super() 
        this.state = {
            'name' : '',
            'location':'',
            'skill':'',
            'description':'',
            'date_of_birth':'',
            'showcase':null,
            'salary':'',
            'email':''
        }
    }
    componentDidMount= async()=>{
        const id = this.props.match.params.id
        await axios.get("http://localhost:3000/api/v1/engineers?search="+id)
        .then(res => {
            let d = new Date(res.data.data[0].date_of_birth),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()
            const date = [year, month, day].join('-')
            this.setState({
                    'name' : res.data.data[0].name,
                    'location': res.data.data[0].location,
                    'skill': res.data.data[0].skill,
                    'description': res.data.data[0].description,
                    'date_of_birth': date,
                    'showcase': res.data.data[0].showcase,
                    'salary': res.data.data[0].salary,
                    'email': res.data.data[0].email
            })
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
          <>
            <Row style={{position: 'absolute', marginTop: '100px'}}>
                <Col>
                <Image width={171} height={180} alt="171x180" src="holder.js/171x180" rounded />
                </Col>
                
                <Col>
                <ListGroup variant="flush">
                <ListGroup.Item>Name</ListGroup.Item>
                <ListGroup.Item>Description</ListGroup.Item>
                <ListGroup.Item>Skill</ListGroup.Item>
                <ListGroup.Item>Location</ListGroup.Item>
                <ListGroup.Item>Date of Birth</ListGroup.Item>
                <ListGroup.Item>Salary</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col className='md-auto'>
                <ListGroup variant="flush">
                <ListGroup.Item>{this.state.name}</ListGroup.Item>
                <ListGroup.Item>{this.state.description}</ListGroup.Item>
                <ListGroup.Item>{this.state.skill}</ListGroup.Item>
                <ListGroup.Item>{this.state.location}</ListGroup.Item>
                <ListGroup.Item>{this.state.date_of_birth}</ListGroup.Item>
                <ListGroup.Item>{this.state.salary}</ListGroup.Item>
                <ListGroup.Item>{this.state.email}</ListGroup.Item>
                </ListGroup>
                </Col>
                
            </Row> 
          </>
        )
      }
    }
    
    export default DetailEngineer
    
