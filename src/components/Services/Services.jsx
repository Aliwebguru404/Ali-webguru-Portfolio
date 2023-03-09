import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import Shoaib from './Shoaib.pdf';
import rocket from '../../img/rocket.png';
import strong from '../../img/strong.png';
import respon from '../../img/respon.png'

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Mern Stack</span>
        <span>Developer</span>
        <spane>
          Hi,There's <div style={{ fontWeight: 'bold' }}>Shoaib Ali</div>If you're looking for a professional web developer and android
          <br />
          app developer with a passion for creating dynamic and engaging digital experiences,I whould be thrilled to work with you.
          <br />
          <div style={{ color: 'blue', fontWeight: 'bold' }}> Contact me to discuss your next project! </div>
          <br />
        </spane>
        <a href={Shoaib} download>
          <button className="button v-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="rrr">
        <img src={rocket} alt="" style={{ height: 100, width: 100, marginLeft: 400, marginTop: 50 }} />
        <div style={{ marginLeft: 380, marginTop: 10, color: darkMode ? "white" : "" }}>Fast Working</div>
      </div>
      <div className="lll">
        <img src={strong} alt="" style={{ height: 150, width: 150, marginLeft: -300, marginTop: 240 }} />
        <div style={{ marginLeft: -280, marginTop: -10, color: darkMode ? "white" : "" }}>Easy To Adapt</div>
      </div>
      <div className="nnn">
        <img src={respon} alt="" style={{ height: 150, width: 200, marginTop: 230 }} />
        <div style={{ marginLeft: 60, color: darkMode ? "white" : "" }}>Responsive</div>
      </div>
    </div>
  );
};

export default Services;
