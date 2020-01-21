import React, { Component } from 'react'
import { Col, Row, Table, Card, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCompany, deleteCompany } from '../../public/redux/action/Company'

class DetailCompany extends Component {
    constructor() {
        super() 
        this.state = {
            'name' : '',
            'location':'',
            'description':'',
            'logo':null,
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
        for(let i = 0; i < props.company.company.length; i++){
            if(props.company.company[i].id===id){
                this.setState({
                    'name' : props.company.company[i].name,
                    'location': props.company.company[i].location,
                    'description': props.company.company[i].description,
                    'logo': props.company.company[i].logo,
                    'email': props.company.company[i].email
                })
            }
        }
    }
    handlerDelete=()=>{
        const id = this.props.match.params.id
        this.props.deleteCompany(id)
        this.props.history.push('/company?page=1')
    }
    
    render() {
        return (
          <>
            <Row style={{ marginTop: '100px'}}>
                {console.log(this.props)}
                <Col md={3}>
                <Card style={{  borderRadius:'20px', backgroundImage: `url('${this.state.logo}')`, backgroundPosition:'center', backgroundSize:'cover'}}>
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
                    <td>Location</td>
                    <td>{this.state.location}</td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                    </tr>
                </tbody>
                </Table>
                <Form.Group as={Row}>
                    <Col sm={{offset:4}} md={1}>
                    <Button href={'/company/edit/'+this.props.match.params.id} >Edit</Button>
                    </Col>
                    <Col sm='auto'>
                    <Button onClick={this.handlerDelete}>Delete</Button>
                    </Col>
                </Form.Group>
                </Col>
            </Row> 
          </>
        )
      }
    }
    
    const mapStateToProps = state => ({
        company: state.company
    })
    const mapDispatchToProps = dispatch => ({
        fetch: keyword => dispatch(fetchCompany(keyword)),
        deleteCompany: id => dispatch(deleteCompany(id))
    })

    export default connect(mapStateToProps, mapDispatchToProps)(DetailCompany)
    
