import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionForm.css";

function QuestionForm() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    setEmail("");
    setConfirmEmail("");

    alert("Formulario enviado correctamente");
  }

  return (
    <>
      <section className="questionsTitle">
        <h2 className="titleQuestion">
          De seguro tienes mucha dudas y nosotros estamos dispuestos a
          responderlas todas
        </h2>
        <p>respuesta en 24 horas</p>
      </section>
      <Form className="questionForm">

      <Form.Group className="inputInfo" controlId="controlProfession">
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
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={email !== confirmEmail}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default QuestionForm;
