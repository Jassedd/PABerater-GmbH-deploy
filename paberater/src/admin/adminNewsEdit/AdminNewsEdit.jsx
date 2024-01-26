import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../../../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './AdminNewsEdit.css';

const AdminNewsEdit = () => {
  const { id } = useParams();
  const redirect = useNavigate();

  const [newsData, setNewsData] = useState({
    title: '',
    description: '',
    date: '',
    img: '',
  });

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsDocRef = doc(db, 'news', id);
        const newsDoc = await getDoc(newsDocRef);

        if (newsDoc.exists()) {
          setNewsData(newsDoc.data());
        } else {
          // Manejar el caso cuando el documento no existe
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    fetchNewsDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const newsDocRef = doc(db, 'news', id);
      await setDoc(newsDocRef, newsData);
      alert('Noticia actualizada correctamente', {
        autoClose: 2000,
      });
      redirect('/home');
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
      alert('Error al actualizar la noticia. Por favor, inténtalo de nuevo.', {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="adminNewsEdit">
      <h1>Editar Noticia</h1>
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newsData.title}
        onChange={handleInputChange}
      />
      <label htmlFor="description">Descripción:</label>
      <ReactQuill
        id="description"
        value={newsData.description}
        onChange={(value) =>
          setNewsData((prevData) => ({ ...prevData, description: value }))
        }
      />
      <label htmlFor="date">Fecha:</label>
      <input
        type="text"
        id="date"
        name="date"
        value={newsData.date}
        onChange={handleInputChange}
      />
      <button className='button-edit' onClick={handleSaveClick}>Guardar Cambios</button>
    </div>
  );
};

export default AdminNewsEdit;
