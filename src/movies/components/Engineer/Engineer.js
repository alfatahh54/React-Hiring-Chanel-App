import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import { Row, Dropdown, DropdownButton, ButtonGroup, Pagination } from 'react-bootstrap'

class EngineerList extends Component {
    constructor() {
        super() 
        this.state = {
            engineer:[],
            firstPage:'',
            lastPage:'',
            totalPage:'',
            currentPage:'',
            nextPage:"",
            prevPage:''
        }
    }  
    getData() {
        axios.get(`http://localhost:3000/api/v1/engineers${this.props.location.search}`)
        .then(res => {
            this.setState({
                engineer : res.data.data,
                firstPage: '/engineer'+this.props.location.search.replace('page='+res.data.current_page,'page=1'),
                lastPage: '/engineer'+this.props.location.search.replace('page='+res.data.current_page,'page='+res.data.total_page),  
                totalPage: res.data.total_page,
                currentPage: res.data.current_page,
                prevPage: res.data.prevLink,
                nextPage: res.data.nextLink
            })
            console.log(this.props)
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
 
        this.getData()
       
    }
    render() {
        const renderEngineer = this.state.engineer.map(engineer=>{
            return (
                
                  <Card props={engineer} key={engineer.id}/>
              )
        }) 
        return (
            <>
            <Row >
            <ButtonGroup style={{marginTop:"100px", marginBottom:'50px'}} aria-label="Basic example">
            <DropdownButton as={ButtonGroup} title="Per Page" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" href={'/engineer'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=5'}>5</Dropdown.Item>
                <Dropdown.Item eventKey="2" href={'/engineer'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=10'}>10</Dropdown.Item>
                <Dropdown.Item eventKey="3" href={'/engineer'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=25'}>25</Dropdown.Item>
                <Dropdown.Item eventKey="4" href={'/engineer'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=50'}>50</Dropdown.Item>
                <Dropdown.Item eventKey="5" href={'/engineer'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=100'}>100</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="SortBy" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" href={'/engineer'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=date_updated&sort=ASC|&sortBy=date_updated&sort=DESC/gi,'')+'&sortBy=name&sort=ASC'}>Name[A-Z]</Dropdown.Item>
                <Dropdown.Item eventKey="2" href={'/engineer'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=date_updated&sort=ASC|&sortBy=date_updated&sort=DESC/gi,'')+'&sortBy=name&sort=DESC'}>Name[Z-A]</Dropdown.Item>
                <Dropdown.Item eventKey="3" href={'/engineer'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=date_updated&sort=ASC|&sortBy=date_updated&sort=DESC/gi,'')+'&sortBy=date_updated&sort=ASC'}>Date[A-Z]</Dropdown.Item>
                <Dropdown.Item eventKey="4" href={'/engineer'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=date_updated&sort=ASC|&sortBy=date_updated&sort=DESC/gi,'')+'&sortBy=date_updated&sort=DESC'}>Date[Z-A]</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>
            </Row>
            <Row className='justify-content-center'>
                { renderEngineer}
            </Row>
            <Row className='justify-content-center' style={{marginTop:"50px"}}>
            <Pagination>
                <Pagination.First href={this.state.firstPage} />
                <Pagination.Prev href={this.state.prevPage}/>
                <Pagination.Item>{this.state.currentPage+' of '+this.state.totalPage}</Pagination.Item>
                <Pagination.Next href={this.state.nextPage}/>
                <Pagination.Last href={this.state.lastPage} />
            </Pagination>
            </Row>
            </>
        )
    }
}

export default EngineerList
