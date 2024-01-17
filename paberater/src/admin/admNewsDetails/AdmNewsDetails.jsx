import React, { useState, useEffect } from 'react';
import { useParams, Link, redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../pages/blogDetails/BlogDetails.css';
import { db } from '../../../firebase/firebase';
import { ref, onValue, remove } from 'firebase/database';

const AdminNewsDetails = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsRef = ref(db, `news/${id}`);
        onValue(newsRef, (snapshot) => {
          const newsData = snapshot.val();
          if (newsData) {
            setSelectedNews({
              id,
              ...newsData,
            });
            setDescription(newsData.description || ''); // Set initial description value
          } else {
            setSelectedNews(null);
          }
        });
      } catch (error) {
        console.error('Error fetching news details:', error);
        setSelectedNews(null);
      }
    };

    fetchNewsDetails();
  }, [id]);

  const handleDeleteClick = async () => {
    try {
      const newsRef = ref(db, `news/${id}`);
      await remove(newsRef);
      alert('Noticia eliminada correctamente', {
        autoClose: 2000,
      });
      redirect("/admnews"); // Use history.push for redirection
    } catch (error) {
      console.error('Error al eliminar la noticia:', error);
      alert('Error al eliminar la noticia. Por favor, inténtalo de nuevo.', {
        autoClose: 2000,
      });
    }
  };

  if (!selectedNews) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div className="blogDetails">
      <section>
        <h1 className='titleBlogDetails'>{selectedNews.title}</h1>
        <p className='blogDetailsDate'>{selectedNews.date}</p>
      </section>
      <img src={selectedNews.img} alt={selectedNews.title} className='blogDetailsImg'/>
      <ReactQuill
        value={description}
        readOnly
        theme={null}
      />
      <div className="Btns-list">
        <button onClick={handleDeleteClick} className="Btn-delete">Eliminar</button>
        <Link to={`/admedit/${id}`}>
          <button className="Btn-edit">Editar</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminNewsDetails;
