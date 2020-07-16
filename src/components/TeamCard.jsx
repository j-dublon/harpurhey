import React from "react";

const TeamCard = ({ bio, name, role, image }) => {
  return (
    <section className="teamCard">
      <section>
        <h3 className="teamCard__title">
          {name}, {role}
        </h3>
        <p className="teamCard__bio">{bio}</p>
      </section>
      <img src={image} alt="profile" className="teamCard__image" />
    </section>
  );
};

export default TeamCard;
