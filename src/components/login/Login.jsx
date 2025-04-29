import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useAuth } from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import Alert from "react-bootstrap/esm/Alert";
import GoogleLogo from "../../assets/img/icons8-google.svg";
import "./Login.css";
import LogoAzul from "../../assets/img/Logos/LOGO AZUL3dpi.svg";
import { useTranslation } from "react-i18next";
import getLanguageLink from "../../helpers/getLanguageLink";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { loginWithGoogle, resetPassword, login } = useAuth();
    const { t, i18n } = useTranslation();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const loginButton = t("loginPage.loginButton");
    const resetPasswordMessage = t("loginPage.resetPasswordMessage");
    const noEmail = t("loginPage.noEmail");
    const invalidPassword = t("loginPage.invalidPassword");
    const loginFailed = t("loginPage.loginFailed");
    const invalidEmail = t("loginPage.invalidEmail");
    const tooManyTries = t("loginPage.tooManyTries");
    const userNotFound = t("loginPage.userNotFound");
    const emailLabel = t("loginPage.emailLabel");
    const passwordLabel = t("loginPage.passwordLabel");
    const loginWithGoogleLabel = t("loginPage.loginWithGoogle");

    const fullHomeRoute = getLanguageLink("/", i18n);
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const userCredential = await login(user.email, user.password);

            const authenticatedUser = userCredential
                ? userCredential.user
                : null;

            if (authenticatedUser) {
                const userId = authenticatedUser.uid;

                const userDoc = doc(db, "users", userId);
                const userSnapshot = await getDoc(userDoc);

                if (userSnapshot.exists()) {
                    const userType = userSnapshot.data().type;

                    console.log("User Type:", userType);

                    if (["user", "admin"].includes(userType)) {
                        if (userType === "admin") {
                            console.log("Navigating to Admin Home");
                            navigate(`/home`);
                        } else {
                            console.log("Navigating to User Home");
                            navigate(`/`);
                        }
                    }
                } else {
                    console.error("User data not found");
                    setError(userNotFound);
                }
            } else {
                console.error("Authentication failed or user not found");
                setError(loginFailed);
            }
        } catch (error) {
            console.error("Firebase Error Object:", error);

            if (error.code === "auth/too-many-requests") {
                setError(tooManyTries);
            } else if (error.code === "auth/invalid-login-credentials") {
                setError(invalidPassword);
            } else if (error.code === "auth/invalid-email") {
                setError(invalidEmail);
            } else {
                setError(`Error: ${error.message || "desconocido"}`);
            }
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();

            const userId = auth.currentUser.uid;
            const userDoc = doc(db, "users", userId);
            const userSnapshot = await getDoc(userDoc);

            if (userSnapshot.exists()) {
                const userType = userSnapshot.data().type;

                console.log("User Type:", userType);

                if (userType === "user") {
                    console.log("Navigating to user Home");
                    navigate(`/`);
                } else if (userType === "admin") {
                    console.log("Navigating to Admin Home");
                    navigate(`/home`);
                }
            } else {
                navigate(`/`);
                console.error("User data not found");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if (!user.email) return setError(noEmail);
        try {
            await resetPassword(user.email);
            setError(resetPasswordMessage);
        } catch (error) {
            setError(error.message);
        }
    };

    const burgundyColor = "#FFF";

    return (
        <section className="login_container">
            <div className="form_card">
                <img src={LogoAzul} alt="logo-pab" className="logo_pabe" />
                {error && <Alert variant="danger">{error}</Alert>}
                <Form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: burgundyColor,
                        padding: "20px",
                        borderRadius: "10px",
                        color: "red",
                    }}
                >
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

                    <div className="forgot_pass">
                        <a
                            href="#!"
                            onClick={handleResetPassword}
                            className="text_pass"
                        >
                            {forgotPasswordLabel}
                        </a>
                    </div>

                    <div className="buttons-login">
                        <Button className="button-regular" type="submit">
                            {loginButton}
                        </Button>
                        <Button
                            className="button-google"
                            onClick={handleGoogleSignin}
                        >
                            <img
                                src={GoogleLogo}
                                alt="logo"
                                className="logo_google"
                            />
                            {loginWithGoogleLabel}
                        </Button>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default Login;
