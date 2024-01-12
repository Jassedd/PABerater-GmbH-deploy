import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddNews.css";

const initialStateValues = {
  title: "",
  image: null,
  description: "",
};

const BlogPaberater = () => {
  const { id, newId } = useParams();
  const [values, setValues] = useState(initialStateValues);
  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const imageURL = await response.json();
      return imageURL;
    } catch (error) {
      console.error("Error al manejar la carga de la imagen:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.info("Subiendo imagen, por favor espera...", {
        position: toast.POSITION.TOP_CENTER,
      });

      const imageURL = await handleImageUpload(values.image);

      const newsObject = {
        ...values,
        image: imageURL,
      };


      toast.success("Noticia creada correctamente", { autoClose: 2000 });
      setValues({ ...initialStateValues });
      navigate(`/adminHome/${id}/news`);
    } catch (error) {
      console.error("Error al manejar el envío del formulario:", error);
      toast.error(
        "Error al procesar la solicitud. Por favor, inténtalo de nuevo.",
        { autoClose: 2000 }
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, files } = e.target;

    if (name === "image") {
      setValues({ ...values, image: files[0] });
    } else {
      setValues({ ...values, [name]: e.target.value });
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "60vh", color: "white" }}
    >
      <Form
        className="newsForm"
        style={{
          width: "18rem",
          padding: "15px",
          borderRadius: "10px",
          overflowY: "hidden",
          maxHeight: "150vh",
          backgroundColor: "white",  
          color: "#cd222d",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Título de la noticia</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción de la noticia</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="saveNew">
          <Button variant="light" type="submit" className="buttonSave">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BlogPaberater;
