import React  from 'react'
import BackgroundJumbo from './../../image/dublin-1.jpg'
import {Jumbotron} from 'react-bootstrap'

function Home(){
    return(
            
            <center>
            <Jumbotron style={{backgroundImage:`url('${BackgroundJumbo}')`, backgroundSize:'cover', marginTop:'auto' }}>
                 <h1 style={{marginTop:'150px'}}>Welcome!</h1>
                <p style={{color:'green'}}>
                    This Site will Connect Job Seekers with Any Companies
                </p>
            </Jumbotron>
            </center>
            
    )
}

export default Home