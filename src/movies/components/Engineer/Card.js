import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Cards({props}){
    return(
        <Card style={{ marginLeft:'25px', marginTop:'25px', rowGap:'auto', borderRadius:'20px', height:Math.floor(Math.random()*250)+300, width:'15rem', backgroundImage:`url(images/engineer/${props.showcase})`, backgroundSize:'cover'}}>
        <Card.Body style={{height:'200px'}}>
        </Card.Body>
        <Card.Footer className="text-white bg-dark" style={{borderRadius: '0 0 20px 20px', opacity:'0.7'}}>
        <Link to={'engineer/detail/' + props.id}>
        <Card.Title style={{color:'white', textDecoration:'none'}}>{props.name}</Card.Title>
        </Link>
        <Card.Text>
            <small>
            <FontAwesomeIcon icon={faMoneyBillWave} />{' '}Rp {' '}{props.salary},-
            </small><br/>
            <small>
            <FontAwesomeIcon icon={faEnvelope} />{' '}ahmad@mail.com 
            </small><br/>
            <small>
                Skill:{<br/>}{props.skill}
            </small>

          </Card.Text>
        </Card.Footer>
        </Card>
    )
}

export default Cards