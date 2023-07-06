import React, { useState } from "react";

import './EmailFormSection.css'

const EmailFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el email aquí
    // Puedes utilizar una librería de envío de emails o enviar una petición al servidor
    // para manejar el envío del email
    console.log("Enviando email:", name, email, message);
  };

  return (
    <section className="email-form-section">
      <h2>Consulta por Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default EmailFormSection;
