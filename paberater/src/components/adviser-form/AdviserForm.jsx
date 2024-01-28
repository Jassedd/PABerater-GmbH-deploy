import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./AdviserForm.css";
import { createUsersFormLanding } from "../../../firebase/firebaseBack";
import { v4 as uuidv4 } from 'uuid';
import { countries } from "../countries/Countries";


function AdviserForm() {
  const [email, setEmail] = useState("");
  const [nameUsr, setNameUsr] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [descriptionUsr, setDescriptionUsr] = useState("");
  const [nacionalityUsr, setNacionalityUsr] = useState("");
  const [countryUsr, setCountryUsr] = useState("");
  const [professionUsr, setProfessionUsr] = useState("");
  const [subscribeToList, setSubscribeToList] = useState(false);

  function sendEmail() {
    window.Email.send({
      SecureToken: import.meta.env.VITE_REACT_APP_EMAILTOKEN,
      To: "jassedgmartinez@gmail.com",
      From: "jassedgmartinez@gmail.com",
      Subject: "Solicitud de asesoramiento",
      Body: `
        Nombre completo: 
        ${nameUsr}
        Nacionalidad: 
        ${nacionalityUsr}
        País de residencia: 
        ${countryUsr}
        Correo electrónico: 
        ${email}
        Profesión: 
        ${professionUsr} 
        Descripción del caso:  ${descriptionUsr}
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
  
        createUsersFormLanding(
          idUserForm,
          nameUsr,
          email,
          "Solicitud de asesoramiento",
          nacionalityUsr,
          countryUsr,
          professionUsr,
          descriptionUsr
        );
  
        console.log("Usuario creado exitosamente");
      } catch (error) {
        console.error("Error al crear el usuario:", error);
      }
    }
    setNameUsr("")
    setDescriptionUsr("")
    setCountryUsr("")
    setNacionalityUsr("")
    setProfessionUsr("")
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
          <Form.Control type="text" value={nameUsr} placeholder="Nombre completo *" onChange={(e) =>  setNameUsr(e.target.value)} required />
        </Form.Group>

        <Form.Group className="inputInfo" controlId="controlNationalityAdviser">
        <Form.Select
          aria-label="Nacionalidad"
          value={nacionalityUsr}
          onChange={(e) => setNacionalityUsr(e.target.value)}
          required
        >
          <option value="" disabled>
            Nacionalidad
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

        <Form.Group className="inputInfo" controlId="controlCountryAdviser">
        <Form.Select
          aria-label="Seleccione su país de residencia"
          value={countryUsr}
          onChange={(e) => setCountryUsr(e.target.value)}
          required
        >
          <option value="" disabled>
            Seleccione su país de residencia
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </Form.Select>
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
