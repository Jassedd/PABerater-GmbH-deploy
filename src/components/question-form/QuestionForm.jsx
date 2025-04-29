import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./QuestionForm.css";
import { createUsersForm } from "../../../firebase/firebaseBack";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { landingRoute, thankYouRoute } from "../../constants/routeNames";

function QuestionForm() {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [nameUsr, setNameUsr] = useState("");
    const [professionUsr, setProfessionUsr] = useState("");
    const [descriptionUsr, setDescriptionUsr] = useState("");
    const [subscribeToList, setSubscribeToList] = useState(false);
    const { t, i18n } = useTranslation();

    const title = t("contactPage.contactForm.title");
    const subtitle = t("contactPage.contactForm.subtitle");
    const button = t("contactPage.contactForm.button");
    const selectCarreerLabel = t("contactPage.contactForm.selectCarreerLabel");
    const medicsLabel = t("contactPage.contactForm.medicsLabel");
    const engineersLabel = t("contactPage.contactForm.engineersLabel");
    const accountingLabel = t("contactPage.contactForm.accountingLabel");
    const architectsLabel = t("contactPage.contactForm.architectsLabel");
    const others = t("contactPage.contactForm.others");
    const requiredFieldsEmptyError = t(
        "contactPage.contactForm.requiredFieldsEmptyError"
    );
    const emailsDontMatchError = t(
        "contactPage.contactForm.emailsDontMatchError"
    );
    const joinMailingListLabel = t(
        "contactPage.contactForm.joinMailingListLabel"
    );
    const nameLabel = t("contactPage.contactForm.nameLabel");
    const confirmEmailLabel = t("contactPage.contactForm.confirmEmailLabel");
    const emailLabel = t("contactPage.contactForm.emailLabel");
    const formSubjectLabel = t("contactPage.contactForm.formSubjectLabel");
    const termsAndConditionsTitle = t(
        "contactPage.contactForm.termsAndConditionsTitle"
    );
    const termsAndConditionsText = t(
        "contactPage.contactForm.termsAndConditionsText"
    );
    const fullLandingRoute = getLanguageLink(landingRoute, i18n);

    const fullThankYouRoute = getLanguageLink(thankYouRoute, i18n);
    const redirect = useNavigate();

    function sendEmail() {
        let body = {
            name: nameUsr,
            email: email,
            description: descriptionUsr,
            profession: professionUsr,
            subject: "Consulta",
            secret: import.meta.env.VITE_REACT_APP_SECRET,
        };
        fetch(
            "https://europe-west3-paberater-8ca33.cloudfunctions.net/EnviarCorreoPaberater-E",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const requiredFields = [
            nameUsr,
            email,
            confirmEmail,
            professionUsr,
            descriptionUsr,
        ];
        const isAnyFieldEmpty = requiredFields.some(
            (field) => field.trim() === ""
        );

        if (isAnyFieldEmpty) {
            alert(requiredFieldsEmptyError);
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (email !== confirmEmail) {
            alert(emailsDontMatchError);
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
        sendEmail();
        redirect(fullThankYouRoute);
    }

    return (
        <>
            <section className="questionsTitle">
                <h2 className="titleQuestion">{title}</h2>

                <p className="question_subtitle">{subtitle}</p>
            </section>
            <Form className="questionForm" onSubmit={handleSubmit}>
                <Form.Group className="inputInfo" controlId="controlNames">
                    <Form.Control
                        type="text"
                        value={nameUsr}
                        placeholder={nameLabel}
                        onChange={(e) => setNameUsr(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="inputInfo" controlId="controlEmails">
                    <Form.Control
                        type="email"
                        placeholder={emailLabel}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="inputInfo"
                    controlId="controlEmailConfirmation"
                >
                    <Form.Control
                        type="email"
                        placeholder={confirmEmailLabel}
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="inputInfo" controlId="controlProfession">
                    <Form.Select
                        aria-label={selectCarreerLabel}
                        value={professionUsr}
                        onChange={(e) => setProfessionUsr(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            {selectCarreerLabel}
                        </option>
                        <option value="Médicos y profesionales de salud">
                            {medicsLabel}
                        </option>
                        <option value="Ingenieros">{engineersLabel}</option>
                        <option value="Arquitecto">{architectsLabel}</option>
                        <option value="Administración">
                            {accountingLabel}
                        </option>
                        <option value="Otras profesiones"> {others}</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="inputInfo" controlId="controlQuestion">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder={formSubjectLabel}
                        required
                        value={descriptionUsr}
                        onChange={(e) => setDescriptionUsr(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="inputInfo" controlId="checkPABerater">
                    <Form.Check
                        className="form-check-section"
                        type="checkbox"
                        label={joinMailingListLabel}
                        onChange={() => setSubscribeToList(!subscribeToList)}
                    />
                    <Form.Check
                        className="form-check-section"
                        type="checkbox"
                        label={
                            <span>
                                {termsAndConditionsTitle}
                                <Link
                                    className="termsform"
                                    to={fullLandingRoute}
                                >
                                    {termsAndConditionsText}
                                </Link>
                            </span>
                        }
                        required
                    />
                    <div className="adviserBtn">
                        <button type="submit" className="btn-added">
                            {button}
                        </button>
                    </div>
                </Form.Group>
            </Form>
        </>
    );
}

export default QuestionForm;
