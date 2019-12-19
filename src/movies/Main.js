import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import createEngineer from './components/Engineer/AddEngineer'
import editEngineer from './components/Engineer/editEnginer'
// import Engineer from './components/Engineer'
// import SingleSeries from './components/SingleSeries'
import Company from './components/CompanyList'
import Engineer from './components/Engineer/Engineer'
import DetailEngineer from './components/Engineer/DetailEngineer'
function Main() {
    return(
        <>
        <Switch style={{ top:'auto'}}>
            <Route exact path='/' component={Home} />
            <Route exact path='/engineer' component={Engineer} />
            <Route path='/engineer/create' component={createEngineer} />
            <Route exact path='/engineer/edit/:id' component={editEngineer} />
            <Route path='/company' component={Company} />
            <Route path='/login' component={Login} />
            <Route exact path = '/engineer/detail/:id' component={DetailEngineer}/>
        </Switch>
        </>
    )
}

export default Main 