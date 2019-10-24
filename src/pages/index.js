import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from '../components/Hero'
import SEO from "../components/seo"
import Services from "../components/Services"

const IndexPage = () => (
  <Layout>
    <Hero
    h1="A dedicated UX Team for your product."
    p="UX Lapse will provide the ultimate UX for your web or mobile apps."
    button="Get Started"
    />
    <Services title="Grow your product with our UX Services">

    </Services>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
