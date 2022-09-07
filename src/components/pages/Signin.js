import React from 'react'
import './Signin.css'

function Signin() {
  return (
    <div>
      <img className="background-image" src="https://www.royalcaribbean.com/account/assets/images/royal/login_background.jpg" alt="Cruise" />

        <div className="sign-in-form"> 
            <h1 className="sign-in-title"> Sign in</h1>
            <input type="text" className="input-long" placeholder="Email or Username"></input>
            <input type="password" className="input-long" placeholder="Password"></input>
            <input type="submit" className="btn-submit" value="Sign in"/>
            <a href="/Signup" className="link"> Need an Account?</a>
        </div>
    </div>
  )
}

export default Signin