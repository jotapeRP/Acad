import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        Academia
        <br />
        Estação Fitness
      </h2>
      <nav>
        <ul>
          <li>
            <p>Ligar</p>
          </li>
          <li>
            <p>Ver Rotas</p>
          </li>
        </ul>
        <button>Solicitar Cotação</button>
      </nav>
    </div>
  );
};

export default Navbar;
