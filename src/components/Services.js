import React from "react"
import { Link } from "gatsby"

const Services = ({ title }) => (
  <div className="services container">
    <h2>{title}</h2>
    <p>
      A succesfull App takes users on a pleasant journey with a powerful UX and
      exceptional UI. <br />
      It requires a lot of testing and a through understanding
      of your users' behaviour, needs and problems. That's where our UX services
      come in play.
    </p>
    <div className="services-cards col-2">
      <div className="service-card">
        <div className="row-3">
          <div>
              <img />
            <h4>Dedicated UX Team</h4>
          </div>
          <div>
            <p>Lorem ipsum</p>
          </div>
          <div>button</div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
