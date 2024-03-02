import React from 'react';
import "./AdminHome.css"
import { useAuth } from '../../authContext/AuthContext';
import { Link } from 'react-router-dom';
import Jorge from "../../assets/img/jorge-4.png"

function AdminHome() {

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='Section-adm'>
      <div className='jorgeImg_admin'>
      <img src={Jorge} alt="" className='JorgeAdm' />
      </div>
      <div className="admin-dashboard">
      <h1 className='welcome_title'>
        ¡Buen día Team!
      </h1>
      <br />
      <Link to="/admnews">  
        <button className='btn-admin'>Ver Noticias</button>
      </Link>
      <br />
      <Link to="/blogadm">
        <button className='btn-admin'>Crear Noticia</button>
      </Link>
      <br />
      <Link to="/users">  
        <button className='btn-admin'>Ver usuarios</button>
      </Link>
      <br />
      <button onClick={handleLogout} className='btn-admin'>Cerrar sesión</button>
    </div>
  </section>
  );
}

export default AdminHome;
