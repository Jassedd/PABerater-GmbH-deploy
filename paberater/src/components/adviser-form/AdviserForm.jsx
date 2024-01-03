import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./QuestionForm.css";

function AdviserForm() {
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
      <Form className="adviserForm">

      <Form.Group className="inputInfoAdviser" controlId="controlProfessionAdviser">
          <Form.Control type="text" placeholder="Nombre completo *" required />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlNationalityAdviser">
          <Form.Control type="text" placeholder="Nacionalidad*" required />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlCountryAdviser">
          <Form.Control type="text" placeholder="País de residencia*" required />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlEmailsAdviser">
          <Form.Control
            type="email"
            placeholder="Correo electrónico *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlEmailConfirmationAdviser">
          <Form.Control
            type="email"
            placeholder="Confirmar correo electrónico *"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlProfessionAdviser">
          <Form.Control type="text" placeholder="Su profesión" required />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="controlQuestionAdviser">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describa su caso brevemente y mencione su profesión"
            required
            style={{ borderColor: "#25357a", borderWidth: "1px" }}
          />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="checkPABerater">
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
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={email !== confirmEmail}
        >
          Agendar
        </button>
      </Form>
    </>
  );
}

export default AdviserForm;
