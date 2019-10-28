import React from "react"
import { Link } from "gatsby"
import ServiceCard from "./ServiceCard"
import ImgService from "../images/ic_test.png"
import ImgTeams from "../images/ic_teams.png"

const Services = ({ title }) => (
  <div className="services">
    <div className="container">
      <h2>{title}</h2>
      <div className="text-container">
        <p>
          A succesfull App takes users on a pleasant journey with a powerful UX
          and exceptional UI. <br />
          It requires a lot of testing and a through understanding of your
          users' behaviour, needs and problems. That's where our UX services
          come in play.
        </p>
      </div>
      <div className="services-cards-cont col-2">
        <ServiceCard
          ServiceTitle="Dedicated UX Teams"
          ServiceDesc="Lorem Ipsum Dolo sit amet sert ret name connsectur"
          ImgSrc={ImgTeams}
        />
        <ServiceCard
          ServiceTitle="UX Expert Review"
          ServiceDesc="Lorem Ipsum Dolo sit amet sert ret name"
          ImgSrc={ImgService}
        />
      </div>
    </div>
  </div>
)

export default Services
