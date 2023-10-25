import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cardFooter">
        <h4>Contatos</h4>
        <a href="tel:+1-555-555-1212">
          <button>Ligar</button>
        </a>
        <p>(77) 99830-7506</p>
      </div>
      <div className="cardFooter">
        <h4>Endereço</h4>
        <a
          href="https://www.google.com/maps/dir/-12.1457244,-44.9743477/Academia+Esta%C3%A7%C3%A3o+Fitness+-+R.+Pres.+Jo%C3%A3o+Batista+Figueiredo,+210+-+Novo+Horizonte,+Barreiras+-+BA,+47802-376/@-12.1457732,-44.978174,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x75f8ac8d3d37c95:0x5368cd85ca9c4f77!2m2!1d-44.9768942!2d-12.1455513?entry=ttu"
          target="_blank"
        >
          <button>Rotas</button>
        </a>
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
