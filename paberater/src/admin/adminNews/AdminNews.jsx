import React, { useState, useEffect } from "react";
import addOrEditNews from "../AddOrEditNews"; 
import "./AdminNews.css"
import Pagination from "../../components/pagination/Pagination";
import New1 from "../../assets/img/jorge-4.png"
import New2 from "../../assets/img/service1.jpg"
import New3 from "../../assets/img/service2.jpg"

const apiUrl = [
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

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;


  useEffect(() => {
    setNewsList(apiUrl);
  }, []);

  const handleEditClick = (id) => {
    const editedNews = newsList.find((news) => news.id === id);
    addOrEditNews(editedNews, true);
  };

  const handleDeleteClick = async (id) => {
    try {
      // Simula la eliminación de una noticia (puedes ajustarlo según tu lógica)
      const updatedNewsList = newsList.filter((news) => news.id !== id);
      setNewsList(updatedNewsList);
      alert("Noticia eliminada correctamente", {
        autoClose: 2000,
      });

          // Verifica si después de eliminar, la última página queda vacía
      const totalPages = Math.ceil(updatedNewsList.length / pageSize);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    } catch (error) {
      console.error("Error al eliminar la noticia: ", error);
      alert.error("Error al eliminar la noticia. Por favor, inténtalo de nuevo.", {
        autoClose: 2000,
      });
    }    
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return newsList.slice(startIndex, endIndex);
  };

  return (
    <div className="containerList">
      <h2>Lista de Noticias</h2>
      <ul className="listNews">
        {getCurrentPageData().map((news) => (
          <li key={news.id} className="NewsItems">
            <div className="NewsInfo">
              <img src={news.image} alt={`Imagen de ${news.title}`} style={{ maxWidth: "100px" }} />
              <h3 className="titleNewslist">{news.title}</h3>
            </div>
            <div className="Btns-list">
              <button onClick={() => handleEditClick(news.id)} className="Btn-edit">Editar</button>
              <button onClick={() => handleDeleteClick(news.id)} className="Btn-delete">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={newsList.length}
        itemsPerPage={pageSize}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default NewsList;
