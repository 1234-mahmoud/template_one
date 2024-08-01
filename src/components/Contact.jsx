import React from "react";
import "../style/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2 class="special-heading">Contact</h2>
        <p>We are born to create</p>
        <div className="info">
          <p className="label">Feel free to drop us a line at:</p>
          <a
            href="mailto:leonagency@mail.com?subject=Contact"
            className="link"
          >leonagency@mail.com</a>
          <div className="social">
            Find Us On Social Networks
            <FontAwesomeIcon className="socila_icons" icon={faYoutube} />
            <FontAwesomeIcon className="socila_icons" icon={faFacebook} />
            <FontAwesomeIcon className="socila_icons" icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
