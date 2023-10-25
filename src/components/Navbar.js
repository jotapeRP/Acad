import React, { useRef } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const removeNav = () => {
    navRef.current.classList.add("responsive_nav");
  };

  return (
    <div className="navbar">
      <h2>
        <a href="/">
          Academia
          <br />
          <span>Estação Fitness</span>
        </a>
      </h2>
      <nav ref={navRef} className="responsive_nav">
        <button className="nav-btn" onClick={showNavbar}>
          <FaX />
        </button>
        <ul>
          <li>
            <p>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={removeNav}
              >
                Home
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                activeClass="active"
                to="depoimentos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={removeNav}
              >
                Depoimentos
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link
                activeClass="active"
                to="local"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={removeNav}
              >
                Local
              </Link>
            </p>
          </li>
          <li>
            <p>
              <a href="tel:+1-555-555-1212">Ligar</a>
            </p>
          </li>
        </ul>
        <button>Solicitar Cotação</button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
