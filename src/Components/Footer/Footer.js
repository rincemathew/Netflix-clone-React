import React from 'react';
import './footer.css';
import { IconContext } from "react-icons";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div
      style={{ paddingTop: "40px", paddingBottom: "20px" }}
      className="flex-box"
    >
      <div style={{ width: "70%" }}>
        <div>
          <IconContext.Provider value={{ color: "white", className: "global-class-name"}}>
            <div>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </IconContext.Provider>
        </div>

        <div style={{paddingTop:'10px', paddingBlock:'10px'}} className="flex-box">
          <div style={{ width: "25%" }}>
            <p className='padd'>Audio and Subtitles</p>
            <p className='padd'>Media Centre</p>
            <p className='padd'>Privacy</p>
            <p className='padd'>Contact Us</p>
          </div>
          <div style={{ width: "25%" }}>
          <p className='padd'>Audio Description</p>
          <p className='padd'>Investor Relations</p>
          <p className='padd'>Legal Notices</p>
          </div>
          <div style={{ width: "25%" }}>
          <p className='padd'>Help Center</p>
          <p className='padd'>Jobs</p>
          <p className='padd'>Cookie Preferences</p>
          </div>
          <div style={{ width: "25%" }}>
          <p className='padd'>Gift Cards</p>
          <p className='padd'>Terms of Use</p>
          <p className='padd'>Coporate Information</p>
          </div>
        </div>
        <div className='padd'>
        © Used TMDB for APIS
        </div>
      </div>
    </div>
  );
}

export default Footer