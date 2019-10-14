import React from "react"
import ButtonPrimary from "../components/ButtonPrimary"

const Hero = ({ h1, p }) => {
  return (
    <div className="hero">
      <div className="container">
          <div className="col-2">
        <div>
          <h1>{h1}</h1>
          <p>{p}</p>
          <ButtonPrimary buttonText="Get Started"></ButtonPrimary>
          <span>Why work with us?</span>
        </div>
        <div></div>


          </div>
      </div>
    </div>
  )
}

export default Hero
