  import React from "react";
  import "./contact.css";

  const Contact = () => {
    return (
      <section className="contact-section" id="contact">

        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-card">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit">Send Message</button>

          </form>

          <div className="contact-socials">

            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>

          </div>

        </div>

      </section>
    );
  };

  export default Contact;