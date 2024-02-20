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
        <section>
          <h1>{selectedUser.name}</h1> <br/>
          <p> <strong>Asunto:</strong>  {selectedUser.subject}</p> <br/>
          <p> <strong>Profesión:</strong>  {selectedUser.profession}</p> <br/>
          <p> <strong>Nacionalidad:</strong>  {selectedUser.nacionality}</p> <br/>
          <p> <strong>País de Residencia:</strong>  {selectedUser.country}</p> <br/>
          <p> <strong>Email:</strong>  {selectedUser.email}</p> <br/>
          <p> <strong>Descripción:</strong>  {selectedUser.description}</p> <br/>
        </section>
      )}
    </div>
  );
}

export default UsersDescription;
