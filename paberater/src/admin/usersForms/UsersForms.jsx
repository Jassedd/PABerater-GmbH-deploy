import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from "../../../firebase/firebase";
import Pagination from '../../components/pagination/Pagination';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';
import "./UsersForms.css"
import Accordion from 'react-bootstrap/Accordion';

function UsersForms() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12;

  const fetchData = async (page) => {
    setLoading(true);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    try {
      const usersRef = ref(db, 'usersForms');
      const unsubscribe = onValue(usersRef, (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            const usersArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setUsersData(usersArray.slice(startIndex, endIndex));
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      });

      // Unsubscribe when the component is unmounted or when fetchData is called again
      return () => {
        unsubscribe();
      };
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
    <section>
    <ScrollToTop />
    <section className='Users'>
      {usersData.map((post) => (
        <div key={post.id} className="user-container" >
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>{post.name}</Accordion.Header>
              <Accordion.Body>
                <div className="user-detail">
                  <strong>Subject:</strong> {post.subject}
                </div>
                <div className="user-detail">
                  <strong>Email:</strong> {post.email}
                </div>
                <div className="user-detail">
                  <strong>Description:</strong> {post.description}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </section>
      <Pagination totalItems={usersData.length} itemsPerPage={pageSize} onPageChange={onPageChange} />
    </section>
  );
}

export default UsersForms;
