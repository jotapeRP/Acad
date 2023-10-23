import React, { useRef } from "react";
import { FaRegCommentDots, FaPhoneFlip, FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar">
      <h2>
        Academia
        <br />
        <span>Estação Fitness</span>
      </h2>
      <nav ref={navRef}>
        <ul>
          <li>
            <p>
              <FaRegCommentDots />
              Depoimentos
            </p>
          </li>
          <li>
            <p>
              <FaPhoneFlip />
              Ligar
            </p>
          </li>
          <li>
            <p>
              <FaLocationDot />
              Local
            </p>
          </li>
        </ul>
        <button>Solicitar Cotação</button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        O
      </button>
    </div>
  );
};

export default Navbar;
