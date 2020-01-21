import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux'
import { editEngineer, fetchEngineer } from '../../public/redux/action/Engineer'

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
    componentDidMount= ()=>{
        const id = this.props.match.params.id
        const keyword = `?search=${id}`
        this.props.fetch(keyword)        
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
    componentWillReceiveProps=(props)=>{
        if(props.engineer.engineer.length){
            let d = new Date(props.engineer.engineer[0].date_of_birth),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()
            const date = [year, month, day].join('-')
            this.setState({
                'name' : props.engineer.engineer[0].name,
                'location': props.engineer.engineer[0].location,
                'skill': props.engineer.engineer[0].skill,
                'description': props.engineer.engineer[0].description,
                'date_of_birth': date,
                'showcase': props.engineer.engineer[0].showcase,
                'salary': props.engineer.engineer[0].salary,
                'email': props.engineer.engineer[0].email
            })
        }
    }
    handlerSubmit= (e)=> {
        const id = this.props.match.params.id
        let d = new Date(this.state.date_of_birth),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()
            const date = [year, month, day].join('-')
        let data = new FormData();
        data.append('showcase', this.state.showcase, this.state.showcase.name);
        data.set('name', this.state.name);
        data.set('location', this.state.location);
        data.set('skill', this.state.skill);
        data.set('description', this.state.description);
        data.set('date_of_birth', date);
        data.set('salary', this.state.salary);
        data.set('email', this.state.email);
        this.props.editEngineer(id, data)

        this.props.history.push('/engineer/detail/'+id)
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
            <Col sm={{offset:2}} >
            <Button type="submit">Edit</Button>
            </Col>
        </Form.Group>
        </Form> 
      </>
    )
  }
}
const mapStateToProps = state => ({
    engineer: state.engineer
})

const mapDispatchToProps = dispatch => ({
    fetch: keyword => dispatch(fetchEngineer(keyword)),
    editEngineer: (id, data)=> dispatch(editEngineer(id, data))   
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEngineer)
