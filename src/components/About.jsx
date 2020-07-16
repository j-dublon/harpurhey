import React, { useState } from "react";
import TeamCard from "./TeamCard";

const About = () => {
  const [team, setTeam] = useState([
    {
      key: "1",
      name: "Ms. Smith",
      role: "Volunteer Coordinator",
      bio: "Ms. Smith has worked here a long time and is amazing.",
      image: require("../images/1.png"),
    },
    {
      key: "2",
      name: "Mr. Jones",
      role: "Resource Manager",
      bio:
        "Mr. Jones has worked here even longer and does lots of useful things.",
      image: require("../images/2.png"),
    },
  ]);

  return (
    <main className="about">
      <h1 className="about__title">Harpurhey Neighbourhood Project</h1>
      <section className="about__content">
        <section className="about__content__top">
          <img
            src={require("../images/about.png")}
            alt="A positive force banner"
            className="about__content__top__image"
          />
          <p className="about__content__top__text">
            HNP is a voluntary organisation which supports community activity in
            Harpurhey, Manchester. The Centre is a venue for a variety of
            activities, and a base for local groups.
          </p>
        </section>
        <section className="about__content__history">
          <h2 className="about__content__history__title">History</h2>
          <p className="about__content__history__text">
            The Centre was set up in .... and then this happened... and some
            other stuff.
          </p>
        </section>
        <section className="about__content__team">
          <h2 className="about__content__team__title">Meet the team</h2>
          {team.map((member) => {
            return (
              <TeamCard
                bio={member.bio}
                name={member.name}
                role={member.role}
                image={member.image}
                key={member.key}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default About;
