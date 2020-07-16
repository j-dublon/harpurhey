import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={require("../images/hero.jpeg")}
        alt="The team"
        className="hero__image"
      />
    </section>
  );
};

export default Hero;
