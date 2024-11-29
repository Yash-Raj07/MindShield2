import React from 'react'
import './ThirdComponent.css'

const ThirdComponent = () => {
  return (
    <div className="ThirdComp">
      <div className="bg">
      <img src="/src/assets/third.jpg" alt="bg" width="693" height="598" />
      </div>
      <div className='content'>
        <h1>Take the first step to the Safer & Happier YOU</h1>
        <p>Our platform is designed to prioritize your safety and mental well-being. With an intuitive SOS button, you can instantly alert your emergency contacts during critical situations. Additionally, we offer a secure journaling feature to help you reflect and grow emotionally, along with daily positive affirmations to uplift your spirit. Combining practicality and positivity, our website is your companion for both emergencies and everyday self-care.</p>

        <button className="lm
        -button">Learn More</button>
      </div>
    </div>
  )
}

export default ThirdComponent
