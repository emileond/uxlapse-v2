import React from "react"
import ButtonPrimary from "./ButtonPrimary"

const Contact = ({ copyright }) => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2>Sounds Like a Match?</h2>
            <p>
              If you feel like you need product design services let us help with
              your challenge.
            </p>
          </div>
          <div className="contact-form">
            <form>
              <label for="name">Name:</label>
              <input type="text" placeholder="John Doe" />

              <label for="email">Email:</label>
              <input type="text" placeholder="workemail@company.com" />

              <label for="inquiry">Inquiry:</label>
              <select>
                <option disabled="disabled">Choose an Option</option>
                <option>Dedicated UX Teams</option>
                <option>UX Reviews</option>
                <option>Other</option>
              </select>

              <label for="message">Message:</label>
              <textarea rows="7" name="description" placeholder="Enter your message...">
              </textarea>
              <div className="text-center">
                <ButtonPrimary buttonText="Get In Touch" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
