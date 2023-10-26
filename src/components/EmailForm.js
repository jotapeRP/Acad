import { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || number === "") {
      alert("Preencha os formulários");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      number: number,
    };
    emailjs
      .send(
        "service_ahpdscc",
        "template_5gydg4n",
        templateParams,
        "3W0Zb3RW9YThbpMOd"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err);
        }
      );
  };
  return (
    <div>
      <h2>Envie seus dados</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="Telefone"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <textarea
          placeholder="Gostaria de fazer minha matíricula"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EmailForm;
