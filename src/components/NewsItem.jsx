import React from "react";
import MD from "react-markdown";
import { useSinglePost } from "../customhooks";

const NewsItem = ({ id }) => {
  const [post, isLoading] = useSinglePost(id);
  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <main className="newsItem">
      <h1 className="newsItem__title">{post.title}</h1>
      <p className="newsItem__date">{post.date}</p>
      <img
        src={post.image.fields.file.url}
        alt={post.title}
        className="newsItem__image"
      />
      {console.log(post.body)}
      <MD source={post.body} />
    </main>
  );
};

export default NewsItem;
