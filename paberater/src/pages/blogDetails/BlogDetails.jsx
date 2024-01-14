import React from 'react';
import { useParams } from 'react-router-dom';
import "./BlogDetails.css";
import New2 from "../../assets/img/service1.jpg"


const BlogDetails = () => {
  const { id } = useParams();

  const simulatedNews = [
    {
      "id": 1,
      "title": "Nueva funcionalidad añadida a nuestra aplicación",
      "image": `${New2}`,
      "description": "Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora! Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora  Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora   Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora   Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora   Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora",
      "date": "2024-01-15",
    },
  ];

  const selectedNews = simulatedNews.find(news => news.id === parseInt(id));

  if (!selectedNews) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div className="blogDetails">
      <section>
      <h1 className='titleBlogDetails'>{selectedNews.title}</h1>
      <p className='blogDetailsDate'>{selectedNews.date}</p>
      </section>
      <img src={selectedNews.image} alt={selectedNews.title} className='blogDetailsImg'/>
      <p className='blogDetailsContent'>{selectedNews.description}</p>
    </div>
  );
};

export default BlogDetails;
