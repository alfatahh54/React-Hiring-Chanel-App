import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addCompany } from '../../public/redux/action/Company'

class AddCompany extends Component {
    constructor() {
        super() 
        this.state = {
            'name' : '',
            'location':'',
            'logo': null,
            'description':'',
            'email':''
        }
    }
    handlerChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handlerPhoto=(e)=> {
        this.setState({logo: e.target.files[0]})
    }
 
    handlerSubmit= (e)=> {
        e.preventDefault()
        e.preventDefault()
        let data = new FormData();
        data.append('logo', this.state.logo, this.state.logo.name);
        data.set('name', this.state.name);
        data.set('location', this.state.location);
        data.set('description', this.state.description);
        data.set('email', this.state.email);
        this.props.addCompany(data)
        this.props.history.push('/company?page=1')
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
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Description" name="description" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Location
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerChange} type="text" placeholder="Your Location" name="location" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Logo
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerPhoto} type="file" name="logo" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row}>
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.email} onChange={this.handlerChange} type="email" placeholder="Email" name="email" />
            </Col>
        </Form.Group>
        
        <Form.Group as={Row}>
            <Col sm={{offset:2}} >
            <Button type="submit">Create</Button>
            </Col>
        </Form.Group>
        </Form> 
      </>
    )
  }
}

const mapStateToProps = state => ({
    addCompany: state.company
})

const mapDispatchToProps = dispatch => ({
    addCompany: keyword => dispatch(addCompany(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany)
