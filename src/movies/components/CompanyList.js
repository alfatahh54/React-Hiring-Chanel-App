import React, { Component } from 'react'
import axios from 'axios'
import Card from './Engineer/Card'
import { Row } from 'react-bootstrap'
class CompanyList extends Component {
    constructor() {
        super() 
        this.state = {
            company:[]
        }
    }  
    getData() {
        axios.get("http://localhost:3000/api/v1/companies")
        .then(res => {
            this.setState({
                company : res.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
 
        this.getData()
       
    }
    render() {
        const renderCompany = this.state.company.map(company=>{
            return (
                <Row>
                  <Card props={company} key={company.id}/>
                  
                </Row>
              )
        }) 
        return (
            <div>
            { renderCompany}
            </div>
        )
    }
}

export default CompanyList
