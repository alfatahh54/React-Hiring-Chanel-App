import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import axios from 'axios'
import DatePicker from 'react-date-picker';

class EditEngineer extends Component {
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
            let date = new Date(res.data.data[0].date_of_birth)
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
        const id = this.props.match.params.id
        e.preventDefault()
        let d = new Date(this.state.date_of_birth),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()

        const date = [year, month, day].join('/')

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day
        var data = new FormData();
        data.append('showcase', this.state.showcase, this.state.showcase.name);
        data.set('name', this.state.name);
        data.set('location', this.state.location);
        data.set('skill', this.state.skill);
        data.set('description', this.state.descriptiom);
        data.set('date_of_birth', date);
        data.set('salary', this.state.salary);
        data.set('email', this.state.email);
        axios.patch(`http://localhost:3000/api/v1/engineer/${id}`, data)
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
            Skill
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.skill} onChange={this.handlerChange} type="text" placeholder="Your Skill" name="skill" />
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
        <Form.Group  as={Row}>
            <Form.Label column sm={2}>
            Birthday
            </Form.Label>
            <Col sm={10}>
            <DatePicker onChange={this.handlerDate} value={this.state.date_of_birth}/>
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Showcase
            </Form.Label>
            <Col sm={10}>
            <Form.Control onChange={this.handlerPhoto} type="file" name="showcase" />
            </Col>
        </Form.Group>
        <Form.Group  as={Row} >
            <Form.Label column sm={2}>
            Salary
            </Form.Label>
            <Col sm={10}>
            <Form.Control value={this.state.salary} onChange={this.handlerChange} type="text" placeholder="Your Epected Salary" name="salary" />
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
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Edit</Button>
            </Col>
            <Button>Delete</Button>
        </Form.Group>
        </Form> 
      </>
    )
  }
}

export default EditEngineer
