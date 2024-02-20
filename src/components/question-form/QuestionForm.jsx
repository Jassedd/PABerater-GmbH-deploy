import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./QuestionForm.css";
import { createUsersForm } from "../../../firebase/firebaseBack";
import { v4 as uuidv4 } from 'uuid';

function QuestionForm() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [nameUsr, setNameUsr] = useState("");
  const [professionUsr, setProfessionUsr] = useState("");
  const [descriptionUsr, setDescriptionUsr] = useState("");
  const [subscribeToList, setSubscribeToList] = useState(false);


  function sendEmail() {
    window.Email.send({
      SecureToken : import.meta.env.VITE_REACT_APP_EMAILTOKEN,
      To: "jassedgmartinez@gmail.com",
      From: "jassedgmartinez@gmail.com",
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
    const requiredFields = [nameUsr, email, confirmEmail, professionUsr, descriptionUsr];
    const isAnyFieldEmpty = requiredFields.some(field => field.trim() === '');
  
    if (isAnyFieldEmpty) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }
  
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }
  
    if (subscribeToList) {
      try {
        createUsersForm(
          nameUsr,
          email,
          "Contacto",
          professionUsr,
          descriptionUsr
        );
        console.log("Usuario creado exitosamente");
      } catch (error) {
        console.error("Error al crear el usuario:", error);
      }
    }
  
    setNameUsr("");
    setDescriptionUsr("");
    setEmail("");
    setSubscribeToList(false);
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
        <Form.Control type="text" value={nameUsr} placeholder="Nombre completo *" onChange={(e) => setNameUsr(e.target.value)} required />
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
          <Form.Select
            aria-label="Seleccione su profesión"
            value={professionUsr}
            onChange={(e) => setProfessionUsr(e.target.value)}
            required
          >
            <option value="" disabled>
              Seleccione su profesión
            </option>
            <option value="Médicos y profesionales de salud">Médicos y profesionales de salud</option>
            <option value="Ingenieros">Ingenieros</option>
            <option value="Arquitecto">Arquitecto</option>
            <option value="Administración">Administración</option>
            <option value="Otras profesiones">Otras profesiones</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlQuestion">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escriba aquí su consulta"
            required
            value={descriptionUsr}
            onChange={(e) => setDescriptionUsr(e.target.value)}
          
          />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="checkPABerater">
        <Form.Check className="form-check-section"
            type="checkbox"
            label="Me gustaría suscribirme al listado de PABerater."
            onChange={() => setSubscribeToList(!subscribeToList)}
          />
          <Form.Check className="form-check-section"
            type="checkbox"
            label="He leído y acepto los términos y condiciones*"
            required
          />
        <div className="adviserBtn">
        <button
          type="submit"
          className="btn-added"
          onClick={handleSubmit}
          disabled={email !== confirmEmail}>Agendar mi cita
        </button>
        </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default QuestionForm;
