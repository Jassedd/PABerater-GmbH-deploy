import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./AdviserForm.css";
import { createUsersFormLanding } from "../../../firebase/firebaseBack";
import { countries } from "../countries/Countries";
import { Link, useNavigate } from "react-router-dom";

function AdviserForm() {
  const [email, setEmail] = useState("");
  const [nameUsr, setNameUsr] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [descriptionUsr, setDescriptionUsr] = useState("");
  const [nacionalityUsr, setNacionalityUsr] = useState("");
  const [countryUsr, setCountryUsr] = useState("");
  const [professionUsr, setProfessionUsr] = useState("");
  const [subscribeToList, setSubscribeToList] = useState(false);

  const redirect= useNavigate()

  function sendEmail() {
    let body = {
      "name": nameUsr,
      "email": email,
      "description": descriptionUsr,
      "profession": professionUsr,
      "countryResidence": countryUsr,
      "nationality": nacionalityUsr,
      "subject": "Solicitud de asesoramiento",
      "secret": import.meta.env.VITE_REACT_APP_SECRET
    };

    fetch('https://europe-west3-paberater-8ca33.cloudfunctions.net/EnviarCorreoPaberater-E', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    fetch('https://hooks.zapier.com/hooks/catch/16091476/30sjlhg/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const requiredFields = [nameUsr, nacionalityUsr, countryUsr, professionUsr, descriptionUsr];
    const isAnyFieldEmpty = requiredFields.some(field => field.trim() === '');

    if (isAnyFieldEmpty) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    if (subscribeToList) {
      try {
        createUsersFormLanding(
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

    setNameUsr("");
    setDescriptionUsr("");
    setCountryUsr("");
    setNacionalityUsr("");
    setProfessionUsr("");
    setEmail("");
    setSubscribeToList(false);
    setConfirmEmail("");
    sendEmail();
    redirect("/gracias")
  }

  return (
    <Form className="adviserForm" onSubmit={handleSubmit}>
      <Form.Group className="inputInfoAdviser" controlId="controlNamesAdviser">
        <Form.Control type="text" value={nameUsr} placeholder="Nombre completo *" onChange={(e) => setNameUsr(e.target.value)} required />
      </Form.Group>

      <Form.Group className="inputInfoAdviser" controlId="controlNationalityAdviser">
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

      <Form.Group className="inputInfoAdviser" controlId="controlCountryAdviser">
        <Form.Select
          aria-label="País de residencia"
          value={countryUsr}
          onChange={(e) => setCountryUsr(e.target.value)}
          required
        >
          <option value="" disabled>
            País de residencia
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

      <Form.Group className="inputInfoAdviser" controlId="controlProfession">
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
          label={
            <span>
              He leído y acepto los{' '}
              <Link className="termsform" to="/terminos-y-condiciones">términos y condiciones</Link>
            </span>
          }
          required
        />
      </Form.Group>
      <div className="adviserBtn">
        <button
          type="submit"
          className="btn-added"
        >
          AGENDAR CITA
        </button>
      </div>
    </Form>
  );
}

export default AdviserForm;
