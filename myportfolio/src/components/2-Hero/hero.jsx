import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="perent-avatar flex">
          <img src="./DSC_1112-modified.png" className="avatar" alt=""></img>
          <div className="icon-verified" />
        </div>

        <h1 className="title">
          Hi I'm AbdulRahman, and I have been working as a web developer for 3
          years.
        </h1>
        <p className="subtitle">
          I'm Abdulrahman Khaled, a passionate web developer, creating
          innovative online experiences. With programming and design skills, I
          transform ideas into functional websites. Precision and user-centric
          design define my work, making me valuable in any project. Continuous
          learning and staying updated ensure exceptional solutions for clients.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">aaaa</div>
    </section>
  );
}

export default Hero;
