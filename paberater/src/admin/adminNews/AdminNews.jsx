import React, { useState, useEffect } from "react";
import addOrEditNews from "../AddOrEditNews";
import "./AdminNews.css";
import Pagination from "../../components/pagination/Pagination";
import { onValue, ref, remove } from "firebase/database";
import { db } from "../../../firebase/firebase";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const newsRef = ref(db, "news");

    const fetchNews = () => {
      onValue(newsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setNewsList(newsArray);
        }
      });
    };

    fetchNews();
  }, []);

  const handleEditClick = (id) => {
    const editedNews = newsList.find((news) => news.id === id);
    addOrEditNews(editedNews, true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await remove(ref(db, `news/${id}`));

      const updatedNewsList = newsList.filter((news) => news.id !== id);
      setNewsList(updatedNewsList);

      alert("Noticia eliminada correctamente", {
        autoClose: 2000,
      });

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
              <img src={news.img} alt={`Imagen de ${news.title}`} style={{ maxWidth: "100px" }} />
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
