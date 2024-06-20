import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import { useParams } from 'react-router-dom';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

function UsersDescription() {
  const { id } = useParams(); 
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            const usersDoc = doc(db, 'usersForms', id);
            const snapshot = await getDoc(usersDoc);
    
            if (snapshot.exists()) {
              const usersData = snapshot.data();
              setSelectedUser({
                id,
                ...usersData,
              });
        } else {
          setSelectedUser(null);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setSelectedUser(null);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <div>
      <ScrollToTop />
      {selectedUser && (
        <section style={{ 
          margin: '20px', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '10px', 
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h1>{selectedUser.name}</h1> <br/>
          <p> <strong>Asunto:</strong> <br/> {selectedUser.subject}</p> <br/>
          <p> <strong>Profesión:</strong> <br/> {selectedUser.profession}</p> <br/>
          <p> <strong>Nacionalidad:</strong> <br/> {selectedUser.nacionality}</p> <br/>
          <p> <strong>País de Residencia:</strong> <br/> {selectedUser.country}</p> <br/>
          <p> <strong>Email:</strong> <br/> {selectedUser.email}</p> <br/>
          <p> <strong>Teléfono:</strong> <br/> {selectedUser.telefono}</p> <br/>
          <p> <strong>¿Has emigrado anteriormente?:</strong> <br/> {selectedUser.hasEmigrated}</p> <br/>
          <p> <strong>Fecha prevista para mudarse a Alemania:</strong> <br/> {selectedUser.moveDate}</p> <br/>
          <p> <strong>Estado civil y familiar:</strong> <br/> {selectedUser.maritalStatus}</p> <br/>
          <p> <strong>Nivel de dominio en Alemán:</strong> <br/> {selectedUser.germanLevel}</p> <br/>
          <p> <strong>Nivel de dominio en Inglés:</strong> <br/> {selectedUser.englishLevel}</p> <br/>
          <p> <strong>Costo estimado para comenzar una nueva vida en Alemania:</strong> <br/> {selectedUser.estimatedCost}</p> <br/>
          <p> <strong>Motivación para iniciar una nueva vida en Alemania:</strong> <br/> {selectedUser.motivation}</p> <br/>
          <p> <strong>Descripción:</strong> <br/> {selectedUser.description}</p> <br/>
        </section>
      )}
    </div>
  );
}

export default UsersDescription;
