import React from "react";
import { usePosts } from "../customhooks";

const News = () => {
  const [posts, isLoading] = usePosts();
  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="news">
      <h1 className="news__title">News</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.fields.id}>{post.fields.title}</li>;
        })}
      </ul>
    </main>
  );
};

export default News;
