import React from "react";
import "../styles/contact.css";
import contactMe from "../services/contactMe.api";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  async function handleClick() {
    if (email) {
      const res = await contactMe(email);
      console.log(res);
      if (res.status === 200) {
        setMessage("Form Submitted");
      } else if (res.status === 422) {
        setMessage("Incorrect Email");
      } else {
        setMessage("Something went wrong");
      }
    }
  }
  return (
    <div className="contact">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="input" id="btn" onClick={handleClick}>
        Contact Me
      </button>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Contact;
