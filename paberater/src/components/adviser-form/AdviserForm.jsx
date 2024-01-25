import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./AdviserForm.css";
import { createUsersForm } from "../../../firebase/firebaseBack";
import { v4 as uuidv4 } from 'uuid';


function AdviserForm() {
  const [email, setEmail] = useState("");
  const [nameUsr, setNameUsr] = useState("");
  const [descriptionUsr, setDescriptionUsr] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [subscribeToList, setSubscribeToList] = useState(false);

  function sendEmail() {
    window.Email.send({
      SecureToken : import.meta.env.VITE_REACT_APP_EMAILTOKEN,
      To: "jassedgmartinez@gmail.com",
      From: "jassedgmartinez@gmail.com",
      Subject: "Solicitud de asesoramiento",
      Body: `
        Nombre completo: 
        ${document.getElementById("controlNamesAdviser").value}
        Nacionalidad: 
        ${document.getElementById("controlNationalityAdviser").value}
        País de residencia: 
        ${document.getElementById("controlCountryAdviser").value}
        Correo electrónico: 
        ${email}
        Profesión: 
        ${document.getElementById("controlProfessionAdviser").value} 
        Descripción del caso:  ${document.getElementById("controlQuestionAdviser").value}
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
  
    if (subscribeToList) {
      try {
        const idUserForm = uuidv4();
        console.log("Creando usuario con ID:", idUserForm);
  
        createUsersForm(
          idUserForm,
          nameUsr,
          email,
          "Solicitud de asesoramiento",
          descriptionUsr
        );
  
        console.log("Usuario creado exitosamente");
      } catch (error) {
        console.error("Error al crear el usuario:", error);
      }
    }
    setNameUsr("")
    setDescriptionUsr("")
    setEmail("");
    setSubscribeToList(false);
    setConfirmEmail("");
    sendEmail();
    alert("Formulario enviado correctamente");
  }
  

  return (
    <>
      <Form className="adviserForm">

       <Form.Group className="inputInfoAdviser" controlId="controlNamesAdviser">
          <Form.Control type="text" value={nameUsr} placeholder="Nombre completo *" onChange={(e) => setNameUsr(e.target.value)} required />
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
            value={descriptionUsr}
            onChange={(e) => setDescriptionUsr(e.target.value)}
            style={{ borderColor: "#25357a", borderWidth: "1px" }}
          />
        </Form.Group>

        <Form.Group className="inputInfoAdviser" controlId="checkPABerater">
          <Form.Check
            type="checkbox"
            label="Me gustaría suscribirme al listado de PABerater."
            onChange={() => setSubscribeToList(!subscribeToList)}
          />
          <Form.Check
            type="checkbox"
            label="He leído y acepto los términos y condiciones"
            required
          />
        </Form.Group>
        <div className="adviserBtn">
        <button
          type="submit"
          className="btn-added"
          onClick={handleSubmit}
          disabled={email !== confirmEmail}>
            AGENDAR CITA 
        </button>
        </div>
      </Form>
    </>
  );
}

export default AdviserForm;
