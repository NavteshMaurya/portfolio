import {Row,Col} from "react-bootstrap"
import {
  AiFillGithub,

  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ContactForm.css'; // Import the CSS file for styling
function Contact() {
// ContactForm.js

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message,subject } = formData;
    var recipientEmail = "navteshmaurya@gmail.com";
    const heading = encodeURIComponent(`${subject}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${recipientEmail}?subject=${heading}&body=${body}`;
   
  };

  // Recipient email (your email)
    // Replace with your actual email

  // Generate mailto link
  // var mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message)}`;


  return (
    <>
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <Button variant="primary" type="submit" >Send Mail</Button>
      </form>
    
      <Row>
        <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NavteshMaurya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
         
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/navtesh-maurya-2663831ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/navteshmaurya75"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
         
        </Row>
        </div>
        </>
  );
};





export default Contact
