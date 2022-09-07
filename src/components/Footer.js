import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className = 'footer-background'>
        <div className = 'disclaimer'> 
          <h2 className = 'disclaimer-header'> Cruise With Confidence </h2>
          <p> Cancel up to 48 hours of your cruise date and get a future cruise credit good for 12 months or more. <br></br> Applies to existing bookings and new ones made before March 31, 2022. </p>
        </div>

        <hr/>

        <div className = 'footer-content-stack'> 
        <ul className = 'footer-content-items'>
        <ul>
            <li className = 'footer-content-stack-header'> Find A Cruise </li>
            <li> Last Minute Cruises </li>
            <li> Weekend Cruises </li>
            <li> Black Friday & Cyber Monday </li>
            <li> Holiday Cruises </li>
            <li> 2022-2033 Cruises </li>
            <li> Largest Cruise Ships</li>
            <li> Family Vacations </li>
            <li> Royal Weddings </li>
            <li> Themed Cruises </li>
          </ul>

          <ul>
            <li className = 'footer-content-stack-header'> Destinations </li>
            <li> Perfect Day at CocoCay </li>
            <li> Caribbean Cruises </li>
            <li> Bahamas Cruises </li>
            <li> Alaska Cruises </li>
            <li> Mediterranean Cruises </li>
            <li> European Cruises </li>
            <li> Hawaii Cruises </li>
            <li> Mexico Cruises </li>
            <li> Bermuda Cruises </li>
          </ul>

          <ul>
            <li className = 'footer-content-stack-header'> Popular Ports </li>
            <li> Miami, Florida </li>
            <li> Galveston, Texas </li>
            <li> New York, New York </li>
            <li> Baltimore, Maryland </li>
            <li> Orlando, Florida </li>
            <li> Fort Lauderdale, Florida </li>
            <li> New Orleans, Lousiana </li>
            <li> Boston, Massachusetts </li>
            <li> Barcelona, Spain </li>
          </ul>

          <ul>
            <li className = 'footer-content-stack-header'> Plan a Cruise </li>
            <li> Update Guest Information </li>
            <li> Make A Payment </li>
            <li> Redeem Cruise Credit </li>
            <li> Cruise Planner </li>
            <li> Book a Flight </li>
            <li> Contact Us </li>
            <li> Transportation </li>
            <li> Travel Protection </li>
            <li> Port Shopping </li>
          </ul>
          </ul>     
        </div>
    </div>
  )
}

export default footer