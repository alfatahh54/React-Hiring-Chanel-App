import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Company from './components/Company/Company'
import createCompany from './components/Company/AddCompany'
import editCompany from './components/Company/EditCompany'
import DetailCompany from './components/Company/DetailCompany'
import Engineer from './components/Engineer/Engineer'
import DetailEngineer from './components/Engineer/DetailEngineer'
import createEngineer from './components/Engineer/AddEngineer'
import editEngineer from './components/Engineer/editEnginer'
import Signup from "./components/Signup";

function Main() {
    return(
        <>
        <Switch style={{ top:'auto'}}>
            <Route exact path='/' component={Home} />
            <Route exact path='/engineer' component={Engineer} />
            <Route path='/engineer/create' component={createEngineer} />
            <Route exact path='/engineer/edit/:id' component={editEngineer} />
            <Route exact path='/company' component={Company} />
            <Route path='/company/create' component={createCompany} />
            <Route exact path='/company/edit/:id' component={editCompany} />
            <Route exact path = '/company/detail/:id' component={DetailCompany}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path = '/engineer/detail/:id' component={DetailEngineer}/>
        </Switch>
        </>
    )
}

export default Main 