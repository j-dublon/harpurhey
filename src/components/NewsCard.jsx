import React from "react";
import { Link } from "@reach/router";

const NewsCard = ({ title, date, image, id }) => {
  return (
    <section className="newsCard">
      <img
        src={image.fields.file.url}
        alt={title}
        className="newsCard__image"
      />
      <Link to={`/${id}`}>
        <h2 className="newsCard__title">{title}</h2>
        <p className="newsCard__date">{date}</p>
      </Link>
    </section>
  );
};

export default NewsCard;
