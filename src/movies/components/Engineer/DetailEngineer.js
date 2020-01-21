import React, { Component } from 'react'
import { Col, Row, Table, Card, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchEngineer, deleteEngineer } from '../../public/redux/action/Engineer'

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
    componentDidMount=()=>{
        const id = this.props.match.params.id
        const keyword = `?search=${id}`
        this.props.fetch(keyword)
    }

    componentWillReceiveProps= async(props)=>{
        const id = props.match.params.id
        for(let i = 0; i < props.engineer.engineer.length; i++){
            if(props.engineer.engineer[i].id===id){
                let d = new Date(props.engineer.engineer[i].date_of_birth),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear()
                const date = [year, month, day].join('-')
                this.setState({
                    'name' : props.engineer.engineer[i].name,
                    'location': props.engineer.engineer[i].location,
                    'skill': props.engineer.engineer[i].skill,
                    'description': props.engineer.engineer[i].description,
                    'date_of_birth': date,
                    'showcase': props.engineer.engineer[i].showcase,
                    'salary': props.engineer.engineer[i].salary,
                    'email': props.engineer.engineer[i].email
                })
            }
        }
    }
    handlerDelete=()=>{
        const id = this.props.match.params.id
        this.props.deleteEngineer(id)
        this.props.history.push('/engineer?page=1')
    }
    render() {
        return (
          <>
            <Row style={{ marginTop: '100px'}}>
                {console.log(this.props)}
                <Col md={3}>
                <Card style={{  borderRadius:'20px', backgroundImage: `url('${this.state.showcase}')`, backgroundPosition:'center', backgroundSize:'cover'}}>
                    <Card.Body style={{height:300}}>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Table striped bordered hover>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>{this.state.name}</td>
                    </tr>
                    <tr>
                    <td>Description</td>
                    <td>{this.state.description}</td>
                    </tr>
                    <tr>
                    <td>Skill</td>
                    <td >{this.state.skill}</td>
                    </tr>
                    <tr>
                    <td>Location</td>
                    <td>{this.state.location}</td>
                    </tr>
                    <tr>
                    <td>Date of Birth</td>
                    <td>{this.state.date_of_birth}</td>
                    </tr>
                    <tr>
                    <td>Salary</td>
                    <td>{this.state.salary}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                    </tr>
                </tbody>
                </Table><br/>
                <Form.Group as={Row}>
                    <Col sm={{offset:4}} md={1}>
                    <Button href={'/engineer/edit/'+this.props.match.params.id} >Edit</Button>
                    </Col>
                    <Col bg='danger' sm='auto'>
                    <Button onClick={this.handlerDelete} >Delete</Button>
                    </Col>
                </Form.Group>
                </Col>
            </Row> 
          </>
        )
      }
    }
    
    const mapStateToProps = state => ({
        engineer: state.engineer
    })
    const mapDispatchToProps = dispatch => ({
        fetch: keyword => dispatch(fetchEngineer(keyword)),
        deleteEngineer: keyword => dispatch(deleteEngineer(keyword))
    })

    export default connect(mapStateToProps, mapDispatchToProps)(DetailEngineer)
    
