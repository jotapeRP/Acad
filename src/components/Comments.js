import React from "react";
import img from "../assets/5-stars.png";

const Comments = () => {
  return (
    <div className="comments" id="depoimentos">
      <h2>Depoimentos</h2>
      <div className="cards">
        <div className="card">
          <h3>Comentário do Cliente</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora a
            tenetur possimus impedit asperiores dicta vel, quam esse aut aliquid
            cumque, corrupti nihil eum eveniet omnis adipisci debitis
            praesentium? Illo!"
          </p>
          <h4>Nome</h4>
          <img src={img} alt="" />
        </div>
        <div className="card">
          <h3>Comentário do Cliente</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            rem reprehenderit labore neque quaerat quo iste quidem tempore,
            consequatur cumque vitae et quam minima inventore? Maiores nulla ex
            incidunt magni."
          </p>
          <h4>Nome</h4>
          <img src={img} alt="" />
        </div>
        <div className="card">
          <h3>Comentário do Cliente</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            cumque porro iusto ipsum odio, necessitatibus eum unde sunt
            repellendus officiis corrupti, sequi doloribus eaque minus animi
            alias atque omnis magni?"
          </p>
          <h4>Nome</h4>
          <img src={img} alt="" />
        </div>
      </div>
      <a
        href="https://www.google.com/localservices/prolist?g2lbs=ANTchaP63Y1tYCqS0tpdeINaw9SGGix0P6wOZTyEXRsJ6RwF0uFUUen8kMdbkR7ras4BkK83viCSXH7xEEIt6p21h64t4QtBrGnTKZP2a89FiYH-422WmVDM3XW8XMfAXOYfKNrZ_tNB&hl=pt-BR&gl=br&ssta=1&q=academia%20esta%C3%A7%C3%A3o%20fitness&oq=academia%20esta%C3%A7%C3%A3o%20fitness&slp=MgA6HENoTUkzY0s5dnRlVGdnTVZQMTlJQUIzX01BMGtSAggCYAB6-wFDaHBoWTJGa1pXMXBZU0JsYzNSaHc2ZkRvMjhnWm1sMGJtVnpjMGk2MF9qOGxLMkFnQWhhS0JBQUVBRVFBaGdBR0FFWUFpSWFZV05oWkdWdGFXRWdaWE4wWWNPbnc2TnZJR1pwZEc1bGMzT1NBUU5uZVcycUFXTVFBU29lSWhwaFkyRmtaVzFwWVNCbGMzUmh3NmZEbzI4Z1ptbDBibVZ6Y3lnTU1oOFFBU0liMWlVQkVxSW5IQzczaHB3LTBsbTJNVnNiUUUxOXo5ejFKc0FZTWg0UUFpSWFZV05oWkdWdGFXRWdaWE4wWWNPbnc2TnZJR1pwZEc1bGMzTZIBJAoNL2cvMTFmNTd0eGJmdgoNL2cvMTFzYndxZl9mORIECgIIAQ%3D%3D&src=2&spp=Cg0vZy8xMWY1N3R4YmZ2OswBV2lnUUFCQUJFQUlZQUJnQkdBSWlHbUZqWVdSbGJXbGhJR1Z6ZEdIRHA4T2pieUJtYVhSdVpYTnprZ0VEWjNsdG1nRUFxZ0ZqRUFFcUhpSWFZV05oWkdWdGFXRWdaWE4wWWNPbnc2TnZJR1pwZEc1bGMzTW9ERElmRUFFaUc5WWxBUktpSnh3dTk0YWNQdEpadGpGYkcwQk5mY19jOVNiQUdESWVFQUlpR21GallXUmxiV2xoSUdWemRHSERwOE9qYnlCbWFYUnVaWE56&serdesk=1&lrlstt=1698322282017&ved=2ahUKEwjNvba-15OCAxUks5UCHfvGArcQvS56BAgXEAE&scp=CghnY2lkOmd5bRJJEhIJtYFcDcyKXwcR2YsNWQA4SN0iG1ZpbGEgQnJhc2lsLCBCYXJyZWlyYXMgLSBCQSoUDUz-wPgVPnIu5R2ffMX4JfvtM-UwARoaYWNhZGVtaWEgZXN0YcOnw6NvIGZpdG5lc3MiGmFjYWRlbWlhIGVzdGHDp8OjbyBmaXRuZXNzKghBY2FkZW1pYQ%3D%3D"
        target="_blank"
      >
        <button>Escrava um comentário</button>
      </a>
    </div>
  );
};

export default Comments;
