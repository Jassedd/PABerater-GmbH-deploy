import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./AdviserForm.css";
import { createUsersFormLanding } from "../../../firebase/firebaseBack";
import { countries } from "../countries/Countries";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import {
    termsAndConditionsRoute,
    thankYouRoute,
} from "../../constants/routeNames";

function AdviserForm() {
    const { t, i18n } = useTranslation();
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
    const [hasUniversityDegree, setHasUniversityDegree] = useState(true);
    const [hasEnoughFunds, setHasEnoughFunds] = useState(true);

    const fullTermsAndConditionsRoute = getLanguageLink(
        termsAndConditionsRoute,
        i18n
    );
    const fullNamePlaceholder = t("sections.adviseForm.fullNamePlaceholder");
    const nationalityLabel = t("sections.adviseForm.nationalityLabel");
    const emailAddressPlaceholder = t(
        "sections.adviseForm.emailAddressPlaceholder"
    );
    const residenceCountryLabel = t(
        "sections.adviseForm.residenceCountryLabel"
    );
    const confirmEmailPlaceholder = t(
        "sections.adviseForm.confirmEmailPlaceholder"
    );
    const professionLabel = t("sections.adviseForm.professionLabel");
    const doctorAndHealthProfessionals = t(
        "sections.adviseForm.doctorAndHealthProfessionals"
    );
    const yes = t("sections.adviseForm.yes");
    const no = t("sections.adviseForm.no");

    const engineersLabel = t("sections.adviseForm.engineersLabel");
    const architectsLabel = t("sections.adviseForm.architectsLabel");
    const administrationLabel = t("sections.adviseForm.administrationLabel");
    const otherProfessions = t("sections.adviseForm.otherProfessions");
    const optionalSection = t("sections.adviseForm.optionalSection");
    const haveYouEmigratedLabel = t(
        "sections.adviseForm.haveYouEmigratedLabel"
    );
    const selectAnOption = t("sections.adviseForm.selectAnOption");
    const plannedMoveDateLabel = t("sections.adviseForm.plannedMoveDateLabel");
    const inTheNext6Months = t("sections.adviseForm.inTheNext6Months");
    const inTheNext9Months = t("sections.adviseForm.inTheNext9Months");
    const in1Year = t("sections.adviseForm.in1Year");
    const in2Years = t("sections.adviseForm.in2Years");
    const maritalStatusAndFamilyLabel = t(
        "sections.adviseForm.maritalStatusAndFamilyLabel"
    );
    const single = t("sections.adviseForm.single");
    const married = t("sections.adviseForm.married");
    const withChildren = t("sections.adviseForm.withChildren");
    const other = t("sections.adviseForm.other");
    const germanLevelLabel = t("sections.adviseForm.germanLevelLabel");
    const basic = t("sections.adviseForm.basic");
    const intermediate = t("sections.adviseForm.intermediate");
    const advanced = t("sections.adviseForm.advanced");
    const englishLevelLabel = t("sections.adviseForm.englishLevelLabel");
    const estimatedCostLabel = t("sections.adviseForm.estimatedCostLabel");
    const lessThan5000EUR = t("sections.adviseForm.lessThan5000EUR");
    const between5000And10000EUR = t(
        "sections.adviseForm.between5000And10000EUR"
    );
    const between10000And20000EUR = t(
        "sections.adviseForm.between10000And20000EUR"
    );
    const phoneLabel = t("sections.adviseForm.phoneLabel");
    const moreThan20000EUR = t("sections.adviseForm.moreThan20000EUR");
    const motivationLabel = t("sections.adviseForm.motivationLabel");
    const betterJobOpportunities = t(
        "sections.adviseForm.betterJobOpportunities"
    );
    const userHasNoFundsMessage = t(
        "sections.adviseForm.userHasNoFundsMessage"
    );
    const userHasNoUniversityDegreeMessage = t(
        "sections.adviseForm.userHasNoUniversityDegreeMessage"
    );
    const qualityOfLifeAndSocialBenefits = t(
        "sections.adviseForm.qualityOfLifeAndSocialBenefits"
    );
    const professionalDevelopment = t(
        "sections.adviseForm.professionalDevelopment"
    );
    const internationalExperience = t(
        "sections.adviseForm.internationalExperience"
    );
    const allOfTheAbove = t("sections.adviseForm.allOfTheAbove");
    const placeholderDescription = t(
        "sections.adviseForm.placeholderDescription"
    );

    const hasUniversityDegreeLabel = t(
        "sections.adviseForm.hasUniversityDegreeLabel"
    );
    const hasEnoughFundsLabel = t("sections.adviseForm.hasEnoughFundsLabel");

    const checkboxSubscribe = t("sections.adviseForm.checkboxSubscribe");
    const termsAndConditions = t("sections.adviseForm.termsAndConditions");
    const buttonScheduleAppointment = t(
        "sections.adviseForm.buttonScheduleAppointment"
    );
    const termsAndConditionsTitle = t(
        "sections.adviseForm.termsAndConditions1"
    );
    const fullThankYouUrl = getLanguageLink(thankYouRoute, i18n);
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

            await fetch(
                "https://hooks.zapier.com/hooks/catch/16091476/30sjlhg/",
                {
                    method: "POST",
                    body: JSON.stringify(zapBody),
                }
            );

            console.log("Ambas solicitudes fueron exitosas.");
        } catch (error) {
            console.error("Hubo un problema con las solicitudes:", error);
        }
    }

    function handleSubmit(event) {
        console.log(event);

        event.preventDefault();

        const form = event.target;
        const requiredFields = [
            nameUsr,
            nacionalityUsr,
            countryUsr,
            professionUsr,
            descriptionUsr,
        ];

        if (!hasEnoughFunds) window.alert(userHasNoFundsMessage);
        if (!hasUniversityDegree)
            window.alert(userHasNoUniversityDegreeMessage);

        const isValid = hasEnoughFunds && hasUniversityDegree;
        if (!isValid) return;

        const isAnyFieldEmpty = requiredFields.some(
            (field) => field.trim() === ""
        );

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
        redirect(fullThankYouUrl);
    }
    return (
        <Form className="adviserForm" onSubmit={handleSubmit}>
            <Form.Group
                className="inputInfoAdviser"
                controlId="controlNamesAdviser"
            >
                <Form.Control
                    type="text"
                    value={nameUsr}
                    placeholder={fullNamePlaceholder}
                    onChange={(e) => setNameUsr(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group
                className="inputInfoAdviser"
                controlId="controlNationalityAdviser"
            >
                <Form.Select
                    aria-label={nationalityLabel}
                    value={nacionalityUsr}
                    onChange={(e) => setNacionalityUsr(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        {nationalityLabel}
                    </option>
                    {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="checkPABerater">
                <Form.Check
                    type="checkbox"
                    label={hasUniversityDegreeLabel}
                    onChange={() =>
                        setHasUniversityDegree(!hasUniversityDegree)
                    }
                    defaultChecked

                    //required
                />
                {!hasUniversityDegree && (
                    <span
                        style={{
                            fontSize: "14px",
                            padding: "12px 0",
                            color: "#dc2626",
                            display: "block",
                        }}
                    >
                        {userHasNoUniversityDegreeMessage}
                    </span>
                )}
                <Form.Check
                    type="checkbox"
                    label={hasEnoughFundsLabel}
                    onChange={() => setHasEnoughFunds(!hasEnoughFunds)}
                    defaultChecked
                    // required
                />
                {!hasEnoughFunds && (
                    <span
                        style={{
                            fontSize: "14px",
                            padding: "12px 0",
                            color: "#dc2626",
                            display: "block",
                        }}
                    >
                        {userHasNoFundsMessage}
                    </span>
                )}
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
                        {residenceCountryLabel}
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
                controlId="controlEmailsAdviser"
            >
                <Form.Control
                    type="email"
                    placeholder={emailAddressPlaceholder}
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
                    placeholder={confirmEmailPlaceholder}
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group
                className="inputInfoAdviser"
                controlId="controlProfession"
            >
                <Form.Select
                    aria-label={professionLabel}
                    value={professionUsr}
                    onChange={(e) => setProfessionUsr(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        {professionLabel}
                    </option>
                    <option value="Médicos y profesionales de salud">
                        {doctorAndHealthProfessionals}
                    </option>
                    <option value="Ingenieros">{engineersLabel}</option>
                    <option value="Arquitecto">{architectsLabel}</option>
                    <option value="Administración">
                        {administrationLabel}
                    </option>
                    <option value="Otras profesiones">
                        {otherProfessions}
                    </option>
                </Form.Select>
            </Form.Group>

            <Form.Group
                className="inputInfoAdviser"
                controlId="controlTelefono"
            >
                <Form.Control
                    type="tel"
                    placeholder={phoneLabel}
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </Form.Group>

            <Accordion className="inputInfoAdviser">
                <Accordion.Item eventKey="0">
                    <div className="optionalSection">{optionalSection}</div>
                    {/*    <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlHasEmigrated"
                    >
                        <Form.Label className="optionalLabel">
                            {haveYouEmigratedLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={haveYouEmigratedLabel}
                            value={hasEmigrated}
                            onChange={(e) => setHasEmigrated(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Sí">{yes}</option>
                            <option value="No">{no}</option>
                        </Form.Select>
                    </Form.Group> */}

                    {/*   <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlMoveDate"
                    >
                        <Form.Label className="optionalLabel">
                            {plannedMoveDateLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={plannedMoveDateLabel}
                            value={moveDate}
                            onChange={(e) => setMoveDate(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="En los próximos 6 meses">
                                {inTheNext6Months}
                            </option>
                            <option value="En los próximos 9 meses">
                                {inTheNext9Months}
                            </option>
                            <option value="En 1 año">{in1Year}</option>
                            <option value="En 2 años">{in2Years}</option>
                        </Form.Select>
                    </Form.Group> */}

                    {/*    <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlMaritalStatus"
                    >
                        <Form.Label className="optionalLabel">
                            {maritalStatusAndFamilyLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={maritalStatusAndFamilyLabel}
                            value={maritalStatus}
                            onChange={(e) => setMaritalStatus(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Soltero/a">{single}</option>
                            <option value="Casado/a">{married}</option>
                            <option value="Con hijos">{withChildren}</option>
                            <option value="Otro">{other}</option>
                        </Form.Select>
                    </Form.Group> */}

                    <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlGermanLevel"
                    >
                        <Form.Label className="optionalLabel">
                            {germanLevelLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={germanLevelLabel}
                            value={germanLevel}
                            onChange={(e) => setGermanLevel(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Básico">{basic}</option>
                            <option value="Intermedio">{intermediate}</option>
                            <option value="Avanzado">{advanced}</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlEnglishLevel"
                    >
                        <Form.Label className="optionalLabel">
                            {englishLevelLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={englishLevelLabel}
                            value={englishLevel}
                            onChange={(e) => setEnglishLevel(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Básico">{basic}</option>
                            <option value="Intermedio">{intermediate}</option>
                            <option value="Avanzado">{advanced}</option>
                        </Form.Select>
                    </Form.Group>

                    {/*       <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlEstimatedCost"
                    >
                        <Form.Label className="optionalLabel">
                            {estimatedCostLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={estimatedCostLabel}
                            value={estimatedCost}
                            onChange={(e) => setEstimatedCost(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Menos de 5,000 EUR">
                                {lessThan5000EUR}
                            </option>
                            <option value="Entre 5,000 y 10,000 EUR">
                                {between5000And10000EUR}
                            </option>
                            <option value="Entre 10,000 y 20,000 EUR">
                                {between10000And20000EUR}
                            </option>
                            <option value="Más de 20,000 EUR">
                                {moreThan20000EUR}
                            </option>
                        </Form.Select>
                    </Form.Group> */}

                    <Form.Group
                        className="inputInfoAdviser"
                        controlId="controlMotivation"
                    >
                        <Form.Label className="optionalLabel">
                            {motivationLabel}
                        </Form.Label>
                        <Form.Select
                            aria-label={motivationLabel}
                            value={motivation}
                            onChange={(e) => setMotivation(e.target.value)}
                        >
                            <option value="" disabled>
                                {selectAnOption}
                            </option>
                            <option value="Mejores oportunidades laborales y salariales">
                                {betterJobOpportunities}
                            </option>
                            <option value="Calidad de vida y beneficios sociales para mí y mi familia">
                                {qualityOfLifeAndSocialBenefits}
                            </option>
                            <option value="Desarrollo profesional y adquisición de nuevas habilidades">
                                {professionalDevelopment}
                            </option>
                            <option value="Experiencia internacional y crecimiento personal">
                                {internationalExperience}
                            </option>
                            <option value="Todas las anteriores">
                                {allOfTheAbove}
                            </option>
                        </Form.Select>
                    </Form.Group>
                </Accordion.Item>
            </Accordion>

            <Form.Group
                className="inputInfoAdviser"
                controlId="controlQuestionAdviser"
            >
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={placeholderDescription}
                    required
                    value={descriptionUsr}
                    onChange={(e) => setDescriptionUsr(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="inputInfoAdviser" controlId="checkPABerater">
                <Form.Check
                    type="checkbox"
                    label={checkboxSubscribe}
                    onChange={() => setSubscribeToList(!subscribeToList)}
                />
                <Form.Check
                    type="checkbox"
                    label={
                        <span>
                            {termsAndConditionsTitle}
                            <Link
                                className="termsform"
                                to={fullTermsAndConditionsRoute}
                            >
                                {termsAndConditions}
                            </Link>
                        </span>
                    }
                    required
                />
            </Form.Group>
            <div className="adviserBtn">
                <button type="submit" className="btn-added">
                    {buttonScheduleAppointment}
                </button>
            </div>
        </Form>
    );
}

export default AdviserForm;
