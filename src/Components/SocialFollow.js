import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      
      
<a href="https://www.facebook.com/ahmed.hanif.718/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

<a href="https://www.instagram.com/_ahmedhanif"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://www.linkedin.com/in/ahmed-hanif-702084207"
  className="instagram social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
  );
}