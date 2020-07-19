import React from "react";
import { useSinglePost } from "../customhooks";

const NewsItem = ({ id }) => {
  const [post, postBody, isLoading] = useSinglePost(id);

  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <main className="newsItem">
      <h1 className="newsItem__title">{post.title}</h1>
      <section className="newsItem__content">
        <img
          src={post.image.fields.file.url}
          alt={post.title}
          className="newsItem__content__image"
        />
        <div
          dangerouslySetInnerHTML={{ __html: postBody }}
          className="newsItem__content__body"
        />
      </section>
    </main>
  );
};

export default NewsItem;
