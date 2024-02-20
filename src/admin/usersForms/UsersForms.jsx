import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
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
  const [filterSubject, setFilterSubject] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const [filterNationality, setFilterNationality] = useState(null);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const pageSize = 12;

  const fetchData = async (page) => {
    setLoading(true);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    try {
      const usersCollection = collection(db, 'usersForms');
      let queryRef = query(usersCollection);

      if (filterSubject) {
        queryRef = query(usersCollection, where('subject', '==', filterSubject));
      }
      if (filterCountry) {
        queryRef = query(usersCollection, where('country', '==', filterCountry));
      }
      if (filterNationality) {
        queryRef = query(usersCollection, where('nacionality', '==', filterNationality));
      }

      const querySnapshot = await getDocs(queryRef);

      console.log('Documentos filtrados:', querySnapshot.size);

      const usersArray = [];
      querySnapshot.forEach((doc) => {
        usersArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setUsersData(usersArray.slice(startIndex, endIndex));
      setLoading(false);
      setFiltersChanged(false);
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
  }, [currentPage, filterSubject, filterCountry, filterNationality]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    switch (filterType) {
      case 'subject':
        setFilterSubject(value);
        break;
      case 'country':
        setFilterCountry(value);
        break;
      case 'nacionality':
        setFilterNationality(value);
        break;
      default:
        break;
    }
  };

  
  const resetFilters = () => {
    setFilterSubject(null);
    setFilterCountry(null);
    setFilterNationality(null);
    fetchData(currentPage);
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
            <Form.Select onChange={(e) => handleFilterChange(e, 'subject')}>
              <option value="">Todos</option>
              <option value="Solicitud de asesoramiento">Solicitud de Asesoría</option>
              <option value="Contacto">Contacto</option>
            </Form.Select>
          </label>
          <label>
            Nacionalidad:
            <Form.Select onChange={(e) => handleFilterChange(e, 'nacionality')}>
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
            <Form.Select onChange={(e) => handleFilterChange(e, 'country')}>
              <option value="">Todos</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </label>
          <button onClick={() => resetFilters()}>Reestablecer Filtros</button>
        </div>
      {usersData.map((post, index) => (
          <div key={post.id} className={`user-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <ul className='unorderListUsers' type="none">
                <li className='usersList'>{post.name}
                  <div className="user-detail">
                    <strong>Asunto:</strong> {post.subject}
                  </div>
                  <div className="user-detail">
                    <strong>Profesión:</strong> {post.profession}
                  </div>
                  <div className="user-detail">
                    <strong>Nacionalidad:</strong> {post.nacionality}
                  </div>
                  <div className="user-detail">
                    <strong>País de residencia:</strong> {post.country}
                  </div>
                  <div className="user-detail">
                    <strong>Email:</strong> {post.email}
                  </div>
                  <div className="user-detail">
                    <Link to={`/descripcion/${post.id}`}>
                      <strong className='dscription'>Descripción</strong>
                    </Link>
                  </div>
                </li>
            </ul>
          </div>
        ))}
      </section>
      <Pagination totalItems={usersData.length} itemsPerPage={pageSize} onPageChange={onPageChange} />
    </section>
  );
}

export default UsersForms;
