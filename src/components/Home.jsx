import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="home">
        <h1 className="home__title">
          Welcome to Harpurhey Neighbourhood Project
        </h1>
      </section>
    </main>
  );
};

export default Home;
