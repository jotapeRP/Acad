import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="logomarca">
        <h1>Academia Estação Fitness</h1>
        <span>Construa o seu corpo perfeito</span>
        <button>Faça sua matrícula já</button>
      </div>
    </div>
  );
};

export default Home;
