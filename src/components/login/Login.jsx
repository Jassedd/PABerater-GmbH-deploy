import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useAuth } from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import Alert from 'react-bootstrap/esm/Alert';
import GoogleLogo from "../../assets/img/icons8-google.svg"
import "./Login.css";
import LogoAzul from "../../assets/img/Logos/LOGO AZUL3dpi.svg"

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { loginWithGoogle, resetPassword, login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await login(user.email, user.password);

      const authenticatedUser = userCredential ? userCredential.user : null;

      if (authenticatedUser) {
        const userId = authenticatedUser.uid;

        const userDoc = doc(db, 'users', userId);
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
          setError(
            "Datos de usuario no encontrados. Por favor, inténtelo de nuevo."
          );
        }
      } else {
        console.error("Authentication failed or user not found");
        setError(
          "Inicio de sesión fallido. Por favor, verifique sus credenciales e inténtelo de nuevo."
        );
      }
    } catch (error) {
      console.error("Firebase Error Object:", error);

      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intentos. Inténtelo de nuevo más tarde.");
      } else if (error.code === "auth/invalid-login-credentials") {
        setError("Correo o contraseña incorrecta. Verifique sus credenciales.");
      } else if (error.code === "auth/invalid-email") {
        setError(
          "Correo electrónico inválido. Verifique su dirección de correo."
        );
      } else {
        setError(`Error: ${error.message || "desconocido"}`);
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();

      const userId = auth.currentUser.uid;
      const userDoc = doc(db, 'users', userId);
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
    if (!user.email) return setError("Por favor ingresa tu correo electrónico");
    try {
      await resetPassword(user.email);
      setError(
        "Se ha enviado un mensaje a tu correo electrónico para cambiar la contraseña"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const burgundyColor = "#FFF";

  return (
    <section className="login_container">
      <div className="form_card">
        <img src={LogoAzul} alt="logo-pab" className="logo_pabe"/>
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
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="forgot_pass">
            <a href="#!" onClick={handleResetPassword} className="text_pass">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="buttons-login">
            <Button className="button-regular" type="submit">
              Iniciar sesión
            </Button>
            <Button className ="button-google" 
              onClick={handleGoogleSignin}>
              <img src={GoogleLogo} alt="logo" className="logo_google" />
              Iniciar sesión con Google
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Login;
