import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

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
      <div className="socialMedia">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
