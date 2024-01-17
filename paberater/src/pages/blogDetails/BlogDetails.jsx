import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import { db } from '../../../firebase/firebase';
import { ref, onValue } from 'firebase/database';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const BlogDetails = () => {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const newsRef = ref(db, `news/${id}`);
        onValue(newsRef, (snapshot) => {
          const newsData = snapshot.val();
          if (newsData) {
            setSelectedNews({
              id,
              ...newsData,
            });
            setDescription(newsData.description || ''); 
          } else {
            setSelectedNews(null);
          }
        });
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
