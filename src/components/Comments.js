import React from "react";
import img from "../assets/5-stars.png";

const Comments = () => {
  return (
    <div className="comments">
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
      <button>Escrava um comentário</button>
    </div>
  );
};

export default Comments;
