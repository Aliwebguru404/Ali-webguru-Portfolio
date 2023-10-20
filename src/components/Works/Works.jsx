import React, { useContext } from "react";
import "./Works.css";
import word from "../../img/word.png";
import download from "../../img/download.jpg"
import download1 from "../../img/download1.png"
import download2 from "../../img/download2.jpg"
import javascript from "../../img/javascript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <>
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Heroku
          </span>
          <span>Netlify</span>
          <spane>
            I use them to create beautiful websites. I am expert in all these.I
            <br />
            have also done jobs in some places with my work.Due to which  
            <br />
            i have good exprience in my work.
            <br />
            <br />
            <hr />
            <div className="skillss">
            <h4>Skills</h4>
            1. HTML5  2. CSS3  3. JavaScript  4. TypeScript <br />
            5. React JS 6. Next JS 7. Bootstrap 8. MUI <br />
            9. WordPress 10. Shopify 11. Woocommerce 12. Elementor <br />
            13. Astra  14. Crisp  15. Element Pack  16. Contact Form 7 <br />
            17. React Native  18. Android Studio  19. VS Code
            </div>
            <br />
            <hr />
            <br />
            <br />
            I always try to work according to the customer's thinking.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={download} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={download1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={download2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={word} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>    
      </div>
    </>
  );
};

export default Works;
