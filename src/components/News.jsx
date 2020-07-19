import React from "react";
import { usePosts } from "../customhooks";
import NewsCard from "./NewsCard";

const News = () => {
  const [posts, isLoading] = usePosts();
  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <main className="news">
      <h1 className="news__title">News</h1>
      <section className="news__content">
        {posts.map((post) => {
          return (
            <NewsCard
              key={post.fields.id}
              title={post.fields.title}
              date={post.fields.date}
              image={post.fields.image}
              id={post.fields.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default News;
