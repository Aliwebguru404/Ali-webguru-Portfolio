import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Email from "@iconscout/react-unicons/icons/uil-fast-mail";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <div className="box-thenk">
          <h3 className="thenk">Shoaib's Portfolio</h3>
          <p className="then">Thank you for visiting my personal portfolio <br /> website. Connect with me over socials. <br/></p>
      </div>
      <div className="right">
        <div className="box">
          <h3>Contact Info</h3>
          <p> <Email color="white" size={"1.5rem"} />aliwebguru404@gmail.com</p>
      </div>
        <div className="f-icons">
        <a href="https://www.instagram.com/shoaib.ali.5245/" target="blank"><Insta color="white" size={"3rem"} /></a>
        <a href="https://www.facebook.com/shahzaibali.ali.5245" target="blank"> <Facebook color="white" size={"3rem"} /></a>
        <a href="https://github.com/Aliwebguru404" target="blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
        </div>
      </div>
    </div>
    <div className="foo0ter2">
    <img src={Wave} alt="" style={{ width: "100%" }} />
    <div className="ffbox">
          <h3>Contact Info</h3>
          <p> <Email color="white" size={"1.5rem"} />aliwebguru404@gmail.com</p>
          <p className="then">Thank you for visiting my personal portfolio </p>
      </div>
    </div>
     </>
  );
};

export default Footer;
