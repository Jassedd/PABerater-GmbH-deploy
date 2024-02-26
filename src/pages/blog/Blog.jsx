import React, { useState, useEffect } from 'react';
import './Blog.css';
import Pagination from '../../components/pagination/Pagination';
import BlogImg from "../../assets/img/blog.jpg";
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
    <main>
      <ScrollToTop />
      <section className="blog_Section">
        <img src={BlogImg} alt="blog-img" className="banner_blog_img" />
        <div className="figure_blog">
          <h1 className="title_img_blog">
            Novedades
          </h1>
        </div>
      </section>

      <h1 className="titleBlog">Estas son las ultimas noticias</h1>
      <br />
      <section className='Allnews'>
      {blogData.map((post) => (
        <div key={post.id} className="container-new">
          <br />
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
    </main>
  );
};

export default Blog;
