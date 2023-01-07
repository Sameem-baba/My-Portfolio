import React from "react";
import Hero from "./Hero";
import About from "./About";
import Support from "./Support";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="">
      <Hero />
      <About />
      <Support />
    </div>
  );
};

export default Home;
