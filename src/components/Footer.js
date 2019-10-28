import React from "react"
import ButtonRounded from "../components/ButtonRounded"

import Arrow from "../images/arrow-right.svg"

const Footer = ({ copyright }) => {
  return (
    <footer>
      <div className="footer container">
        <section className="footer-grid">
          <div>
            <ul>
              <li>LOGO</li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>Dedicated UX Teams</li>
              <li>UX Expert Reviews</li>
              <li>Front-end Development</li>
            </ul>
          </div>
          <div>
            <h5>Links</h5>
            <ul>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Design System</li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
            <div>
              <input placeholder="Subscribe to our Newsletter"></input>
              <div className="footer-btn">
                <ButtonRounded Icon={Arrow} />
              </div>
            </div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </section>
      </div>
      <section className="footer-copyright">{copyright}</section>
    </footer>
  )
}

export default Footer
