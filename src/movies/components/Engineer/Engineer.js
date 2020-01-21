import React, { Component } from 'react'
import Card from './Card'
import { Row, Dropdown, DropdownButton, ButtonGroup, Pagination, Button, CardColumns, } from 'react-bootstrap'
import Header from '../../Header'
import { connect } from 'react-redux'
import { fetchEngineer } from '../../public/redux/action/Engineer'
import Loader from 'react-loader-spinner'
class EngineerList extends Component {
    constructor() {
        super() 
        this.state = {
            engineer:[],
            firstPage:'',
            lastPage:'',
            totalPage:'',
            currentPage:'',
            nextPage:'',
            prevPage:'',
            isLoading: false,
            isError: false,
            user: 'login'
        }
    } 
    getToken = (headers) =>{
        if (headers && headers.authorization) {
          var parted = headers.authorization.split(" ");
            if (parted.length === 2) {
             this.setState({
               token: parted[1]
             }) 
            } else {
             return null;
            }
          } else {
           return null;
          }
      } 
    fetchEngineer = (e) => {
        const keyword = '?page=1&search='+e
        this.props.fetch(keyword)
    }
    getAll = () => {
        const keyword = this.props.location.search
        this.props.fetch(keyword)
    }
    componentDidMount(){
 
        this.getAll()
       
    }
    render() {
        const renderEngineer = this.props.engineer.engineer.map(engineer=>{
            return (
                
                  <Card props={engineer} key={engineer.id}/>
                
              )
        }) 
        return (
            <>
            <Header getDataFromSearch={this.fetchEngineer} searchBar='true' user={this.state.user}/>
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
            {this.props.engineer.isLoading ?
                <Row className="justify-content-center">
                <Loader type="BallTriangle" color="blue" height={80} width={80} />
                </Row> : 
                this.props.engineer.isError ? (
                <Row className="justify-content-center">
                <Button variant="outline-primary" onClick={this.getAll()}> Try Again</Button>
                </Row>
                ) : 
                
                    <CardColumns style={{columnCount: '5'}}>
                    {renderEngineer}
                    </CardColumns>
                
                }
            
            <Row className='justify-content-center' style={{marginTop:"50px"}}>
            <Pagination>
                <Pagination.First href={this.props.engineer.firstPage} />
                <Pagination.Prev href={this.props.engineer.prevPage}/>
                <Pagination.Item>{this.props.engineer.currentPage+' of '+this.props.engineer.totalPage}</Pagination.Item>
                <Pagination.Next href={this.props.engineer.nextPage}/>
                <Pagination.Last href={this.props.engineer.lastPage} />
            </Pagination>
            </Row>
            </>
        )
    }
}

const mapStateToProps = state => ({
    engineer: state.engineer
})

const mapDispatchToProps = dispatch => ({
    fetch: keyword => dispatch(fetchEngineer(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(EngineerList)
// export default EngineerList