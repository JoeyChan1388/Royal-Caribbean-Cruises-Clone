import React from 'react'
import Button from './Button'
import './HeroSection.css';

function HeroSection(props) {
  return (
    <div className={`hero-container-${props.page}`}>
        <div className="hero-section-text-block">
        <h2 className="hero-section-text-1"> {props.toptext} </h2>
        <h1> {props.middletext} </h1>
        <h3> {props.bottomtext} </h3>

        { props.page === 'home' && 
        <Button className="btns" buttonStyle="btn--primary" buttonSize='btn--large'>
        BOOK NOW
        </Button>
        }
        
        </div>
    </div>
  )
}

export default HeroSection