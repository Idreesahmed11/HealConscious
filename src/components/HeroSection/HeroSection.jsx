import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-subtitle">Heal Conscious</p>
        <h1 className="hero-title">Careox - Connect</h1>
        <p className="hero-desc">
          A 360 degree 4 week program where experts help you progress to a 
          healthy mental health routine.
        </p>
      </div>
      <div className="hero-right">
        <img 
          src="https://www.healconscious.com/wp-content/uploads/2026/03/Transparent-heal-conscious-image.png" alt="hero"/>
      </div>
    </section>
  );
};

export default HeroSection;