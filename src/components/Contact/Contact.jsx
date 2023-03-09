import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form action="https://formspree.io/f/xjvzdgga" method="POST">
          <input type="text" name="user_name" className="user"  placeholder="Name" autoComplete="off"/>
          <input type="email" name="user_email" className="user" placeholder="Email" autoComplete="off"/>
          <textarea name="message" className="user" autoComplete="off" placeholder="Message"></textarea>
          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
