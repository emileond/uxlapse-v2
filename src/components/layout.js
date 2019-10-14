/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"

import "../styles/layout.scss"
import '../styles/styles.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      <Footer copyright="©2019 UXLapse, made with <3 in MX."></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const scroll = window

scroll.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
      document.getElementById('main-nav').classList.add('navbar-scrolled')
  }
  else {
      document.getElementById('main-nav').classList.remove('navbar-scrolled')
  }
})

export default Layout
