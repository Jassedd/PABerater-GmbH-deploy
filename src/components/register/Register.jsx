import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useState } from "react";
import { useAuth } from "../../authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../../../firebase/firebase";
import "./Register.css"

import "./Register.css";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    type: "user",
  });
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const auth = getAuth();
      const authUserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

      const authUser = authUserCredential.user;

      await updateProfile(authUser, {
        displayName: user.username,
      });

      await setDoc(doc(db, "users", authUser.uid), {
        email: user.email,
        username: user.username,
        type: user.type,
      });

      alert("Registro exitoso. ¡Bienvenido!", {
        autoClose: 2000,
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      console.error(error.code);

      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("El correo electrónico ya está en uso");
      } else {
        setError("Error desconocido. Por favor, inténtelo de nuevo.");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center register_container" style={{ height: "70vh" }}>
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
            <Form.Label>Nombre y Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellidos"
              name="username"
              onChange={handleChange}
            />
          </Form.Group>
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
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
          <Button variant="danger" type="submit">
            Registrarme
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Register;
