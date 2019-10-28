import React from "react"
import { Link } from "gatsby"
import ButtonSecondary from "./ButtonSecondary"

const ServiceCard = ({ ServiceTitle, ServiceDesc, ImgSrc }) => (
  <div className="services-card">
    <div className="services-card-title">
      <img src={ImgSrc} />
      <h3>{ServiceTitle}</h3>
    </div>
    <p>{ServiceDesc}</p>
    <ButtonSecondary buttonText="Learn More" />
  </div>
)

export default ServiceCard
