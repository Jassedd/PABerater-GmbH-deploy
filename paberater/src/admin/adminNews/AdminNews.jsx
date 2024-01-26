import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminNews.css";
import Pagination from "../../components/pagination/Pagination";
import { onSnapshot, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const newsCollection = collection(db, "news");

    const fetchNews = () => {
      onSnapshot(newsCollection, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsList(data);
      });
    };

    fetchNews();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      await deleteDoc(collection(db, "news", id));

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
          <Link to={`/admnewsdetails/${news.id}`} key={news.id}>
            <li className="NewsItems">
              <div className="NewsInfo">
                <img
                  src={news.img}
                  alt={`Imagen de ${news.title}`}
                  style={{ maxWidth: "100px" }}
                />
                <h3 className="titleNewslist">{news.title}</h3>
              </div>
              <div className="Btns-list">
                <Link to={`/admedit/${news.id}`}>
                  <button className="Btn-edit">Editar</button>
                </Link>
                <button
                  onClick={() => handleDeleteClick(news.id)}
                  className="Btn-delete"
                >
                  Eliminar
                </button>
              </div>
            </li>
          </Link>
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
