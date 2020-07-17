import React from "react";

const Activities = () => {
  return (
    <main className="activities">
      <h1 className="activities__title">Activities</h1>
      <section className="activities__content">
        <section>
          <h2 className="activities__content__title">Project 1</h2>
          <p className="activities__content__text">
            Information about project 1....
          </p>
        </section>
        <img
          src={require("../images/1.png")}
          alt="Project 1"
          className="activities__content__image"
        />
      </section>
      <section className="activities__content">
        <section>
          <h2 className="activities__content__title">Project 2</h2>
          <p className="activities__content__text">
            Information about project 2....
          </p>
        </section>
        <img
          src={require("../images/2.png")}
          alt="Project 2"
          className="activities__content__image"
        />
      </section>
    </main>
  );
};

export default Activities;
