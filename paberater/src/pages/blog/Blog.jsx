import React, { useState, useEffect } from 'react';
import "./Blog.css"
import video3 from "../../assets/video/production_id_4872898 (1080p).mp4";
import New1 from "../../assets/img/jorge-4.png"
import New2 from "../../assets/img/service1.jpg"
import New3 from "../../assets/img/service2.jpg"


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
        <section className="translate_services3">
        <video className="video_translater" autoPlay loop>
          <source src={video3} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="figure_title3">
          <h1 className="title3_img_translate">NOTICIAS e información de interés</h1>
        </div>
      </section>
      <h1 className="title">Ultimas Noticias</h1>
      <br />
      {blogData.map((post) => (
        <div key={post.id} className='container-new'>
          <br /> <br />
          <img src={post.image} alt={post.title} className='blogImg'/>
          <div className='content-new'>
            <h2 className='blogTitle'>{post.title}</h2>
            <p className='blogDescription'>
                {post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}
                <a href={`/blogPABerater/${post.id}`} className='see-more'> Leer más</a>
            <hr className="lineBlog" />
            <p>{post.date}</p>
            
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
