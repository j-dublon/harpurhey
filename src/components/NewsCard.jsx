import React from "react";

const NewsCard = ({ title, date, image }) => {
  return (
    <section className="newsCard">
      <img
        src={image.fields.file.url}
        alt={title}
        className="newsCard__image"
      />
      <h2 className="newsCard__title">{title}</h2>
      <p className="newsCard__date">{date}</p>
    </section>
  );
};

export default NewsCard;
