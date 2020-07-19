import React from "react";
import { Link } from "@reach/router";
import Hero from "./Hero";
import NewsRoll from "./NewsRoll";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="home">
        <h1 className="home__title">
          Welcome to Harpurhey Neighbourhood Project
        </h1>
        <hr className="home__line" />
        <h2 className="home__subtitle">Latest news:</h2>
        <NewsRoll />
        <Link to="/news">
          <h2 className="home__subtitle__right">....more news this way!</h2>
        </Link>
      </section>
    </main>
  );
};

export default Home;
