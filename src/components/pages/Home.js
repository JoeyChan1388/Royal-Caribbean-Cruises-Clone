import React from 'react'
import HeroSection from '../HeroSection'
import Cards from '../Cards'

function Home() {
  return (
    <div> 
        <HeroSection 
        toptext="IMPOSSIBLE NEVER SAW YOU COMING"
        middletext="UP TO $550 OFF"
        bottomtext="+30% OFF ALL GUESTS"
        page="home"
        />
        <div className="card-transition"></div>
        <Cards/>
    </div>
  )
}

export default Home