import React from "react";
import { usePosts } from "../customhooks";
import NewsCard from "./NewsCard";

const NewsRoll = () => {
  const [posts, isLoading] = usePosts();
  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <section className="news__content">
      {posts
        .map((post) => {
          return (
            <NewsCard
              key={post.fields.id}
              title={post.fields.title}
              date={post.fields.date}
              image={post.fields.image}
              id={post.fields.id}
            />
          );
        })
        .filter((card, index) => index < 3)}
    </section>
  );
};

export default NewsRoll;
