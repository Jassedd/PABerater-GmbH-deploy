import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import { db } from '../../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

const BlogDetails = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsDoc = doc(db, 'news', id);
        const snapshot = await getDoc(newsDoc);

        if (snapshot.exists()) {
          const newsData = snapshot.data();
          setSelectedNews({
            id,
            ...newsData,
          });
          setDescription(newsData.description || ''); 
        } else {
          setSelectedNews(null);
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
        setSelectedNews(null);
      }
    };

    fetchNewsDetails();
  }, [id]);

  if (!selectedNews) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div className="blogDetails">
      <ScrollToTop />

      <section>
        <h1 className='titleBlogDetails'>{selectedNews.title}</h1>
        <p className='blogDetailsDate'>{selectedNews.date}</p>
      </section>
      <img src={selectedNews.img} alt={selectedNews.title} className='blogDetailsImg'/>
      <div className="quill-container">
        <ReactQuill
          value={description}
          readOnly
          theme={null}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
