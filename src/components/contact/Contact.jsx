import { useState } from "react";
import "./contact.scss";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API, etc.)
    console.log(formData);
    alert("Message Sent!");
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact Details</h2>
      <div className="itemContainer">
        <AiFillPhone className="icon" />
        <span>+905413539181</span>
      </div>
      <div className="itemContainer">
        <AiOutlineMail className="icon" />
        <span>aligumuslaw@gmail.com</span>
      </div>
      <div className="itemContainer">
        <AiOutlineEnvironment className="icon" />
        <span>Your Office Address Here</span>
      </div>
      <div className="mapContainer">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.151046951194!2d-73.9860163850061!3d40.75632247932745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fa0b055d1d%3A0x6b8a6ee37b7d3e36!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1631589096998!5m2!1sen!2sus" // Change to your desired location URL
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
