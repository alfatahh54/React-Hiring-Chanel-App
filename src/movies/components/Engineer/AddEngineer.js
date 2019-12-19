import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import axios from 'axios'
import DatePicker from 'react-date-picker';

class AddEngineer extends Component {
    constructor() {
        super() 
        this.state = {
            'name' : '',
            'location':'',
            'skill':'',
            'description':'',
            'date_of_birth':new Date(),
            'showcase':null,
            'salary':'',
            'email':''
        }
    }
    handlerChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handlerPhoto=(e)=> {
        this.setState({showcase: e.target.files[0]})
    }
    handlerDate=e =>{
        this.setState({date_of_birth:e})
    }
    handlerSubmit= (e)=> {
        e.preventDefault()
        var data = new FormData();
        data.append('showcase', this.state.showcase, this.state.showcase.name);
        data.set('name', this.state.name);
        data.set('location', this.state.location);
        data.set('skill', this.state.skill);
        data.set('description', this.state.description);
        data.set('date_of_birth', this.state.description);
        data.set('salary', this.state.salary);
        data.set('email', this.state.email);
        axios.post("http://localhost:3000/api/v1/engineer", data)
    }
    render() {
    return (
      <>
        <Form onSubmit={this.handlerSubmit} style={{marginTop:'100px'}}>
        <h2 >Profile</h2>
        <Form.Group style={{marginTop:'25px'}} as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Your Name" name="name" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Description" name="description" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Skill
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Your Skill" name="skill" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Location
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Your Location" name="location" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Birthday
            </Form.Label>
            <Col sm={10}>
            <DatePicker onChange={this.handlerDate} value={this.state.date_of_birth}/>
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Showcase
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerPhoto} type="file" name="showcase" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Salary
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Your Epected Salary" name="salary" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="email" placeholder="Email" name="email" />
            </Col>
        </Form.Group>
        
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Create</Button>
            </Col>
        </Form.Group>
        </Form>  
      </>
    )
  }
}

export default AddEngineer
