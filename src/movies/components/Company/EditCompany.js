import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import axios from 'axios'
import { editCompany, fetchCompany } from '../../public/redux/action/Company'
import { connect } from 'react-redux'

class EditCompany extends Component {
    constructor() {
        super() 
        this.state = {
            'name' : '',
            'location':'',
            'description':'',
            'logo':'',
            'email':''
        }
    }
    componentDidMount=()=>{
        const id = this.props.match.params.id
        const keyword = `?search=${id}`
        this.props.fetch(keyword)
    }
    componentWillReceiveProps= async(props)=>{
            if(props.company.company.length){
                this.setState({
                    'name' : props.company.company[0].name,
                    'location': props.company.company[0].location,
                    'description': props.company.company[0].description,
                    'logo': props.company.company[0].logo,
                    'email': props.company.company[0].email
                })
            }
    }
    handlerChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handlerPhoto=(e)=> {
        this.setState({logo: e.target.files[0]})
    }
    handlerSubmit= (e)=> {
        const id = this.props.match.params.id
        e.preventDefault()
        var data = new FormData();
        data.append('logo', this.state.logo);
        data.set('name', this.state.name);
        data.set('location', this.state.location);
        data.set('description', this.state.description);
        data.set('email', this.state.email);
        this.props.editCompany(id, data)
        this.props.history.push('/company/detail/'+id)
    }
    handlerDelete=()=>{
        const id = this.props.match.params.id
        axios.delete(`http://localhost:3000/api/v1/company/${id}`)
    }
    render() {
    return (
      <>
        <Form onSubmit={this.handlerSubmit} style={{marginTop:'100px'}}>
        <h2 >Edit</h2>
        <Form.Group style={{marginTop:'25px'}} as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.name} onChange={this.handlerChange} type="text" placeholder="Your Name" name="name" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Description
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.description} onChange={this.handlerChange} type="text" placeholder="Description" name="description" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Location
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.location} onChange={this.handlerChange} type="text" placeholder="Your Location" name="location" />
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
            <Button type="submit">Edit</Button>
            </Col>
            <Col sm='auto'>
            <Button onClick={this.handlerDelete} href='/company?page=1'>Delete</Button>
            </Col>
        </Form.Group>
        </Form> 
      </>
    )
  }
}

const mapStateToProps = state => ({
    company: state.company
})

const mapDispatchToProps = dispatch => ({
    fetch: keyword => dispatch(fetchCompany(keyword)),
    editCompany: (id, data)=> dispatch(editCompany(id, data))   
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
