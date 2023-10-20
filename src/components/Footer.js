import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cardFooter">
        <h4>Contatos</h4>
        <button>Ligar</button>
        <p>(77) 99830-7506</p>
      </div>
      <div className="cardFooter">
        <h4>Endereço</h4>
        <button>Rotas</button>
        <p>
          R. Pres. João Batista Figueiredo, 210 - Novo Horizonte, Barreiras -
          BA, 47802-376
        </p>
      </div>
      <div className="cardFooter">
        <h4>Horario de Funcionamento</h4>
        <p>
          seg.: 06:00 – 11:00, 15:00 – 22:00 <br /> ter.: 06:00 – 11:00,
          15:00 – 22:00 <br />
          qua.: 06:00 – 11:00, 15:00 – 22:00 <br /> qui.: 06:00 – 11:00,
          15:00 – 22:00 <br />
          sex.: 06:00 – 11:00, 15:00 – 22:00 <br /> sáb.: 06:00 – 10:00 <br />{" "}
          dom.: Fechado
        </p>
      </div>
      <p id="end">&copy;Todos os direitos reservados</p>
    </div>
  );
};

export default Footer;
