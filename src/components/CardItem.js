import React from 'react'
import {Link} from 'react-router-dom'
import './CardItem.css'

function CardItem(props) {
  return (
    <>
        <li className="card-item">
            <Link className="card-item-link" to={props.path}>
                    <img src={props.src} className="card-item-pic" alt="Travel"/>
            </Link>

            <div className="card-item-info">
                    <h5 className="card-item-title"> {props.title}</h5>
                    <p className="card-item-text"> {props.body} </p>
                </div>
        </li>
    </>
  )
}

export default CardItem