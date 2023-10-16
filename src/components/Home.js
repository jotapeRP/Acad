import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="logomarca">
        <h1>
          Academia <span>Estação Fitness</span>
        </h1>
        <p>Construa o seu corpo perfeito</p>
        <button>Faça sua matrícula já</button>
      </div>
    </div>
  );
};

export default Home;
