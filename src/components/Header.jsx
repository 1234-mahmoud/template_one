import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/download.jpeg'
import '../style/Header.css'
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <div className="links">
          <FontAwesomeIcon icon={faList} />
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
