import React from "react";
import { FaRegCommentDots, FaPhoneFlip, FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        Academia
        <br />
        <span>Estação Fitness</span>
      </h2>
      <nav>
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
    </div>
  );
};

export default Navbar;
