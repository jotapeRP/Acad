import React from "react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

//Components
import Navbar from "./Navbar";
import EmailForm from "./EmailForm";

const Home = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <EmailForm />
      <div className="logomarca">
        <h1>
          Academia <span>Estação Fitness</span>
        </h1>
        <p>Construa o seu corpo perfeito</p>
        <button>Faça sua matrícula já</button>
      </div>
      <div className="socialMedia">
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/login?lang=pt" target="_blank">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
