import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Cards({props}){
    return(
        
        <Card ml={3} style={{ borderRadius:'20px', backgroundImage: `url('${props.showcase}')`, backgroundPosition:'center', backgroundSize:'cover', width: 200}}>
        <Card.Body style={{height:Math.floor(Math.random() * Math.floor(200))+150}} >
        </Card.Body>
        <Card.Footer className="text-white bg-dark" variant='buttom' style={{ borderRadius: '0 0 20px 20px', opacity:'0.7'}}>
        <Link to={'engineer/detail/' + props.id}>
        <Card.Title style={{color:'white', textDecoration:'none'}}>{props.name}</Card.Title>
        </Link>
        <Card.Text>
            <small>
            <FontAwesomeIcon icon={faMoneyBillWave} />{' '}Rp {' '}{props.salary},-
            </small><br/>
            <small>
            <FontAwesomeIcon icon={faEnvelope} />{' '}{props.email} 
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