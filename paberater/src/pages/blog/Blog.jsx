import React, { useState, useEffect } from 'react';
import "./Blog.css"
import New1 from "../../assets/img/jorge-4.png"
import New2 from "../../assets/img/service1.jpg"
import New3 from "../../assets/img/service1.jpg"


const Blog = () => {

    const simulatedNews = [
        {
          "id": 1,
          "title": "Nueva funcionalidad añadida a nuestra aplicación",
          "image": `${New2}`,
          "description": "Hemos añadido una emocionante nueva funcionalidad a nuestra aplicación que facilitará la vida de nuestros usuarios. ¡Descúbrelo ahora!",
          "date": "2024-01-15"
        },
        {
          "id": 2,
          "title": "Actualización de seguridad importante",
          "image": `${New1}`,
          "description": "Para garantizar la seguridad de nuestros usuarios, hemos implementado una actualización crítica. Por favor, asegúrate de mantener tu aplicación actualizada.",
          "date": "2024-01-16"
        },
        {
          "id": 3,
          "title": "Evento especial: Conferencia en línea",
          "image": `${New3}`,
          "description": "No te pierdas nuestra conferencia en línea exclusiva donde discutiremos las últimas tendencias en tecnología. ¡Regístrate ahora para obtener acceso gratuito!",
          "date": "2024-01-20"
        },
      ];


  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setBlogData(simulatedNews);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);





  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <section className='blogSection'>
      <h1>Nuestro Blog PABerater</h1>
      <br />
      {blogData.map((post) => (
        <div key={post.id} className='container-new'>
          <h2 className='blogTitle'>{post.title}</h2>
          <img src={post.image} alt={post.title} className='blogImg'/>
          <p className='blogDescription'>
            {post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}
            <a href={`/blogPABerater/${post.id}`}> Ver más</a>
          </p>        </div>
      ))}
    </section>
  );
};

export default Blog;
