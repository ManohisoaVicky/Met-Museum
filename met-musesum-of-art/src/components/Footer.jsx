import React from 'react'
import "../styles/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/user/metmuseum" target="_blank" rel="noopener noreferrer"
        className="fa-2xs youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/metmuseum/" target="_blank" rel="noopener noreferrer"
        className="fa-2xs facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/metmuseum?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa-2xs twitter social" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/metmuseum/" target="_blank" rel="noopener noreferrer"
        className="fa-2xs instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
  )
}

export default Footer