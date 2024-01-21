import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./QuestionForm.css";

function QuestionForm() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  function sendEmail() {
    window.Email.send({
      SecureToken : import.meta.env.VITE_REACT_APP_EMAILTOKEN,
      To: "jassedgmartinez@gmail.com",
      From: email,
      Subject: "Consulta",
      Body: `
        Nombre completo: ${document.getElementById("controlNames").value}
        Correo electrónico: ${email}
        Profesión: ${document.getElementById("controlProfession").value}
        Descripción del caso: ${document.getElementById("controlQuestion").value}
      `,
    }).then(
      (message) => {
        alert("Correo electrónico enviado correctamente");
        console.log(message);
      },
      (error) => {
        alert("Error al enviar el correo electrónico. Por favor, inténtelo de nuevo.");
        console.error(error);
      }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    setEmail("");
    setConfirmEmail("");
    sendEmail()

    alert("Formulario enviado correctamente");
  }

  return (
    <>
      <section className="questionsTitle">
        <h2 className="titleQuestion">
          De seguro tienes mucha dudas y nosotros estamos dispuestos a
          responderlas todas
        </h2>
        <p className="question_subtitle">respuesta en 24 horas</p>
      </section>
      <Form className="questionForm">

      <Form.Group className="inputInfo" controlId="controlNames">
          <Form.Control type="text" placeholder="Nombre y Apellidos *" required />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlEmails">
          <Form.Control
            type="email"
            placeholder="Correo electrónico *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlEmailConfirmation">
          <Form.Control
            type="email"
            placeholder="Confirmar correo electrónico *"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlProfession">
          <Form.Control type="text" placeholder="Su profesión" required />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlQuestion">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escriba aquí su consulta"
            required
            style={{ borderColor: "#25357a", borderWidth: "1px" }}
          />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="checkPABerater">
          <Form.Check
            type="checkbox"
            label="Me gustaría suscribirme al listado de PABerater."
          />
          <Form.Check
            type="checkbox"
            label="He leído y acepto los términos y condiciones"
            required
          />
        <div className="adviserBtn">
        <button
          type="submit"
          className="btn-added"
          onClick={handleSubmit}
          disabled={email !== confirmEmail}
        >Agendar
        </button>
        </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default QuestionForm;
