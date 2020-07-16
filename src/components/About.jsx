import React from "react";

const About = () => {
  return (
    <main className="about">
      <h1 className="about__title">Harpurhey Neighbourhood Project</h1>
      <section className="about__content">
        <section className="about__content__top">
          <img
            src={require("../images/about.png")}
            className="about__content__top__image"
          />
          <p className="about__content__top__text">
            HNP is a voluntary organisation which supports community activity in
            Harpurhey, Manchester. The Centre is a venue for a variety of
            activities, and a base for local groups.
          </p>
        </section>
      </section>
    </main>
  );
};

export default About;
