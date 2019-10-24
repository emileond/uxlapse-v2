import React from "react"
import ButtonPrimary from "../components/ButtonPrimary"
import HeroImg from "../images/rocket.svg"
import IconPlay from "../images/play-circle.svg"

const Hero = ({ h1, p }) => {
  return (
    <div className="hero">
      <div className="container">
          <div className="col-2">
        <div className="hero-txt-col">
          <h1>{h1}</h1>
          <p>{p}</p>
          <ButtonPrimary buttonText="Get Started"></ButtonPrimary>
          <span><img className="hero-icon" src={IconPlay} alt="Play video icon"/> Why work with us?</span>
        </div>
        <div className="hero-img-col">
          <img className="hero-img" src={HeroImg} alt="Hero image"/>
        </div>


          </div>
      </div>
    </div>
  )
}

export default Hero

