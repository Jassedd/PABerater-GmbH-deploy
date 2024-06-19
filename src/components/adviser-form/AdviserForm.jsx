import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./AdviserForm.css";
import { createUsersFormLanding } from "../../../firebase/firebaseBack";
import { countries } from "../countries/Countries";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function AdviserForm() {
  const [email, setEmail] = useState("");
  const [nameUsr, setNameUsr] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [descriptionUsr, setDescriptionUsr] = useState("");
  const [nacionalityUsr, setNacionalityUsr] = useState("");
  const [countryUsr, setCountryUsr] = useState("");
  const [professionUsr, setProfessionUsr] = useState("");
  const [subscribeToList, setSubscribeToList] = useState(false);
  const [hasEmigrated, setHasEmigrated] = useState("");
  const [telefono, setTelefono] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [germanLevel, setGermanLevel] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [estimatedCost, setEstimatedCost] = useState("");
  const [motivation, setMotivation] = useState("");

  const redirect = useNavigate();

  async function sendEmail() {
    let zapBody = {
      name: nameUsr,
      email: email,
      telefono: telefono,
      description: descriptionUsr,
      profession: professionUsr,
      countryResidence: countryUsr,
      nationality: nacionalityUsr,
      hasEmigrated: hasEmigrated,
      moveDate: moveDate,
      maritalStatus: maritalStatus,
      germanLevel: germanLevel,
      englishLevel: englishLevel,
      estimatedCost: estimatedCost,
      motivation: motivation,
      subject: "Solicitud de asesoramiento",
      campaign_medium: "ingenieros",
      campaign_name: "campaign 1",
      campaign_id: "ad 1",
      timestamp: new Date().toISOString(),
    };

    let body = {
      name: nameUsr,
      email: email,
      telefono: telefono,
      description: descriptionUsr,
      profession: professionUsr,
      countryResidence: countryUsr,
      nationality: nacionalityUsr,
      hasEmigrated: hasEmigrated,
      moveDate: moveDate,
      maritalStatus: maritalStatus,
      germanLevel: germanLevel,
      englishLevel: englishLevel,
      estimatedCost: estimatedCost,
      motivation: motivation,
      subject: "Solicitud de asesoramiento",
      secret: import.meta.env.VITE_REACT_APP_SECRET,
    };

    try {
      await fetch(
        "https://europe-west3-paberater-8ca33.cloudfunctions.net/EnviarCorreoPaberater-E",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      await fetch("https://hooks.zapier.com/hooks/catch/16091476/30sjlhg/", {
        method: "POST",
        body: JSON.stringify(zapBody),
      });

      console.log("Ambas solicitudes fueron exitosas.");
    } catch (error) {
      console.error("Hubo un problema con las solicitudes:", error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const requiredFields = [
      nameUsr,
      nacionalityUsr,
      countryUsr,
      professionUsr,
      descriptionUsr,
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => field.trim() === "");

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
    setTelefono("");
    setHasEmigrated("");
    setMoveDate("");
    setMaritalStatus("");
    setGermanLevel("");
    setEnglishLevel("");
    setEstimatedCost("");
    setMotivation("");
    sendEmail();
    redirect("/gracias");
  }

  return (
    <Form className="adviserForm" onSubmit={handleSubmit}>
      <Form.Group className="inputInfoAdviser" controlId="controlNamesAdviser">
        <Form.Control
          type="text"
          value={nameUsr}
          placeholder="Nombre completo *"
          onChange={(e) => setNameUsr(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group
        className="inputInfoAdviser"
        controlId="controlNationalityAdviser"
      >
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

      <Form.Group
        className="inputInfoAdviser"
        controlId="controlCountryAdviser"
      >
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

      <Form.Group
        className="inputInfoAdviser"
        controlId="controlEmailConfirmationAdviser"
      >
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
          <option value="Médicos y profesionales de salud">
            Médicos y profesionales de salud
          </option>
          <option value="Ingenieros">Ingenieros</option>
          <option value="Arquitecto">Arquitecto</option>
          <option value="Administración">Administración</option>
          <option value="Otras profesiones">Otras profesiones</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="inputInfoAdviser" controlId="controlTelefono">
        <Form.Control
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </Form.Group>

      <Accordion className="inputInfoAdviser">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Cuéntanos de ti (Opcional)</Accordion.Header>
          <Accordion.Body>
            <Form.Group className="inputInfoAdviser" controlId="controlHasEmigrated">
              <Form.Label>¿Has emigrado anteriormente?</Form.Label>
              <Form.Select
                aria-label="¿Has emigrado anteriormente?"
                value={hasEmigrated}
                onChange={(e) => setHasEmigrated(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlMoveDate">
              <Form.Label>Fecha prevista para mudarse a Alemania</Form.Label>
              <Form.Select
                aria-label="Fecha prevista para mudarse a Alemania"
                value={moveDate}
                onChange={(e) => setMoveDate(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="En los próximos 6 meses">En los próximos 6 meses</option>
                <option value="En los próximos 9 meses">En los próximos 9 meses</option>
                <option value="En 1 año">En 1 año</option>
                <option value="En 2 años">En 2 años</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlMaritalStatus">
              <Form.Label>Estado civil y familiar</Form.Label>
              <Form.Select
                aria-label="Estado civil y familiar"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Soltero/a">Soltero/a</option>
                <option value="Casado/a">Casado/a</option>
                <option value="Con hijos">Con hijos</option>
                <option value="Otro">Otro</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlGermanLevel">
              <Form.Label>Nivel de dominio en Alemán</Form.Label>
              <Form.Select
                aria-label="Nivel de dominio en Alemán"
                value={germanLevel}
                onChange={(e) => setGermanLevel(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlEnglishLevel">
              <Form.Label>Nivel de dominio en Inglés</Form.Label>
              <Form.Select
                aria-label="Nivel de dominio en Inglés"
                value={englishLevel}
                onChange={(e) => setEnglishLevel(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlEstimatedCost">
              <Form.Label>¿Cuánto estimas que costaría comenzar una nueva vida en Alemania?</Form.Label>
              <Form.Select
                aria-label="¿Cuánto estimas que costaría comenzar una nueva vida en Alemania?"
                value={estimatedCost}
                onChange={(e) => setEstimatedCost(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Menos de 5,000 EUR">Menos de 5,000 EUR</option>
                <option value="Entre 5,000 y 10,000 EUR">Entre 5,000 y 10,000 EUR</option>
                <option value="Entre 10,000 y 20,000 EUR">Entre 10,000 y 20,000 EUR</option>
                <option value="Más de 20,000 EUR">Más de 20,000 EUR</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="controlMotivation">
              <Form.Label>¿Qué te motivaría a iniciar una nueva vida en Alemania?</Form.Label>
              <Form.Select
                aria-label="¿Qué te motivaría a iniciar una nueva vida en Alemania?"
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
              >
                <option value="" disabled>Seleccione una opción</option>
                <option value="Mejores oportunidades laborales y salariales">Mejores oportunidades laborales y salariales</option>
                <option value="Calidad de vida y beneficios sociales para mí y mi familia">Calidad de vida y beneficios sociales para mí y mi familia</option>
                <option value="Desarrollo profesional y adquisición de nuevas habilidades">Desarrollo profesional y adquisición de nuevas habilidades</option>
                <option value="Experiencia internacional y crecimiento personal">Experiencia internacional y crecimiento personal</option>
                <option value="Todas las anteriores">Todas las anteriores</option>
              </Form.Select>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Form.Group
        className="inputInfoAdviser"
        controlId="controlQuestionAdviser"
      >
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
              He leído y acepto los{" "}
              <Link className="termsform" to="/terminos-y-condiciones">
                términos y condiciones
              </Link>
            </span>
          }
          required
        />
      </Form.Group>
      <div className="adviserBtn">
        <button type="submit" className="btn-added">
          AGENDAR CITA
        </button>
      </div>
    </Form>
  );
}

export default AdviserForm;