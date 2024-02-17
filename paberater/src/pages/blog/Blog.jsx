import React, { useState, useEffect } from 'react';
import './Blog.css';
import Pagination from '../../components/pagination/Pagination';
import video3 from '../../assets/video/production_id_4872898 (1080p).mp4';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const fetchData = async (page) => {
    setLoading(true);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    try {
      const newsCollection = collection(db, 'news');
      const querySnapshot = await getDocs(newsCollection);

      const newsArray = [];
      querySnapshot.forEach((doc) => {
        newsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setBlogData(newsArray.slice(startIndex, endIndex));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="blogSection">
      <ScrollToTop />
      <section className="translate_services3">
        <video className="video_translater" autoPlay loop>
          <source src={video3} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="figure_title3">
          <h1 className="title3_img_translate">NOTICIAS e información de interés</h1>
        </div>
      </section>
      <h1 className="titleBlog">Ultimas Noticias</h1>
      <br />
      <section className='Allnews'>
      {blogData.map((post) => (
        <div key={post.id} className="container-new">
          <br /> <br />
          <img src={post.img} alt={post.title} className="blogImg" />
          <div className="content-new">
            <h2 className="blogTitle">{post.title}</h2>
            <p
              className="blogDescription"
              dangerouslySetInnerHTML={{
                __html:
                  post.description.length > 100
                    ? `${post.description.substring(0, 100)}...`
                    : post.description,
              }}
            />
              <Link to={`/blogPABerater/${post.id}`} className="see-more">
                {' '}
                Leer más
              </Link>
              <hr className="lineBlog" />
              <p>{post.date}</p>
          </div>
        </div>
      ))}
      </section>
      <Pagination totalItems={blogData.length} itemsPerPage={pageSize} onPageChange={onPageChange} />
    </section>
  );
};

export default Blog;
