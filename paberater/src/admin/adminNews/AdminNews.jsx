import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import addOrEditNews from "../AddOrEditNews"; 

const apiUrl = "/api/news";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Error al obtener la lista de noticias");
        }

        const data = await response.json();
        setNewsList(data);
      } catch (error) {
        console.error("Error al obtener la lista de noticias: ", error);
        toast.error("Error al cargar la lista de noticias. Por favor, inténtalo de nuevo.", {
          autoClose: 2000,
        });
      }
    };

    fetchNews();
  }, []);

  const handleEditClick = (id) => {
    const editedNews = newsList.find((news) => news.id === id);

    addOrEditNews(editedNews, true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la noticia");
      }

      const updatedNewsList = newsList.filter((news) => news.id !== id);
      setNewsList(updatedNewsList);

      toast.success("Noticia eliminada correctamente", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error al eliminar la noticia: ", error);
      toast.error("Error al eliminar la noticia. Por favor, inténtalo de nuevo.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <h2>Lista de Noticias</h2>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <div>
              <img src={news.image} alt={`Imagen de ${news.title}`} style={{ maxWidth: "100px" }} />
            </div>
            <div>
              <h3>{news.title}</h3>
              <button onClick={() => handleEditClick(news.id)}>Editar</button>
              <button onClick={() => handleDeleteClick(news.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
