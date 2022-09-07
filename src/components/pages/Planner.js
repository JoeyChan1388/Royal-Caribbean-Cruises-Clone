import React from 'react'
import Button from '../Button'
import HeroSection from '../HeroSection'

function Planner() {
    return (
        <div>
            <div className="hero-wrapper">
            <HeroSection
                toptext="AN EASIER WAY TO PLAN AHEAD"
                middletext="CRUISE PLANNER"
                bottomtext=""
                page="planner"
            />
            </div>
            
            <div className="centered-content">
                <h3 className="ships-page-header-2"> <strong> Ready To Start Planning? </strong>  </h3>
                <p className="grey-paragraph"> Sign in or create an account to see the best deals for you </p>

                <Button buttonStyle='btn--primary-blue'>
                    SIGN IN
                </Button>

                <br/>
                <a className="link" href="/Signup"> Create an Account </a>
                <br/>
                <br/>
                <br/>

                <p className="grey-paragraph"> Do you have a Future Cruise Credit you’d like to apply toward an existing reservation? </p>
                <br/>
                <a className="link" href="/Signin"> Redeem Your Future Cruise Credit Now </a>
            </div>
            
        </div>
    )
}

export default Planner