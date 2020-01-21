import React, { Component } from 'react'
import Card from './Card'
import { Row, Dropdown, DropdownButton, ButtonGroup, Pagination, Button, CardColumns } from 'react-bootstrap'
import Header from '../../Header'
import { connect } from 'react-redux'
import { fetchCompany } from '../../public/redux/action/Company'
import Loader from 'react-loader-spinner'

class CompanyList extends Component {
    
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
    fetchCompany = (e) => {
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
        const renderCompany = this.props.company.company.map(company=>{
            return (
                
                  <Card props={company} key={company.id}/>
                
              )
        }) 
        return (
            <>
            {console.log(this.props.company)}
            <Header getDataFromSearch={this.fetchCompany} searchBar='true' user={this.props.company.user}/>
            <Row >
            <ButtonGroup style={{marginTop:"100px", marginBottom:'50px'}} aria-label="Basic example">
            <DropdownButton as={ButtonGroup} title="Per Page" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" href={'/company'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=5'}>5</Dropdown.Item>
                <Dropdown.Item eventKey="2" href={'/company'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=10'}>10</Dropdown.Item>
                <Dropdown.Item eventKey="3" href={'/company'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=25'}>25</Dropdown.Item>
                <Dropdown.Item eventKey="4" href={'/company'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=50'}>50</Dropdown.Item>
                <Dropdown.Item eventKey="5" href={'/company'+this.props.location.search.replace(/&limit=5|&limit=10|&limit=25|&limit=50|&limit=100/gi,'')+'&limit=100'}>100</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="SortBy" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" href={'/company'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=description&sort=ASC|&sortBy=description&sort=DESC/gi,'')+'&sortBy=name&sort=ASC'}>Name[A-Z]</Dropdown.Item>
                <Dropdown.Item eventKey="2" href={'/company'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=description&sort=ASC|&sortBy=description&sort=DESC/gi,'')+'&sortBy=name&sort=DESC'}>Name[Z-A]</Dropdown.Item>
                <Dropdown.Item eventKey="3" href={'/company'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=description&sort=ASC|&sortBy=description&sort=DESC/gi,'')+'&sortBy=description&sort=ASC'}>Date[A-Z]</Dropdown.Item>
                <Dropdown.Item eventKey="4" href={'/company'+this.props.location.search.replace(/&sortBy=name&sort=ASC|sortBy=name&sort=DESC|sortBy=description&sort=ASC|&sortBy=description&sort=DESC/gi,'')+'&sortBy=description&sort=DESC'}>Date[Z-A]</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>
            </Row>
            {this.props.company.isLoading ?
                <Row className="justify-content-center">
                <Loader type="BallTriangle" color="blue" height={80} width={80} />
                </Row> : 
                this.props.company.isError ? (
                <Row className="justify-content-center">
                <Button variant="outline-primary" onClick={this.getAll()}> Try Again</Button>
                </Row>
                ) : 
                
                    <CardColumns style={{columnCount: 5,}}>
                    {renderCompany}
                    </CardColumns>
                
                }
            
            <Row className='justify-content-center' style={{marginTop:"50px"}}>
            <Pagination>
                <Pagination.First href={this.props.company.firstPage} />
                <Pagination.Prev href={this.props.company.prevPage}/>
                <Pagination.Item>{this.props.company.currentPage+' of '+this.props.company.totalPage}</Pagination.Item>
                <Pagination.Next href={this.props.company.nextPage}/>
                <Pagination.Last href={this.props.company.lastPage} />
            </Pagination>
            </Row>
            </>
        )
    }
}

const mapStateToProps = state => ({
    company: state.company
})

const mapDispatchToProps = dispatch => ({
    fetch: keyword => dispatch(fetchCompany(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)