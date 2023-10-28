import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

//Components
import Navbar from "./Navbar";
import EmailForm from "./EmailForm";

const Home = () => {
  const formRef = useRef();
  const showForm = () => {
    formRef.current.classList.toggle("showForm");
  };

  return (
    <div className="home" id="home">
      <Navbar formRef={formRef} showForm={showForm} />
      <EmailForm formRef={formRef} showForm={showForm} />
      <div className="logomarca">
        <h1>
          Academia <span>Estação Fitness</span>
        </h1>
        <p>Construa o seu corpo perfeito</p>
        <button onClick={showForm}>Faça sua matrícula já</button>
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
