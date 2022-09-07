import React from 'react'
import './Signin.css'

function Signup() {
  return (
    <div>
      <img className="background-image" src="https://www.royalcaribbean.com/account/assets/images/royal/login_background.jpg" alt="Cruise" />

        <div className="sign-in-form"> 
            <h1 className="sign-in-title"> Lets Get Started</h1>
            <input type="text" className="input-short" placeholder="First Name"></input>
            <input type="text" className="input-short" placeholder="Last Name"></input>
            <input type="email" className="input-long" placeholder="Email"></input>
            <input type="text" className="input-long" placeholder="Username"></input>
            <input type="password" className="input-long" placeholder="Password"></input>
            <input type="submit" className="btn-submit" value="Sign up"/>
            <a href="/Signin" className="link"> Have an Account?</a>
        </div>
    </div>
  )
}

export default Signup