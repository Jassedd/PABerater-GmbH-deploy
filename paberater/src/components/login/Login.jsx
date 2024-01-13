import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../authContext/AuthContext";

const Login = () => {
 const [user, setUser] = useState({ email: "", password: "" });
 const [error, setError] = useState("");

 const { login } = useAuth();

 const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);
      window.location.href = "/";
    } catch (error) {
      setError(error.message);
    }
 };


 const burgundyColor = "#FFF";

 return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <div className="form" style={{ width: "19rem" }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: burgundyColor,
            padding: "20px",
            borderRadius: "10px",
            color: "#25357a",
            marginBottom: "10vh",
            marginTop: "10vh"
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

          <Button variant="light" style={{backgroundColor: "#25357a", color: "#fff"}} type="submit" className="button-login">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </div>
 );
};

export default Login;