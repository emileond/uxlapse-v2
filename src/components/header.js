import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = () => (
  <header className="header">
    <nav id="main-nav" className="navbar">
      <Link to="/">
      <img src={logo} className="logo" alt="logo" />
      </Link>
        <ul>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">Case Studies</Link>
          </li>
          <li>
            <Link to="#">Testimonails</Link>
          </li>
          <li>
            <Link to="/blog/">Contact Us</Link>
          </li>
        </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
