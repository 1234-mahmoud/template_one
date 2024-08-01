import React from "react";
import "../style/About.css";
import aboutImg from '../images/about_us.png'
export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="special-heading">About</h2>
        <p>Less is more work</p>
        <div className="about-content">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              minus aut quod dicta nesciunt cupiditate, est, numquam soluta
              atque quo quis iste! Minima libero, voluptatem quas aliquam
              veritatis dignissimos nihil.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus voluptatem quos sit odit, a quas dicta illo
              possimus fugiat aliquid eligendi libero nulla maiores atque
              architecto, nihil ipsa! Id, dolorem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
