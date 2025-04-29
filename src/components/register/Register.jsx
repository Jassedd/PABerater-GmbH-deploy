import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useState } from "react";
import { useAuth } from "../../authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { db } from "../../../firebase/firebase";
import "./Register.css";

import "./Register.css";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";
import { loginRoute } from "../../constants/routeNames";

export function Register() {
    const { t, i18n } = useTranslation();

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        type: "user",
    });
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const emailLabel = t("signupPage.emailLabel");
    const nameLabel = t("signupPage.nameLabel");
    const passwordLabel = t("signupPage.passwordLabel");
    const button = t("signupPage.button");
    const link1 = t("signupPage.link1");
    const link2 = t("signupPage.link2");
    const uknownError = t("signupPage.uknownError");
    const weakPassword = t("signupPage.weakPassword");
    const success = t("signupPage.success");
    const emailInUse = t("signupPage.emailInUse");

    const fullLoginRoute = getLanguageLink(loginRoute, i18n);
    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const auth = getAuth();
            const authUserCredential = await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            );

            const authUser = authUserCredential.user;

            await updateProfile(authUser, {
                displayName: user.username,
            });

            await setDoc(doc(db, "users", authUser.uid), {
                email: user.email,
                username: user.username,
                type: user.type,
            });

            alert(success, {
                autoClose: 2000,
                onClose: () => navigate(fullLoginRoute),
            });
        } catch (error) {
            console.error(error.code);

            if (error.code === "auth/weak-password") {
                setError(weakPassword);
            } else if (error.code === "auth/email-already-in-use") {
                setError(emailInUse);
            } else {
                setError(uknownError);
            }
        }
    };

    return (
        <div
            className="d-flex justify-content-center register_container"
            style={{ height: "70vh" }}
        >
            <div style={{ width: "19rem" }}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form
                    className="registerForm"
                    onSubmit={handleSubmit}
                    style={{
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>{nameLabel}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={nameLabel}
                            name="username"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{emailLabel}</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder={emailLabel}
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{passwordLabel}</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={passwordLabel}
                            name="password"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <p>
                        {link1} <Link to={fullLoginRoute}>{link2}</Link>
                    </p>
                    <Button variant="danger" type="submit">
                        {button}
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default Register;
