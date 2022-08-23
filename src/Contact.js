import React from "react";

export default function Contact() {
  return (
    <div className="form-container">
      <form
        className="contact-form-container"
        action="mailto:n.kandekore@gmail.com"
        method="post"
      >
        <div className="name-and-email-container">
          <input className="name" type="text" placeholder="name" />

          <input className="email" type="email" placeholder="email address" />
        </div>
        <div className="message-box-container">
          <textarea className="message" type="text" placeholder="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
