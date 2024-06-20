import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import Pagination from '../../components/pagination/Pagination';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';
import "./UsersForms.css";
import { countries } from '../../components/countries/Countries';
import Form from 'react-bootstrap/Form';

function UsersForms() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisible, setLastVisible] = useState(null);
  const [filters, setFilters] = useState({
    subject: "",
    country: "",
    nacionality: "",
  });
  const [totalUsersCount, setTotalUsersCount] = useState(0);

  const pageSize = 20;

  const fetchData = async (page, filters) => {
    setLoading(true);

    try {
      const usersCollection = collection(db, 'usersForms');
      let queryRef = query(usersCollection, orderBy('date', 'desc'));

      if (filters.subject) {
        queryRef = query(queryRef, where('subject', '==', filters.subject));
      }
      if (filters.country) {
        queryRef = query(queryRef, where('country', '==', filters.country));
      }
      if (filters.nacionality) {
        queryRef = query(queryRef, where('nacionality', '==', filters.nacionality));
      }

      if (page > 1 && lastVisible) {
        queryRef = query(queryRef, startAfter(lastVisible), limit(pageSize));
      } else {
        queryRef = query(queryRef, limit(pageSize));
        setLastVisible(null); // Reset lastVisible for new queries
      }

      const querySnapshot = await getDocs(queryRef);
      const usersArray = [];
      querySnapshot.forEach((doc) => {
        usersArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);

      const totalUsersRef = query(usersCollection);
      const totalUsersSnapshot = await getDocs(totalUsersRef);
      const totalUsersCount = totalUsersSnapshot.size;
      setTotalUsersCount(totalUsersCount);

      setUsersData(usersArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, filters);
  }, [currentPage, filters]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setCurrentPage(1); 
    setLastVisible(null); 
  };

  const resetFilters = () => {
    setFilters({
      subject: "",
      country: "",
      nacionality: "",
    });
    setCurrentPage(1);
    setLastVisible(null); 
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <section>
      <ScrollToTop />
      <section className='Users'>
        <div className="filter-controls">
          <label>
            Asunto:
            <Form.Select value={filters.subject} onChange={(e) => handleFilterChange(e, 'subject')}>
              <option value="">Todos</option>
              <option value="Solicitud de asesoramiento">Solicitud de Asesoría</option>
              <option value="Contacto">Contacto</option>
            </Form.Select>
          </label>
          <label>
            Nacionalidad:
            <Form.Select value={filters.nacionality} onChange={(e) => handleFilterChange(e, 'nacionality')}>
              <option value="">Todos</option>
              {countries.map((nacionality) => (
                <option key={nacionality.id} value={nacionality.id}>
                  {nacionality.name}
                </option>
              ))}
            </Form.Select>
          </label>
          <label>
            País de residencia:
            <Form.Select value={filters.country} onChange={(e) => handleFilterChange(e, 'country')}>
              <option value="">Todos</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </label>
          <button onClick={resetFilters}>Reestablecer Filtros</button>
        </div>
        {usersData.map((user, index) => (
          <div key={user.id} className={`user-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <ul className='unorderListUsers' type="none">
              <li className='usersList'>{user.name}
                <div className="user-detail">
                  <strong>Asunto:</strong> {user.subject}
                </div>
                <div className="user-detail">
                  <strong>Profesión:</strong> {user.profession}
                </div>
                <div className="user-detail">
                  <strong>Nacionalidad:</strong> {user.nacionality}
                </div>
                <div className="user-detail">
                  <strong>País de residencia:</strong> {user.country}
                </div>
                <div className="user-detail">
                  <strong>Email:</strong> {user.email}
                </div>
                <div className="user-detail">
                  <strong>Fecha:</strong> {new Date(user.date.seconds * 1000).toLocaleDateString()}
                </div>
                <div className="user-detail">
                  <Link to={`/descripcion/${user.id}`}>
                    <strong className='dscription'>Descripción</strong>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </section>
      <Pagination
        totalItems={totalUsersCount}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </section>
  );
}

export default UsersForms;
