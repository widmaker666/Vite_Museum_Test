import React from "react";
import Navigation from "../components/Navigation";
import PaintCard from "../components/PaintCard";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1 className="titre-1">Bienvenue sur Museum Sheet Cheat</h1>
      <PaintCard/>
    </div>
  );
};

export default Home;
