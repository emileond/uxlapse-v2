import React from "react"
import { Link } from "gatsby"

const Process = ({ title }) => (
  <div className="process">
    <div className="container">
      <h2>{title}</h2>
      <div className="process-bar"></div>
      <div className="process-grid">
        <div className="process-item">
          <div className="process-number">01</div>
          <div className="bullet">
            <div className="process-border">
              <div className="process-bullet"></div>
            </div>
          </div>
          <div className="process-item-text">
            <h4>Understand</h4>
            <p>We observe, research and interview your customers to understand the market better as well as define the business opportunities for you.</p>
          </div>
        </div>
        <div className="process-item">
          <div className="process-number">02</div>
          <div className="bullet">
            <div className="process-border">
              <div className="process-bullet"></div>
            </div>
          </div>
          <div className="process-item-text">
            <h4>Ideate</h4>
            <p>We prototype and test every week to discover the best possible design layout that would be be clear for your users.</p>
          </div>
        </div>
        <div className="process-item">
          <div className="process-number">03</div>
          <div className="bullet">
            <div className="process-border">
              <div className="process-bullet"></div>
            </div>
          </div>
          <div className="process-item-text">
            <h4>Measure</h4>
            <p>We run multiple workshops workshops with you to craft a long-term UX strategy for your product and define how to measure it's performance.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Process
