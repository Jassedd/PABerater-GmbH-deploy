import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css";
import { ref as dbRef, update, push } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { createNews } from "../../../firebase/firebaseBack";
import { useNavigate, useParams } from "react-router-dom";
import "./AddNews.css";
import { db, storage } from "../../../firebase/firebase";

const initialStateValues = {
  title: "",
  img: "",
  description: "",
};

const BlogAdmPaberater = () => {
  const { id, newId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (newId) {
      setEditing(true);
      const getNew = async () => {
        const newsRef = dbRef(db, `news/${newId}`);
        const snapshot = await get(newsRef);
        const data = snapshot.val();
        if (data) {
          setTitle(data.title || "");
          setDescription(data.description || "");
        }
      };
      getNew();
    }
  }, [newId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imgUrl = image ? await handleImageUpload(image) : null;
      const newsObject = { title, description, img: imgUrl };

      if (editing) {
        await update(dbRef(db, `news/${newId}`), newsObject);
      } else {
        createNews(newsObject.title, newsObject.description, newsObject.img);
      }

      resetForm();
      navigate(`/admnews`);
    } catch (error) {
      console.error("Error al manejar el envío del formulario:", error);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const storageReference = storageRef(storage, `images/${file.name}`);
      await uploadBytes(storageReference, file);
      const imgUrl = await getDownloadURL(storageReference);
      return imgUrl;
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
      throw error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "img") {
      const file = e.target.files[0];
      if (file) {
        const isImage = file.type.startsWith("image/");
        if (isImage) {
          setImage(file);
          const previewURL = URL.createObjectURL(file);
          setImagePreview(previewURL);
        } else {
          console.error("El archivo seleccionado no es una imagen");
          setImage(null);
          setImagePreview(null);
        }
      }
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
  };

  const newsColor = "white";

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "60vh", color: "white" }}
    >
      <Form
        className="newsForm"
        style={{
          width: "28rem",
          padding: "15px",
          borderRadius: "10px",
          overflowY: "hidden",
          maxHeight: "150vh",
          backgroundColor: newsColor,
          color: "#25357a",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" name="img" onChange={handleInputChange} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Vista previa"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Título de la noticia</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción de la noticia</Form.Label>
          <ReactQuill
            value={description}
            onChange={(value) => setDescription(value)}
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

export default BlogAdmPaberater;
