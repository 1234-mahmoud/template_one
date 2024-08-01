import React from "react";
import "../style/services.css";
import servicesData from "../data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landImage from "../images/landing.jpeg";

export default function Services() {
  return (
    <div className="services" id='services'>
      <div className="container">
        <h2 className="special-heading">Services</h2>
        <p>Don't be busy, be productive</p>
        <div className="services-content">
          {/* first col */}
          <div className="col">
            {servicesData[0].map((serv) => (
              <div className="serv" key={serv.id}>
                <FontAwesomeIcon icon={serv.icon} className="icon" />
                <div className="text">
                  <h3>{serv.title}</h3>
                  <p>{serv.subject}</p>
                </div>
              </div>
            ))}
          </div>

          {/* second col */}
          <div className="col">
            {servicesData[1].map((serv) => (
              <div className="serv" key={serv.id}>
                <FontAwesomeIcon icon={serv.icon} className="icon" />
                <div className="text">
                  <h3>{serv.title}</h3>
                  <p>{serv.subject}</p>
                </div>
              </div>
            ))}
          </div>
          {/* third col */}
          <div className="col">
            <div className="image image-col">
              <img src={landImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
