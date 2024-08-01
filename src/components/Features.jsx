import React from "react";
import "../style/Features.css";
import featData from "../data/feat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features() {
  return (
    <div className="features">
      <div className="container">
        {featData.map((f) => (
          <div className="feat" key={f.id}>
            <FontAwesomeIcon icon={f.icon} className="icon_"/>
            <h3>{f.title}</h3>
            <p>{f.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
